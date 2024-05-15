const express = require('express')

const app = express();
app.use(express.json());
app.post('/', (req, res) => {
    if(isNaN(req.body.operand1) || isNaN(req.body.operand2)){
        res.status(400).send(JSON.stringify({Error: 'Requisição inválida. Forneça operandos numéricos válidos.' },null,3));
    }
    const mult = req.body.operand1 * req.body.operand2;
    res.send(JSON.stringify({result: mult},null,3));
});

app.listen(1003, () => {
    console.log("Ok");
});