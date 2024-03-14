import path from 'path'
import fs from 'fs'
const tmpPath = path.join(__dirname, '../data/tmp')
const storagePath = path.join(__dirname, '../data/storage')
import { Post, PostPreview } from '@/app/db/post.model'

export const uploadFile = async (req, res, next) => {
    try {
        const { file, userId } = req
        if (!file) {
            res.status(500).json({
                message: 'Необходимо выбрать файл',
            })
            return
        }
        //originalname - это изначальное название файла, которое было при загрузке, а filename - название под которым файл сохранился во временной директории
        const { filename, originalname } = file
        const newFileName = `${Date.now()}_${originalname}`
            .toLowerCase()
            .replace(' ', '_')
        //sourcePath - это полный путь внутри файловой системы в папку, где находится временный файл
        const sourcePath = path.join(tmpPath, './' + filename)
        checkUserFolder(userId)
        //destPath - это полный путь внутри файловой системы в папку + название файла, куда мы хотим положить файл на постоянню основу. Папку пользователя создаем, используя его userId
        const destPath = path.join(storagePath, `./${userId}/${newFileName}`)
        //переименовываем путь с временного на постоянный
        fs.renameSync(sourcePath, destPath)

        //сохраняем в БД информацию о файле
        //path - ставим путь внутри сайта, т.е. после хоста (здесь после localhost:3005/)
        const createdFile = new File({ userId, name: newFileName, path: `/storage/${userId}/${newFileName}` })

        await createdFile.save()

        res.json({
            item: createdFile
        })
    } catch (err) {
        next(err)
    }
}
