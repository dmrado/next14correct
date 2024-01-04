import { Model, DataTypes } from "sequelize";
import connection from "./connection";

const init_medium_users = (sequelize) => {
    class Post extends Model {}
    Post.init(
        {
            title: DataTypes.STRING,
            text: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "post",
        }
    );
    // Post.sync()
    return Post;
};

export default init_medium_users(connection, DataTypes);
