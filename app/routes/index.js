require('dotenv').config();

module.exports = function (app) {
    app.get("/", (req, res) => {
        return res.status(200).send({
            message: process.env.APP_NAME+" application."
        })
    });
    
    require('./email.routes')(app);
    require('./errors.routes')(app);
}