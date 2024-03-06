import { sequelize } from '@/app/db/connection'
import Sequelize, { QueryInterface, DataTypes, QueryTypes } from 'sequelize'

const queryInterface: QueryInterface = sequelize.getQueryInterface()

export const up = (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.bulkInsert('posts', [
        {
            title: 'Title Post-1',
            text: 'Text Post-1, Text Post-1, Text Post-1,Text Post-1 Text Post-1, Text Post-1, Text Post-1,Text Post-1 м Text Post-1, Text Post-1, Text Post-1,Text Post-1 Text Post-1, Text Post-1, Text Post-1,Text Post-1 Text Post-1, Text Post-1, Text Post-1,Text Post-1',
            preview: 'Preview Post-1, Preview Post-1, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-2',
            text: 'Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2 Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2, Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2, Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2,Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2',
            preview: 'Preview Post-2, Preview Post-2, Preview Post-2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-3',
            text: 'Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3, Title Post-3',
            preview: 'Preview Post-3, Preview Post-3, Preview Post-3',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-4',
            text: 'Post-4 Post-4t saepe reiciendis voluptatem adipisciunt voluptatem rerum illo velits  Post-4, Post-4, Post-4  Post-4, Post-4, Post-4  Post-4, Post-4, Post-4  Post-4, Post-4, Post-4  Post-4, Post-4, Post-4  Post-4, Post-4, Post-4 ',
            preview: 'Post-4, Post-4, Post-4, Post-4, Post-4, Post-4',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-5',
            text: 'Text Post-5, Text Post-5,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-6',
            text: 'Text Post-6, Text Post-6,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-7',
            text: 'Text Post-7, Text Post-7,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-8',
            text: 'Text Post-8, Text Post-8,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-9',
            text: 'Text Post-9, Text Post-9,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-10',
            text: 'Text Post-10, Text Post-10,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-11',
            text: 'Text Post-11, Text Post-11,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-12',
            text: 'Text Post-12, Text Post-12,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-13',
            text: 'Text Post-13, Text Post-13,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-14',
            text: 'Text Post-14, Text Post-14,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Title Post-15',
            text: 'Text Post-15, Text Post-15,  reiciendis voluptatem adipiscsunt voluptatem rerum illo velits Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  Text Post-5, Text Post-5,  ',
            preview: 'Text Post-5, Text Post-5, Text Post-1,Text Post-1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {}).then(() => {
    })
}

export const down = (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.bulkDelete('posts', {}, {}).then((): void => {
    })
}