const logger = require('./logger');
const { startSpinner } = require('./spinner');
const nodemailer = require('nodemailer');
require('dotenv').config();
const fs = require('fs');

const mapTransporter = () => {
    let transporterBody = {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE === 'true',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        tls:{
            rejectUnAuthorized:true
        }
    }
    if(process.env.ALLOW_DKIM === 'true'){
        const dkimPrivate = fs.readFileSync(process.env.DKIM_PATH_PRIVATE, 'utf8');
        transporterBody.dkim = {
            domainName: process.env.DKIM_DOMAIN,
            keySelector: process.env.DKIM_SELECTOR,  // lo stesso selettore usato nel DNS
            privateKey: dkimPrivate
        }
    }


    return transporterBody
}
const transporter = nodemailer.createTransport(mapTransporter());
const sendEmailTransporter = async (infos) => {
    try {
        //const intervalId = startSpinner();
        await transporter.sendMail(infos);
        //clearInterval(intervalId);
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