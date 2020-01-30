const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

//task1
app.get('/:string', (req, res) => {
    res.send(req.params.string);
});

//task2
const password = 'drip';

app.get('/encode/:string', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.string));
});

app.get('/decode/:string', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.string));
});


app.listen(port, () => {
    console.log('live on ' + port + ' port \n For Message http://localhost:' + port + '/something \n For encode http://localhost:' + port + '/something \n For decode http://localhost:' + port + '/something');
});