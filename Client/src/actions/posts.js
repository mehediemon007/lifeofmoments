import * as api from '../apis'

import { FETCH_ALL, MAKE , UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export  const getPosts = ()=> async(dispatch)=>{
    try {
        const {data} = await api.getPosts();
        dispatch({type: FETCH_ALL, payload:data});
    } catch (error) {
        console.log(error.message)
    }
}

export  const makePost = (postData)=> async(dispatch)=>{
    try {
        const {data} = await api.makePost(postData);
        dispatch({type: MAKE, payload:data});
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost =(currentId,updateData)=>async(dispatch)=>{
    try {
       const {data}= await api.updatePost(currentId,updateData);
       dispatch({type:UPDATE ,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


export const deletePost = (id) => async (dispatch) => {
    try {
      await await api.deletePost(id);

      console.log(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };