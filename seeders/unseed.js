"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_seeder_1 = require("./post.seeder");
var connection_ts_1 = require("@/app/db/connection.ts");
(0, post_seeder_1.down)(connection_ts_1.sequelize.getQueryInterface());
