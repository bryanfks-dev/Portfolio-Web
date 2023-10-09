/* Server configuration(s) */
const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 5000;

// Send mail api
const nodemailer = require('nodemailer');

require('dotenv').config();

// Server route(s)
// Index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/src/home.html');
});

// Projects route
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/dist/src/projects.html');
});

// Resume route
app.get('/resume', (req, res) => {
    res.sendFile(__dirname + '/dist/docs/resume.pdf');
});

// Send message route
app.get('/send', (req, res) => {
    const [name, email, body] = [req.query.name, req.query.email, req.query.message];

    // Set transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bryanfernandoks11@gmail.com',
            pass: process.env.TRANSPORTER_PASSWORD
        }
    });

    // Set mail options
    const mail_options = {
        from: 'bryanfernandoks11@gmail.com',
        to: 'bryanfernandoks11@gmail.com',
        cc: email,
        subject: 'Hello!',
        text: `From ${name}(${email}),\n` + body
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

    res.redirect('/#mail');
});

// About web route
app.get('/aboutweb', (req, res) => {
    res.sendFile(__dirname + '/dist/src/aboutweb.html');
});

// Get all partial js file(s)
const partialFiles = fs.readdirSync(__dirname + "/dist/src/partials").filter(file => file.endsWith(".js"));

// Make a route to get partial js file(s)
for (const file of partialFiles) {
    app.get(`/partials/${file.replace(".js", "")}`, (req, res) => {
        res.sendFile(__dirname + `/dist/src/partials/${file}`);
    });
}

app.listen(PORT, () => {
    console.log("Server is listening to", PORT);
});