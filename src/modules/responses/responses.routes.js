import { Router } from 'express';
import validate from 'express-validation';
import * as c from './responses.controller';
import v from './responses.validation';
import { authJwt } from '../../config/passport';

const ResponsesRouter = Router();

ResponsesRouter.get('/:id', authJwt, c.getResponses);
ResponsesRouter.post('/', validate(v.createResponses), c.createResponses);
ResponsesRouter.patch('/:id', validate(v.updateResponses), authJwt, c.updateResponses);
ResponsesRouter.delete('/:id', authJwt, c.deleteResponses);

export default ResponsesRouter;
