const controller = require('../controllers/email.controller');
module.exports = function (app) {
    app.get("/email", controller.sendEmailToCustomer);
}
