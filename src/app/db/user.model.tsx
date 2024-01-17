import { DataTypes } from "sequelize";
import { connection } from "./connection.tsx";
import {userType} from "../../../new-types";

export const User: userType = connection.define('users', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING
    },
  }, {
    // Other model options go here
  }
)
