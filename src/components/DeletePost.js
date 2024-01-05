'use client'
// const {sequelize} = require('../../backend/models')
// const Post = sequelize.models.Post
import Post from "@/app/db/post.model";


//todo клиентский компонент импортируется внутрь компонента Posts для обработки кнопки удалить, но так как мы не можем напрямую из клиентской части обращаться к модели возможно требуется бекенд с эндпойнтом?
// а кто сказал что "мы не можем напрямую из клиентской части обращаться к модели"? )
// нест он как раз про это: он сразу отвечает за клиентскую и серверную часть, в этом его "фишка" и отличие от СПА

const DeletePost = (id) => {
    const deleteHandler = async (id) => {
        await Post.destroy({
            where: {id}
        })
        // const unDeletedPost = await Post.findByPk(id)
        // if (!unDeletedPost) {
        //     console.log('Пост удален')
        //     revalidatePath('/posts')
        // } else {
        // return res.status(400, {message: 'не удалось удалить'})
        // }
    }

    return <>
        <button
            onClick={e => deleteHandler(id)}
            className="max-h-12 border-dotted border-2 border-red-500 bg-none hover:bg-red-700 text-white py-2 px-4 rounded
            focus:outline-none focus:shadow-outline">
            Удалить
        </button>
    </>
}

// export default DeletePost
