import { Router } from 'express';
import validate from 'express-validation';
import * as c from './menu.controller';
import v from './menu.validation';
import { authJwt } from '../../config/passport';

const MenuRouter = Router();

MenuRouter.get('/:id', authJwt, c.getMenu);
MenuRouter.post('/create.new', validate(v.createMenu), c.createMenu);
MenuRouter.patch('/:id', validate(v.updateMenu), authJwt, c.updateMenu);
MenuRouter.delete('/:id', authJwt, c.deleteMenu);

export default MenuRouter;
