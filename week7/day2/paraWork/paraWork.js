const { response } = require('express')
const http = require('http')

const server = http.createServer((req, res) => {

    // res.end('Hello World from the server')
    // response.end('Hello World from the server')
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>Hello from the about page</h1>')
    } else if (req.url === '/contact') {
        res.end('<h1>Hello from the contact page</h1>')
    }
});

server.listen(5001, 'localhost', () => {
    console.log('Server is listening at localhost on port 5001')
})
