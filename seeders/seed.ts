// import { up } from "./post.seeder";
// import {QueryInterface} from "sequelize";
// import {sequelize} from "@/app/db/connection.ts";
// const queryInterface: QueryInterface = sequelize.getQueryInterface()
//
// up(queryInterface)


import { up } from "./post.seeder";
import { sequelize } from "@/app/db/connection.ts";

up(sequelize.getQueryInterface());
