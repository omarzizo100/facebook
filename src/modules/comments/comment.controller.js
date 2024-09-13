import Comment from "../../../DB/model/comment.model.js";
import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";
export const addComment = async (req, res) => {
const {content, UserId, PostId } = req.body;
const user = await User.findOne({ where: {id: UserId, loginStatus:true}});
if (!user) {
    return res.json({ message: "User not found or not logged in" });
}
const comment = await Comment.create({ content, UserId, PostId });
res.json({ message: "Comment created successfully", comment})
};

export const getComments = async (req, res) => {
  const comments = await Comment.findAndCountAll();
  res.json({message: "Comments fetched successfully", comments});
}


export const userWithPostsAndComments = async (req, res) => {
    const { id } = req.query
    const users = await User.findByPk(id,{
    include: {
    model: Post, 
    attributes: ["title"],
    include: {model: Comment,attributes: ["content"]}
    },
  });
  res.json({ message: "user fetched successfully", users });
  };


export const updateComment = async (req, res) =>{
    const {id} = req.query;
    const {content,UserId} = req.body;
    const comment = await Comment.update({content}, {where:{id,UserId}});
    return comment > 0
    ? res.json({ message: "Comment updated successfully" })
    : res.json({ message: "In-valid comment or not authorized" });
}

export const deleteComment = async (req, res) =>{
    const {id} = req.query;
    const {UserId} = req.body;
    const comment = await Comment.destroy({where:{id,UserId}});
    return comment > 0
    ? res.json({ message: "Comment deleted successfully" })
    : res.json({ message: "In-valid comment or not authorized" });
};