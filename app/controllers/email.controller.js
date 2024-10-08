const { sendEmail } = require('../utils/email');
require('dotenv').config();
module.exports.sendEmailToCustomer = async function (req,res) {
    const { subject, to } = req.body
    let body = {
        from: process.env.MAIL_USER,
        to: to, // list of receivers
        subject: subject, // Subject line
        html: '<b>Hello world?</b>',
    };
    if(!subject || !to) {
        body = null
    }
    const infos = await sendEmail(body);
    return res.status(200).send({
        message: "Email sent to: " + infos.to
    })
}