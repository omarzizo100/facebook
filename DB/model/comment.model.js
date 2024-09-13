import { DataTypes } from "sequelize";
import { SequelizeInstance } from "../connection.js";
import Post from "./post.model.js";
import User from "./user.model.js";

const Comment = SequelizeInstance.define('Comment', {
    id: {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
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

User.hasMany(Comment,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Comment.belongsTo(User)


Post.hasMany(Comment,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Comment.belongsTo(Post)


export default Comment;