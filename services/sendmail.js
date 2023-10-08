const nodemailer = require('nodemailer');

require('dotenv').config();

const send_mail = function (name, email, message) {
    // Set transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bryanfernandoks11@gmail.com',
            pass: process.env.transporterpassword
        }
    });

    // Set mail options
    const mail_options = {
        from: 'bryanfernandoks11@gmail.com',
        to: 'bryanfernandoks11@gmail.com',
        cc: email,
        subject: 'Hello!',
        text: `From ${name}(${email}),\n` + message
    };

    // Send mail
    transporter.sendMail(mail_options, (err, info) => {
        if (err) {
            console.log(`Error sending email: ${err}`);
        }
        else {
            console.log('A mail successfully send');
        }
    });
}

// Export function
module.exports = { send_mail }