import { DataTypes } from "sequelize";
import { SequelizeInstance } from "../connection.js";
import User from "./user.model.js";

const Post = SequelizeInstance.define('Post', {
    id: {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    content: {
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps: true,
}
);

User.hasMany(Post,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
});

Post.belongsTo(User)
export default Post;