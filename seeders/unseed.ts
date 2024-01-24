import { down } from "./post.seeder";
import { sequelize } from "@/app/db/connection.ts";

down(sequelize.getQueryInterface());
