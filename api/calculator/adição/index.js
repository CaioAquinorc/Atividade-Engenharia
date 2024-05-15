const express = require('express')

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    if(isNaN(req.body.operand1) || isNaN(req.body.operand2)){
        res.status(400).send(JSON.stringify({Error: 'Requisição inválida. Forneça operandos numéricos válidos.' },null,3));
    }
    const corpo = req.body
    const soma = corpo.operand1 + corpo.operand2
    res.send(JSON.stringify({ result: soma }, null, 3))
})

app.listen(1001, () => console.log('OK'))