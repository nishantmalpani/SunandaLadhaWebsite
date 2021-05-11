const express = require('express');
const device = require('express-device');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(device.capture());

app.get('/', (req, res) => {
    const device = req.device.type;
    res.render('pages/home', { device });
})

app.get('/about', (req, res) => {
    const device = req.device.type;
    res.render('pages/about', { device });
})

app.get('/contact', (req, res) => {
    const device = req.device.type;
    res.render('pages/contact', { device });
})

app.get('/coaching', (req, res) => {
    const device = req.device.type;
    res.render('pages/coaching', { device });
})

app.get('/get-started', (req, res) => {
    const device = req.device.type;
    res.render('pages/getStarted', { device })
})

app.get('/coaching/group-coaching', (req, res) => {
    res.render('pages/groupCoaching');
})

app.get('/coaching/individual-coaching', (req, res) => {
    const device = req.device.type;
    res.render('pages/individualCoaching', { device });
})

app.get('/coaching/webinar-registration', (req, res) => {
    const device = req.device.type;
    res.render('pages/webinarRegistration', { device });
})

app.get('*', (req, res) => {
    res.render('pages/notFound');
})

app.listen(3000, () => {
    console.log('listening on port 3000!');
})
