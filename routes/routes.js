const Router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlroutes');

Router.use(apiRoutes);
Router.use(htmlRoutes);

module.exports = Router;