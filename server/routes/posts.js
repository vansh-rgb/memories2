import express from "express";
import { getPosts,createPost,updatepost,deletePost,likePost} from '../controllers/posts.js'

const Router = express.Router();
Router.get('/',getPosts);
Router.post('/',createPost);
Router.patch('/:id',updatepost);
Router.delete('/:id',deletePost);
Router.patch('/:id/like',likePost);


export default Router;