/* Server configuration(s) */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const fs = require('fs');

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

/* Service(s) */
const sendd_mail = require("./services/sendmail.js");

const PORT = process.env.PORT || 5000;

// Server route(s)
// Index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/src/home.html');
});

app.post('/', (req, res) => {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message];

    sendmail.send_mail(name, email, message);

    res.redirect('/#mail');
});

// Projects route
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/dist/src/projects.html');
});

// Resume route
app.get('/resume', (req, res) => {
    res.sendFile(__dirname + '/dist/docs/resume.pdf');
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