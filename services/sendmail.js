const nodemailer = require('nodemailer');

require('dotenv').config();

const send_mail = async function (name, email, message) {
    // Set transporter
    const transporter = nodemailer.createTransport({
        port: process.env.MAIL_PORT,
        host: 'smtp.gmail.com',
        service: 'gmail',
        auth: {
            user: process.env.SECRET_MAIL,
            pass: process.env.TRANSPORTER_PASSWORD
        },
        secure: true
    });

    // Set mail options
    const mail_options = {
        from: process.env.SECRET_MAIL,
        to: process.env.SECRET_MAIL,
        cc: email,
        subject: 'Hello!',
        text: `From ${name}(${email}),\n` + message
    };

    // Send mail
    await new Promise((resolve, reject) => {
        transporter.sendMail(mail_options, (err, succ) => {
            if (err) {
                console.log(`Error sending email: ${err}`);
                reject(err);
            }
            else {
                console.log('A mail successfully send');
                resolve(succ);
            }
        });
    });
}

// Export function
module.exports = { send_mail }
