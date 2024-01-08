import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'next14correct_development',
  dialectModule: require('mysql2')
})

module.exports = JSON.stringify(sequelize, null, 2)