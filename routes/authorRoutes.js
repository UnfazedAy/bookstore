import { Router } from 'express';
import { createAuthor } from '../controllers/authorController.js';

const authorRouter = Router();

authorRouter.post('/create', createAuthor);

export default authorRouter;
