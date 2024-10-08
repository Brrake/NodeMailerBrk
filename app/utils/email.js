const logger = require('./logger');
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
function startSpinner() {
    const spinnerChars = ['|', '/', '-', '\\'];
    let index = 0;

    const intervalId = setInterval(() => {
        process.stdout.write(`\r${spinnerChars[index]}`); // Update spinner
        index = (index + 1) % spinnerChars.length; // Loop through spinner characters
    }, 100); // Update spinner every 100ms

    return intervalId; // Return the interval ID to stop later
}
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
            from: 'QuickTraining<priority@quicktraining.it>',
            to: 'daviderubiu5@gmail.com', // list of receivers
            subject: 'Messaggio Ricevuto!', // Subject line
            html: '<b>Hello world?</b>',
        };
    }
    logger.info('Sending email to ' + infos.to + ' ...');
    await sendEmailTransporter(infos);
    return infos
}