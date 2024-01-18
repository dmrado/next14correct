import {connection} from "./connection.js";
const queryInterface = connection.getQueryInterface();

const up = async () => {
    await queryInterface.bulkInsert('posts',
        [
            {
                title: 'Title Post-1',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-2',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-3',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-4',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-5',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-6',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Title Post-7',
                text: 'llam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velits',
                // seeder требует default value, в отличие от sequelize, так как обращается напряую в БД к соотв таблице
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],

    )
}

const down = async () => {
    await queryInterface.bulkDelete('posts', {})
}

export { up, down }
