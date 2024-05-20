import axios from 'axios'

const url = 'https://yaadenproject.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createpost = (newpost) => axios.post(url,newpost);
export const updatePost = (id,updatedpost) => axios.patch(`${url}/${id}`,updatedpost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id,username) =>{ axios.patch(`${url}/${id}/like`,{username: username})

};
export const signup = (data) => axios.post('https://yaadenproject.herokuapp.com/signup',data)
.catch((error) => error.response);
export const login = (data) => axios.post('https://yaadenproject.herokuapp.com/login',data)
.catch((error) => error.response);


