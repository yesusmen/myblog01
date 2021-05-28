var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.post('/', async function(req, res) {

    const { name, to, subject, message } = req.body;

    contentHTML = `
        <h1>Informacion del Correo</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Correo: ${to}</li>
            <li>Asunto: ${subject}</li>
        </ul>
        <p>${message}</p>
    `;

    console.log(contentHTML);

    const transporter = nodemailer.createTransport({
        host: 'mail.jesusaraujo.com.ve',
        port: 465,
        secure: true,
        auth: {
            user: 'jesus.araujo@jesusaraujo.com.ve',
            pass: 'y@69629502SUS'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const info = await transporter.sendMail({
        from: "'JesusAraujo Server' <jesus.araujo@jesusaraujo.com.ve>",
        to: 'yesusmen@gmail.com',
        subject: subject,
        html: contentHTML
    })

    console.log('Message send', info.messageId);

    res.redirect('/');
})

module.exports = router;

