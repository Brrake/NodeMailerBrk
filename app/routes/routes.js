const { sendEmail } = require('../utils/email');
require('dotenv').config();

module.exports = function (app) {
    app.get("/", (req, res) => {
        return res.status(200).send({
            message: process.env.APP_NAME+" application."
        })
    });
    
    app.get("/email", async (req, res) => {
        const infos = await sendEmail();
        return res.status(200).send({
            message: "Email sent to: " + infos.to
        })
    });
    
    const page404 = (req, res) => {
        return res.status(404).send({
            error: true,
            description: 'Call not found'
        })
    };
    app.use(page404);
}