require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const uuid = require('uuid');
const gateway = require('./gateway');

// Middleware para processar JSON
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Gateway service has ben started...');
});

app.post('/', (req, res) => {
    gateway.Resolve(req, res);
});

// Iniciando o servidor
app.listen(process.env.PORT, () => {
    console.log(`The gateway service was started using port: ${process.env.PORT}`);
});