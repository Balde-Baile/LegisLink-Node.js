const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

let problemas = [];

app.use(express.static(path.join(__dirname, 'public')));
app.post('/api/problemas', (req, res) => {
    const problema = req.body.problema;
    if (problema) {
        problemas.push(problema);
        res.status(201).json({ message: 'Problema recebido com sucesso!' });
    } else {
        res.status(400).json({ message: 'Erro: Problema não enviado.' });
    }
});

app.get('/api/problemas', (req, res) => {
    res.status(200).json(problemas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
});