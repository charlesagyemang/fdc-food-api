import { Router } from 'express';
// import validate from 'express-validation';
import * as c from './food.controller';
// import v from './food.validation';
// import { authJwt } from '../../config/passport';

const UserRouter = Router();

UserRouter.get('/ping', c.ping);
// UserRouter.post('/login', validate(v.login), c.login)


export default UserRouter;
