import React from 'react'
import { useSelector } from 'react-redux'
import Postcard from './postcard';
import Loading from '../loading/loading';

const  Posts = ({updateId})=> {
  var posts = null;
    posts = useSelector((state)=>state.posts)
    console.log(posts);
    if(posts.length>0){
      return (
        <div className="postscontainer" >
          {posts.map((post,i)=>{
          return(
            <Postcard post={post} updateId={updateId} key={i} />
          )
        })}
        </div>
      );
    }
    else{
      console.log("post is coming");
      return(
        <h1 style={{paddingLeft: '200px'}}>No Memories</h1>
      )
    }
};
export default Posts;
