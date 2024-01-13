import Sequelize from "sequelize";

import { User } from "./app/db/user.model.js";
import { Post } from "./app/db/post.model.js";
// import { dbOptions } from "./app/db/connection.js";
import {connection} from "./app/db/connection.js";

// import { connection } from "./app/db/connection.js";

// Post.belongsTo(User)
// User.hasOne(Post)


// const registeredModels = [
//   User, Post
// ]

async function dbSync(){
  await connection.sync({force: true})
  // const sequelize = new Sequelize(dbOptions)
  // sequelize.addModels(registeredModels)
  // await sequelize.sync({force: true})

  // await Promise.all(registeredModels.map(async (model)=>{
  //   console.warn('Syncing: ', model.name)
  //   await model.sync({ force: true })
  // }))
}

dbSync()
