import  Mongoose  from "mongoose";
import postMessage from "../models/postmessage.js";
export  const getPosts = async (req,res)=>{
    try {
        const postMessages = await postMessage.find();
        
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
    
}
export const createPost = async (req,res)=>{
    
    
    const {title,image,creator,tags,message} = req.body;
    console.log(title);
    const newPost = new postMessage({
        title,image,creator,tags,message
    });
  
    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
}
export const updatepost = async (req,res)=>{
    
    
    const { id } = req.params;
    const { title, message, creator, image, tags } = req.body;
    
    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, image, _id: id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    console.log(updatedPost);

    res.json(updatedPost);
//    console.log(updatepost);
}
export const deletePost = async (req,res)=>{
    
    
    const { id } = req.params;
   
    
    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    

    await postMessage.findByIdAndRemove(id)
    .then(res.json( "successfully deleted"))
    .catch(err=>console.log(err))
    

   


}

export const likePost = async (req,res)=>{
    
    
    const { id } = req.params;
    const user = req.body.username;
    console.log(user)
   
    
   
    
    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    

   const post =  await postMessage.findById(id);
   console.log(post.likeCount);
   if(post.likeCount.includes(user)){
       post.likeCount.pop();
       const newpost= new  postMessage(post);
       await newpost.save()
       .then(res.status(200).json({"message": "successfull"}))
       .catch((err)=>console.log(err));
   

   }
   else{
    post.likeCount.push(user);
    console.log(post.likeCount);
    const newpost= new  postMessage(post);
    await newpost.save()
    .then(res.status(200).json({"message": "successfull"}))
    .catch((err)=>console.log(err));

   }
  
  
//     res.json(updatedpost);

   

}

