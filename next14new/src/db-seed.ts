import { up } from '@/app/db/post.seeder'
import { sequelize } from '@/app/db/connection.ts'

up(sequelize.getQueryInterface())