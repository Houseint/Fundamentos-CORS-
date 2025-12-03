const express = require('express');
const app = express();
const PORT= 8080;

app.get('/api/mensagem', (req, res) => {
    res.json({ data: "Mensagem super hiper mega blaster gigatonica secreta 2025 sem vírus!!" });
});

app.listen(PORT, () => {
    console.log('API Backend rodando em: http://localhost:&{PORT}');
});