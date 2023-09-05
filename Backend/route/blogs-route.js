import express from 'express';
import {
  getAllBlog,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
  getByUserId,
} from '../controller/blogs-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlog);
blogRouter.post('/add', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getById);
blogRouter.delete('/delete/:id', deleteBlog);
blogRouter.get('/user/:id', getByUserId);

export default blogRouter;
