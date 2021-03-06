import { Router } from 'express';
import validate from 'express-validation';
import * as c from './occassion.controller';
import v from './occassion.validation';
import { authJwt } from '../../config/passport';

const OccassionRouter = Router();

OccassionRouter.get('/:id', c.getOccassion);
OccassionRouter.get('/get/all', authJwt, c.getAllOccasionRecords);
OccassionRouter.post('/create.new', validate(v.createOccassion), c.createOccassion);
OccassionRouter.patch('/:id', validate(v.updateOccassion), authJwt, c.updateOccassion);
OccassionRouter.delete('/:id', authJwt, c.deleteOccassion);

export default OccassionRouter;
