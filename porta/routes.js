module.exports = [
    {
        route: '/api/calculator/add',
        target: 'http://localhost:1001/',
        type: 'POST'
    },
    {
        route: '/api/calculator/subtract',
        target: 'http://localhost:1002/',
        type: 'POST'
    },
    {
        route: '/api/calculator/multiply',
        target: 'http://localhost:1003/',
        type: 'POST'
    },
    {
        route: '/api/calculator/divide',
        target: 'http://localhost:1004/',
        type: 'POST'
    }
]