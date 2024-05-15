const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())

app.post('/', (req,res) => {
    if(isNaN(req.body.operand1) || isNaN(req.body.operand2)){
        res.status(400).send(JSON.stringify({Error: 'Requisição inválida. Forneça operandos numéricos válidos.' },null,3));
    }
    const corpo = req.body
    const sub = corpo.operand1 - corpo.operand2
    res.send(JSON.stringify({result: sub},null,3))
})

app.listen(1002,() => console.log('OK'))