import { Router } from 'express';
import { version } from '../../../package.json';
import FoodRouter from '../food/food.routes';

// Declare Router
const apiRouter = Router();

// get version number of  the api
apiRouter.get('/', (req, res) => {
  res.json({ version });
});

// Plug module routers
apiRouter.use('/food', FoodRouter);
//

export default apiRouter;
