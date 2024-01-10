import { Model, DataTypes } from "sequelize";
import connection from "./connection";


const init_users = (sequelize) => {
    class User extends Model {}
    User.init({
        id: {
            // allowNull: false,
            // autoIncrement: true,
            // primaryKey: true,
            // type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

        {
            sequelize,
            modelName: "user",
        }
    );
    // User.sync().then(() => console.log('User table created.'))
    return User;
};

export default init_users(connection, DataTypes);
