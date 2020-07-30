import { Router } from 'express';
import validate from 'express-validation';
import * as c from './event.controller';
import v from './event.validation';
import { authJwt } from '../../config/passport';

const EventRouter = Router();

EventRouter.get('/:id', authJwt, c.getEvent);
EventRouter.post('/', validate(v.createEvent), c.createEvent);
EventRouter.patch('/:id', validate(v.updateEvent), authJwt, c.updateEvent);
EventRouter.delete('/:id', authJwt, c.deleteEvent);

export default EventRouter;
