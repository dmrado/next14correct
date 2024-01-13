import {up, down} from './app/db/post.seeder.js'
import {Post} from "./app/db/post.model.js";
import {User} from "./app/db/user.model.js";
Post.belongsTo(User)
User.hasOne(Post)

await up()
