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

// const test = async (req, res) => {
//
//     let testAccount = await nodemailer.createTestAccount();
//
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: testAccount.user,
//             pass: testAccount.pass
//         }
//     });
//
//     let message = {
//         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//         to: "iamkbejj@gmail.com, karl.bejerano@urios.edu.ph", // list of receivers
//         subject: "OTP VerificationPage", // Subject line
//         text: "123456 Use this OTP to create your account @fsuu-voting-system.com.", // plain text body
//         html: "<b>123456 Use this OTP to create your account @fsuu-voting-system.com.</b>", // html body
//     };
//
//     transporter.sendMail(message).then((info) => {
//         return res.status(201).json({
//             data: "You should received an email!",
//             info: info.messageId,
//             preview: nodemailer.getTestMessageUrl(info)
//         })
//     }).catch(error => {
//         return res.status(500).json({ error });
//     });
// }

module.exports = {
    verification
}