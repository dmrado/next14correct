import User from "./db/user.model"
import Post from "./db/post.model"

import init_users from "./db/user.model"
import init_medium_posts from "./db/post.model"

// import connection from "./connection";
// import {DataTypes} from "sequelize";

export const MigrateIntrface = async () => {
    const user = new User()
    const post = new Post()

    // перезаписываем
    await user.sync({ force: true })
    await post.sync({ force: true })

    // init_users(connection, DataTypes);
    // init_medium_posts(connection, DataTypes)
}