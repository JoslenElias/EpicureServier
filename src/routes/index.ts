import express from 'express';
import chefsRoutes from './chefs.routes';
import dishRoutes from './dish.routes';
import restaurantsRoutes from './restaurants.routes';

const router = express.Router();
    router.use('/api/chefs/', chefsRoutes);
    router.use('/api/dish/', dishRoutes);
    router.use('/api/restaurants/', restaurantsRoutes);

export default router;