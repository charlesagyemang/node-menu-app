import { Router } from 'express';
import validate from 'express-validation';
import * as c from './category.controller';
import v from './category.validation';
import { authJwt } from '../../config/passport';

const CategoryRouter = Router();

CategoryRouter.get('/:id', authJwt, c.getCategory);
CategoryRouter.post('/', validate(v.createCategory), c.createCategory);
CategoryRouter.patch('/:id', validate(v.updateCategory), authJwt, c.updateCategory);
CategoryRouter.delete('/:id', authJwt, c.deleteCategory);

export default CategoryRouter;
