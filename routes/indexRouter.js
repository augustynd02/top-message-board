const { Router } = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getIndex);

indexRouter.get('/new', indexController.getNew);
indexRouter.post('/new', indexController.postNew);

indexRouter.get('/messages/:id', indexController.getMessage);

module.exports = indexRouter;
