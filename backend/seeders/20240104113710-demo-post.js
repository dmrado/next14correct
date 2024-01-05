'use strict';

module.exports = {
    // а как создавался этот файл? нам правда нужно столько "фейковых "постов?
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Posts', [{
            id: 1,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 1",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 2,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 2",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 3,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 3",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 4,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 4",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 5,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 5",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 6,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 6",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 7,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 7",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 8,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 8",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 9,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 9",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 10,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 10",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 11,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 11",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 12,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 12",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 13,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 13",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 14,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 14",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 15,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 15",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 16,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 16",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 17,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 17",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 18,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 18",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 19,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 19",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 20,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 20",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 21,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 21",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 22,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 22",
            text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 23,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 23",
            text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
        await queryInterface.bulkInsert('Posts', [{
            id: 24,
            //userId понадобится для выяснения кто добавил статью, естественно с разрешения админа
            userId: 1,
            title: "Post 24",
            text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            previewId: "Preview Body of the post ",
            htmlBody: "htmlBody post ",
            imgLink: "https://picsum.photos/200/250",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Posts', null, {})
    }
};
