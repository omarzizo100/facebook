import express from "express";
import db_connection from "./DB/connection.js";
import postRouter from './src/modules/posts/post.routes.js';
import userRouter from './src/modules/users/user.routes.js';
import commentRouter from './src/modules/comments/comment.routes.js';
const app = express()
const port = 8181
db_connection();
app.use(express.json());
app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)
app.get('/', (req,res) => res.send('hello world'))
app.listen(port,() => console.log(`Example app listening on port ${port}!`)) 
 

