const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const ConsultaController = require('./controllers/ConsultaController');
const RmController = require('./controllers/RmController');
const SomaController = require('./controllers/SomaController');
const ContagemController = require('./controllers/ContagemController');
const CardapioController = require('./controllers/CardapioController');
const UpdateController = require('./controllers/UpdateController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/contagem', ContagemController.index);
routes.post('/contagem', ContagemController.store);

routes.post('/rm', RmController.store);

routes.post('/soma', SomaController.store);

routes.get('/update', UpdateController.index);
routes.post('/update', upload.single('thumbnail'), UpdateController.store);

routes.get('/cardapios', CardapioController.index);
routes.post('/cardapios', upload.single('thumbnail'), CardapioController.store);

routes.get('/consulta', ConsultaController.index);

routes.get('/profile', ProfileController.show);

module.exports = routes;