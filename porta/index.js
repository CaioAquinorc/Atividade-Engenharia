const express = require('express');
const proxy = require('express-http-proxy')
const routes = require('./routes.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'OK'
    })
})

function initRoutes(routes) {
    routes.forEach(({ route, target, type }) => {
        app.use(route, proxy(target, {
            proxyErrorHandler: function(err, res, next) {
            switch (err && err.code) {
              case 'ECONNREFUSED':  { return res.status(500).send(JSON.stringify({Error: 'Internal server error. Please try again later.' },null,3)); }
              default:              { next(err); }
            }
        }} ,{
            filter: function (req, res) {
                return req.method == type;
            }
        }))
    })
    console.log('rotas inicializadas')
}

app.listen(1000, () => {
    console.log('OK');
    initRoutes(routes);
});