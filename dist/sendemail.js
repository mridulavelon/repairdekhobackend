"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendemail = void 0;
const nodemailer = require("nodemailer");
const sendemail = async () => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: 'repairdekhoreplyteam@gmail.com',
            pass: 'play@4412',
        },
    });
    let info = await transporter.sendMail({
        from: 'repairdekhoreplyteam@gmail.com',
        to: "mridulavelon260@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
exports.sendemail = sendemail;
(0, exports.sendemail)().catch(console.error);
//# sourceMappingURL=sendemail.js.map