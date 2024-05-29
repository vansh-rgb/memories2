import React from 'react'
import { useState,useEffect } from 'react';
import { TextField, Typography,Card, Button, IconButton, Input } from "@material-ui/core";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from 'react-redux';
import {createPost} from '../actions/posts'
import { useSelector } from 'react-redux';
import { updatePost } from '../actions/posts';


export default function Form(props) {
    const [postdata, setpostdata] = useState({title: "",creator: "",message: "",tags: "",image: ""});
    const post = useSelector((state)=> props.Id ? state.posts.find((p)=>p._id===props.Id): null);
    useEffect(() => {
        if(post) setpostdata(post);
    }, [post])
  
    function tobase64(event){
        var reader = new FileReader();
        console.log("next");
        reader.onload = function () {
            var base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
                console.log(base64String);
               setpostdata({...postdata,image: base64String});
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    const dispatch = useDispatch();
    function posthandler(){
        if(postdata.title === "" || postdata.creator === ""  || postdata.image === "" || postdata.message === ""){
        }
        if(props.Id){
            console.log(props.Id);
            dispatch(updatePost(props.Id,postdata))
        }
        else{
            console.log(postdata);
            dispatch(createPost(postdata));
        }
    }
  
    return (
        <Card className="creatememories"  >
            <Typography style={{ margin: "auto",fontFamily: "Sigmar One , cursive" }} variant="h4" component="div" gutterBottom>
               Create Memories
            </Typography>
            <TextField id="outlined-basic" label="creator" value={postdata.creator} variant="outlined" onChange={(e)=>{setpostdata({...postdata,creator: e.target.value})}} />
            <TextField id="outlined-basic" label="title" variant="outlined" value={postdata.title} onChange={(e)=>{setpostdata({...postdata,title: e.target.value})}} />
            <TextField id="outlined-basic" label="message" variant="outlined" value={postdata.message} onChange={(e)=>{setpostdata({...postdata,message: e.target.value})}} />
            <TextField id="outlined-basic" label="tags" variant="outlined" value={postdata.tags} onChange={(e)=>{setpostdata({...postdata,tags: e.target.value.split(',')})}} />
            <div style={{ margin: "auto" }}>
                <Input accept="image/*" id="icon-button-file" type="file"  onChange={(e)=>{tobase64(e)}} />
                <IconButton color="primary" aria-label="upload picture" component="span" style={{color: "lightpink"}} >
                    <AddPhotoAlternateIcon />
                </IconButton>
            </div>
            <Button variant="contained" style={{backgroundColor: "Pink",fontWeight: "bold"}}  onClick={()=>{posthandler()}}>Post</Button>
        </Card>
    )
}
