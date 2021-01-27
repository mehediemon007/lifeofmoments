import express from 'express';
import mongoose from "mongoose";
import postMessage from "../models/postMessage.js"

export const getPosts = async(req,res)=>{
    try{
         const postAllMessage = await postMessage.find();
         res.status(200).json(postAllMessage);
    }catch(error){
         res.status(404).json({message:error.message})
    }
}

export const makePost = (req,res)=>{
  const post = req.body;

  const newPost = new postMessage(post);

  try{
      newPost.save();

      res.status(201).json(newPost);
  }catch(error){
      res.status(409).json({message:error.message});
  }
}

export const updatePost =async(req,res)=>{
    const {id:_id} = req.params;

    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with the id');

    const updatePost = await postMessage.findByIdAndUpdate(_id,{
        ...post,_id},{new:true});

    res.json(updatePost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await postMessage.findById(id);

    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}