const ErrorsEngine = require('../controllers/errors.controller');
module.exports = function (app) {
  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);
}