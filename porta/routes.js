module.exports = [
    {
        route: '/api/calculator/add',
        target: 'http://localhost:1001/:val1/:val2',
        type: 'POST'
    },
    {
        route: '/api/calculator/subtract',
        target: 'http://localhost:1002/:val1/:val2',
        type: 'POST'
    },
    {
        route: '/api/calculator/multiply',
        target: 'http://localhost:1003/:val1/:val2',
        type: 'POST'
    },
    {
        route: '/api/calculator/divide',
        target: 'http://localhost:1004/:val1/:val2',
        type: 'POST'
    }
]