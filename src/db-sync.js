import { User } from "./app/db/user.model.js";
import { Post } from "./app/db/post.model.js";

const registeredModels = [
  User, Post
]

function dbSync(){
  registeredModels.forEach(model=>{
    model.sync()
  })
}

dbSync()
