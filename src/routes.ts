import express from 'express';
import CepController from './controllers/CepController';

const routes = express.Router();
const cepController = new CepController();

routes.get('/ceps/:id', cepController.show);

export default routes;