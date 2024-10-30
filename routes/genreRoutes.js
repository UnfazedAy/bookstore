import { Router } from 'express';
import { createGenre } from '../controllers/genreController.js';

const genreRouter = Router();

genreRouter.post('/create', createGenre);

export default genreRouter;
