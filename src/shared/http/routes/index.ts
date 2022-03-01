import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

//Welcome message in root path
routes.get('/', (request, response) => {
  return response.json({ message: 'Seja bem vindo!' });
});

export default routes;
