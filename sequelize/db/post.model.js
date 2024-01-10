import { Model, DataTypes } from "sequelize";
import connection from "./connection";
import User from "./user.model"


const init_medium_posts = (sequelize) => {
    class Post extends Model {}
    Post.init(
        {
            title: DataTypes.STRING,
            text: DataTypes.STRING,
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: User,
                    key: 'id'
                }
            },
        },
        {
            sequelize,
            modelName: "post",
        }
    );
    // Post.sync({ force: true }).then(() => console.log('Post table created.'))
    return Post;
};

export default init_medium_posts(connection, DataTypes);
