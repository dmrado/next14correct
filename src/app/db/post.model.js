import { Model, DataTypes } from "sequelize";
import { connection } from "./connection";


// export class Post extends Model{}

export const Post = connection.define('posts', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    }, {
      // sequelize: connection
   // Other model options go here
    }
)


// const init_post = (sequelize) => {
//     class Post extends Model {}
//     Post.init(
//         {
//             title: {
//               type: DataTypes.STRING,
//               unique: true,
//               allowNull: false
//             },
//             text: {
//               type: DataTypes.STRING
//             },
//         },
//         {
//             sequelize,
//             modelName: "post",
//         }
//     );
//     // Post.sync()
//     return Post;
// };

// export default init_post(connection);
