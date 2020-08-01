import { Router } from 'express';
import { version } from '../../../package.json';
import UserRouter from '../user/user.routes';
import EventRouter from '../event/event.routes';
import AttendeeRouter from '../attendee/attendee.routes';
import MenuRouter from '../menu/menu.routes';
import OccassionRouter from '../occassion/occassion.routes';
import CategoryRouter from '../category/category.routes';
import ItemRouter from '../item/item.routes';
import ResponsesRouter from '../responses/responses.routes';

// Declare Router
const apiRouter = Router();

// get version number of  the api
apiRouter.get('/', (req, res) => {
  res.json({
    version,
  });
});

// Plug module routers
apiRouter.use('/users', UserRouter);
apiRouter.use('/events', EventRouter);
apiRouter.use('/attendees', AttendeeRouter);
apiRouter.use('/menus', MenuRouter);
apiRouter.use('/occassions', OccassionRouter);
apiRouter.use('/categories', CategoryRouter);
apiRouter.use('/items', ItemRouter);
apiRouter.use('/responses', ResponsesRouter);

export default apiRouter;
