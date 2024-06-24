import { User } from '@/app/db/user.model'
import { Post } from '@/app/db/post.model'
import { sequelize } from '@/app/db/connection'

const registeredModels = [ User, Post ]
const runDbSync = async () => {
    console.log('Syncing DB schema for: ', registeredModels.map(m => m.name).join(', '))
    await sequelize.sync({ alter: true })
    console.log('...done syncing DB schema')
}
// @ts-ignore
await runDbSync()
