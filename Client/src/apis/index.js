import axios from "axios";

const url = 'https://lifemoments01.herokuapp.com/posts';

export const getPosts = ()=> axios.get(url);

export const makePost =(newPost)=> axios.post(url,newPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const updatePost =(id,updateData)=> axios.patch(`${url}/${id}`,updateData);

export const deletePost = (id) => axios.delete(`${url}/${id}`);