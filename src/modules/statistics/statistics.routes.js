import { Router } from 'express';
import * as c from './statistics.controller';
import { authJwt } from '../../config/passport';

const StatisticsRouter = Router();

StatisticsRouter.get('/', authJwt, c.getResponses);


export default StatisticsRouter;
