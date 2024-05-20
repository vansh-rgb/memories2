import * as api from '../api'
export const getposts =() => async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch ({type : 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
  

}
export const createPost =  (post) => async(dispatch)=>{
    try {
        console.log(post);
        const data = await api.createpost(post);
        console.log(data);
        dispatch ({type : 'CREATE', payload: data.data});
    } catch (error) {
        console.log(error);
        
    }
  

}
export const updatePost =  (id,post) => async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        console.log(data);
        dispatch({type: 'UPDATE',payload: {data,id}});
    } catch (error) {
        console.log(error);
        
    }
  

}
export const deletePost =  (id,username) => async(dispatch)=>{
    try {
        const {data} = await api.deletePost(id);
        dispatch({type: 'DELETE',payload: id});
       
        console.log(data);
       
    } catch (error) {
        console.log(error);
        
    }
  

}
export const likePost =  (id,username) => async(dispatch)=>{
    try {
        console.log(username);
        dispatch({type: 'LIKE',payload: {id,username}});
        const response = await api.likePost(id,username);
        console.log(response);
      
        
        
       
       
       
    } catch (error) {
        console.log(error);
        
    }
  

}



