const logger = require('./logger');
const { startSpinner } = require('./spinner');
const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
});
const sendEmailTransporter = async (infos) => {
    try {
        const intervalId = startSpinner();
        await transporter.sendMail(infos);
        clearInterval(intervalId);
        console.log('\n');
        logger.info('Email sent to: ' + infos.to);
    } catch (error) {
        logger.error('Error sending email:', error);
    }
};
module.exports.sendEmail = async (infos) => {
    if(!infos){
        infos = {
            from:  `${process.env.APP_NAME}<${process.env.MAIL_USER}>`,
            to: process.env.MAIL_DEFAULT, // list of receivers
            subject: 'Messaggio Ricevuto!', // Subject line
            html: '<b>Hello world</b>',
        };
    }
    logger.info('Sending email to ' + infos.to + ' ...');
    await sendEmailTransporter(infos);
    return infos
}