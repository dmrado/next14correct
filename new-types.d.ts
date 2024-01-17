import Sequelize from "sequelize";

export type connectionType = () => Sequelize;

// export type connectionType = {
    // dialect: string,
    // dialectModule: any,
    // host: string,
    // port: string,
    // username: string,
    // password: string,
    // database: string,
    // define: () => Sequelize,
// }

export type postType = {
    title: string,
    text: string,
    userId: any
}

export type userType = {
    name: string,
    surname: string
}