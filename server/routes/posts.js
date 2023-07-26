import express from 'express';

import { getComments, getCommentsBySearch, getCommentsByCreator, getComment, createComment, updateComment, likeComment, commentComment, deleteComment } from '../controllers/comments.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', getCommentsByCreator);
router.get('/search', getCommentsBySearch);
router.get('/', getComments);
router.get('/:id', getComment);

router.post('/', auth,  createComment);
router.patch('/:id', auth, updateComment);
router.delete('/:id', auth, deleteComment);
router.patch('/:id/likePost', auth, likeComment);
router.post('/:id/commentPost', commentComment);

export default router;s