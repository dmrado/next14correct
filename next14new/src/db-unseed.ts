import { down } from '@/app/db/post.seeder'
import { sequelize } from '@/app/db/connection.ts'

down(sequelize.getQueryInterface())