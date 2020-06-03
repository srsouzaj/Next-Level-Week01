import express from 'express';
import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';



const routes = express.Router();
const pointController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);


export default routes;
