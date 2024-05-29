import axios from 'axios'

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createpost = (newpost) => axios.post(url,newpost);
export const updatePost = (id,updatedpost) => axios.patch(`${url}/${id}`,updatedpost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id,username) =>{ axios.patch(`${url}/${id}/like`,{username: username})

};
export const signup = (data) => axios.post('http://localhost:5000/signup',data)
.catch((error) => error.response);
export const login = (data) => axios.post('http://localhost:5000/login',data)
.catch((error) => error.response);


