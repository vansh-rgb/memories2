import React from 'react';
import RecommendIcon from '@mui/icons-material/Recommend';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';


import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost,likePost } from '../../actions/posts';



import useStyles from './styles';

import { IconButton } from '@mui/material';


const Postcard = (props) => {
  const user = localStorage.getItem('usernames');
  
 
  const dispatch = useDispatch();
  const classes = useStyles();
  function deletepost(){
    dispatch(deletePost(props.post._id));
  }
  function likepost(){
    
    dispatch(likePost(props.post._id,user));
  }



  return (
    <Card   className="postcard" >
       <div style={{padding: "10px 10px 10px 10px"}} >
        <Typography variant="h6">{props.post.creator}</Typography>
        <Typography variant="body2">{moment(props.post.createdAt).fromNow()}</Typography>
      </div>
      <CardMedia  component="img"  src={`data:image/jpeg;base64, ${props?.post?.image}`} title={props.post.title} className="postimage" />
     
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" ></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{props?.post?.tags?.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{props?.post?.title}</Typography>
      <CardContent>
        <Typography className="postmessage" variant="body2" color="textSecondary" component="p">{props?.post?.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} className="actionscard">
         <Button size="small" color="primary" onClick={()=>{likepost()}} ><RecommendIcon fontSize="small"   /> Like {props?.post?.likeCount?.length} </Button>
        <Button size="small" color="primary" onClick={()=>{deletepost()}}><DeleteIcon fontSize="small" /> Delete</Button> 
        <IconButton onClick={()=>props.updateId(props?.post?._id)}  ><UpdateIcon/></IconButton>
      </CardActions>
    </Card>
  );
};

export default Postcard;