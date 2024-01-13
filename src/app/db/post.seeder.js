import {connection} from "./connection.js";
import Sequelize from "sequelize";
const queryInterface = connection.getQueryInterface();


const up = async ( Sequelize) => {
    await queryInterface.bulkInsert('Posts',
        [
            {
                title: 'Title Post-1',
                text: 'Text Post-1, Text Post-1, Text Post-1,Text Post-1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-2',
                text: 'Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2',
                // todo требует default value, не знаю как по-другому передать его сюда
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],

    )
}

const down = async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {}, Sequelize)
}

export {up, down}