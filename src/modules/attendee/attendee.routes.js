import { Router } from 'express';
import validate from 'express-validation';
import * as c from './attendee.controller';
import v from './attendee.validation';
import { authJwt } from '../../config/passport';

const AttendeeRouter = Router();

AttendeeRouter.get('/:id', authJwt, c.getAttendee);
AttendeeRouter.post('/', validate(v.createAttendee), c.createAttendee);
AttendeeRouter.patch('/:id', validate(v.updateAttendee), authJwt, c.updateAttendee);
AttendeeRouter.delete('/:id', authJwt, c.deleteAttendee);

export default AttendeeRouter;
