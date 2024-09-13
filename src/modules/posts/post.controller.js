import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";
import comment from "../../../DB/model/comment.model.js";

export const addPost = async (req, res) => {
const {title, content, UserId} = req.body;
const user = await User.findOne({ where: {id: UserId, loginStatus: true }});
if (!user) 
    {return res.json({ message: "User not found or not logged in" });}
const post = await Post.create({ title, content, UserId });
res.json({ message: "Post created successfully", post });
};

export const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json({message: "Posts fetched successfully", posts })
  }


export const getSpecificPost = async (req, res) => {
  const {UserId} = req.query;
  const post = await Post.findAll({where:{UserId}},{
  include: {
  model: User,  
  attributes: ["userName", "email"],
  },
});
res.json({ message: "Post fetched successfully", post });
};

export const updatePost = async (req, res) => {
    const {id} = req.query;
    const {title, UserId} = req.body;
    const post = await Post.update({title}, {where:{id,UserId}});
    return post > 0
    ? res.json({ message: "Post updated successfully" })
    : res.json({ message: "Post not found or not authorized"})
}

export const deletePost = async (req, res) => {
    const {id} = req.query;
    const {UserId} = req.body;
    const post = await Post.destroy({where:{id,UserId}});
    return post > 0
    ? res.json({ message: "Post deleted successfully" })
    : res.json({ message: "In-valid Post or not authorized"})
}

