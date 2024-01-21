import { sequelize } from "@/app/db/connection";
import Sequelize, { QueryInterface, DataTypes, QueryTypes } from "sequelize";
const queryInterface: QueryInterface = sequelize.getQueryInterface();

export const up = (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.bulkInsert('posts', [
        {
            title: 'Title Post-1',
            text: 'Text Post-1, Text Post-1, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-2',
            text: 'Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-3',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-4',
            text: 'llam et saepe reiciendis voluptatem adipisciunt voluptatem rerum illo velits',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-5',
            text: 'llam et saepe reiciendis voluptatem adipiscsunt voluptatem rerum illo velits',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],  {}).then(() => {});
};


export const down = (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.bulkDelete('posts', {}, {}).then(() : void => {});
}