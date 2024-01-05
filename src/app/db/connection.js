import Sequelize from "sequelize";

export default new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: '123',
    database: 'nextjs',
    dialectModule: require('mysql2')
});
