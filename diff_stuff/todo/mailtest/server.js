var express = require('express');
var nodemailer = require('nodemailer');
var app = express();


app.get('/', function(req, res) {
    res.send({
        hello: 'Iddd'
    })
});

app.post('/', function(req, res) {

    const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
    async function main(){


        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'mess6me@gmail.com',
                pass: 'Trubenko83'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: '"Fred Foo " <foo@example.com>', // sender address
            to: "mess6me@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

    res.send({
        hello: 'Iddd'
    })
});


app.listen(1234);