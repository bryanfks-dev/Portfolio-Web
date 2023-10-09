/* Server configuration(s) */
const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 5000;

/* Service(s) */
const send_mail = require(__dirname + "/services/sendmail.js");

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
app.get('/send', async (req, res) => {
    const [name, email, body] = [req.query.name, req.query.email, req.query.message];

    await send_mail.send_mail(name, email, body);

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