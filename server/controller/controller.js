const nodemailer = require('nodemailer');
const MailGen = require('mailgen');
const { EMAIL, PASSWORD } = require('../env.js');

const verification = async (req, res) => {

    const {email} = req.body;

    let config = {
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    const otp = Math.floor(100000 + Math.random() * 900000);

    let message = {
        from: EMAIL,
        to: `iamkbejjjr@gmail.com, iamkbej@gmail.com, ${email}`,
        subject: "OTP VerificationPage",
        html: `<b>${otp} <br/>Use this OTP to create your account @fsuu-voting-system.com.</b>`
    }

    transporter.sendMail(message).then((info) => {
        return res.status(201).json({
            data: "You should received an email!",
            otp: `${otp}`,
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error });
    });
}

module.exports = {
    verification
}