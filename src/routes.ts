import express from 'express';
import CepController from './controllers/CepController';
import UsuarioController from './controllers/UsuarioController';

const routes = express.Router();
const cepController = new CepController();
const usuarioController = new UsuarioController();

routes.post('/login', usuarioController.login);
routes.get('/ceps/:id', cepController.show);

// Para testar com autenticação e enviar o token pelo header
// routes.get('/ceps/:id', usuarioController.verifyJWT, cepController.show);

export default routes;