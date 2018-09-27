const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./server/routes/index');
const todos = require('./server/routes/todos');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', todos);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3200, () => console.log('Server Started on port 3200'));