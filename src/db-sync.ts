import {User} from "@/app/db/user.model.ts";
import {Post} from "@/app/db/post.model.ts";
import { Sequelize } from 'sequelize-typescript';

const registeredModels = [User, Post]
const runDbSync = async () => {
    console.log('Syncing DB schema....');
    const sequelize = new Sequelize(dbOptions);
    sequelize(registeredModels);
    await sequelize.sync({ alter: true });
    console.log('...done syncing DB schema');
}

await runDbSync()
