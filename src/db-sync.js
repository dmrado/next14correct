// import {Post} from "@/app/db/post.model";
import { User } from "./app/db/user.model.js";
// const user = require("./app/db/user.model")


const registeredModels = [
  User
]

function dbSync(){
  registeredModels.forEach(model=>{
    model.sync()
  })
}

dbSync()
