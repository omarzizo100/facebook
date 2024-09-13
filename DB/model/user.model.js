import { DataTypes } from "sequelize";
import { SequelizeInstance } from "../connection.js";

const User = SequelizeInstance.define('User', {
    id: {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    userName: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    loginStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},
{
    timestamps: true,
}
);

console.log(SequelizeInstance.model.User)

export default User;