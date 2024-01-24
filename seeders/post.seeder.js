"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
var connection_1 = require("@/app/db/connection");
var queryInterface = connection_1.sequelize.getQueryInterface();
var up = function (queryInterface) {
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
    ], {}).then(function () { });
};
exports.up = up;
var down = function (queryInterface) {
    return queryInterface.bulkDelete('posts', {}, {}).then(function () { });
};
exports.down = down;
