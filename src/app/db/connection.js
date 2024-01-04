import Sequelize from "sequelize";

export default new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'next14correct_development',
    dialectModule: require('mysql2')
});
