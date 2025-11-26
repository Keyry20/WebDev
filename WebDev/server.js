const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs', { username: '' });
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    res.render('index.ejs', { username }); 
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});