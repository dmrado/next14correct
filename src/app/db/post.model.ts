import { Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, DataTypes } from 'sequelize';
import {User} from "./user.model.ts";
import {sequelize} from "./connection.ts";

export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare text: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Post.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING
        },
        text:{
            type: DataTypes.STRING
        },
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
    },
    {
        sequelize,
        timestamps: true
    })
Post.belongsTo(User)

