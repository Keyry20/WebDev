const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/bs', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.get('/', (req, res) => {
    res.render('login.ejs', { username: '' });
});

app.get('/user', (req, res) => {
    const { username } = req.body;
    res.render('user.ejs', { username }); 
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});