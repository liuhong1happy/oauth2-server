'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 25,
    secure: false, // secure:true for port 465, secure:false for port 25
    auth: {
        user: 'liuhong1.happy@163.com',
        pass: 'liuhong1happy'
    }
});

module.exports.sendMail = function(to,subject, html, text = false) {
    return new Promise(function(resolve, reject) {
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"oauth-server" <liuhong1.happy@163.com>', // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error)
            } else {
                console.log('Message %s sent: %s', info.messageId, info.response);
                resolve(true)
            }
        });
    })
}