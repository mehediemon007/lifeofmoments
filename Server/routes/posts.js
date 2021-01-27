import expres from 'express';

import {getPosts,makePost,updatePost,deletePost,likePost} from "../controllers/posts.js"

const router = expres.Router();

router.get('/',getPosts)

router.post('/',makePost)

router.patch("/:id",updatePost)

router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;