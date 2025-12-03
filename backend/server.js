const express = require('express');
const app = express();
const cors = require('cors');
const PORT= 8080;
//configurando o CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    method: 'GET',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
//com o CORS configurado, a api pode responder a requisições do front-end
app.get('/api/mensagem', (req, res) => {
    res.json({ data: "Mensagem super hiper mega blaster gigatonica secreta 2025 sem vírus!!" });
});

app.listen(PORT, () => {
    console.log('API Backend rodando em: http://localhost:&{PORT}');
});