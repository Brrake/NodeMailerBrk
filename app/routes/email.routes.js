const controller = require('../controllers/email.controller');
module.exports = function (app) {
    app.post("/email", controller.sendEmailToCustomer);
}
