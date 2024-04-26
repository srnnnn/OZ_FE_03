const express= require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users.controller');

usersRouter.get('/',usersController.getUsers);
usersRouter.post('/',usersController.getUser);
usersRouter.get('/:userId', usersController.postUser);

module.exports = usersRouter;