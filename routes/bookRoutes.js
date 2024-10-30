import { Router } from 'express';
import {
  createBook,
  getBooks,
  updateBook,
  getBook,
  deleteBook,
} from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.post('/create', createBook);
bookRouter.get('/', getBooks);
bookRouter
  .route('/:id')
  .post(updateBook)
  .get(getBook)
  .delete(deleteBook);

export default bookRouter;
