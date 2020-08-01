import { Router } from 'express';
import validate from 'express-validation';
import * as c from './item.controller';
import v from './item.validation';
import { authJwt } from '../../config/passport';

const ItemRouter = Router();

ItemRouter.get('/:id', authJwt, c.getItem);
ItemRouter.post('/create.new', validate(v.createItem), c.createItem);
ItemRouter.patch('/:id', validate(v.updateItem), authJwt, c.updateItem);
ItemRouter.delete('/:id', authJwt, c.deleteItem);

export default ItemRouter;
