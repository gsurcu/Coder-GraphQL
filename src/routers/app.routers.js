const express = require('express');
const ApiRouter = require('./api/api.routes');
const { warnLog, infoLog } = require('../middlewares/logger');
const graphql = require('./graphql/graphql.routes');
const router = express.Router();

//Routes
class Router {
  constructor() {
    this.apiRoutes = new ApiRouter()
  }

  start(){
    router.use(infoLog);
    router.use('/api', this.apiRoutes.start());
    router.use('/graphql', graphql)
    router.use('/*', warnLog);
    return router;
  }
}

module.exports = Router;