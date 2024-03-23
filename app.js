// ALTSCHOOL ASSIGNMENT 2
// Write a simple server to handle the following
// GET /books
// PUT /books
// DELETE /books
// GET /books/author/
// POST /books/author/
// PUT /books/author/

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const HOST_NAME = 'localhost'

const pathRoute = path.join(__dirname, 'path', 'app.js')

const behaviour = (req, res) => {
    if (req.url === '/books' && req.method === 'GET') {
        res.write('Hello from Mohammed');
        console.log('This is a get request');

    }
      else if (req.url === '/books' && req.method === 'PUT') {
        res.write('Hello from the server');
        console.log('This is a put request');

    }
     else if (req.url === '/books' && req.method === 'DELETE') {
        res.write('DELETE REQUEST');
        console.log('This is a delete request');

    } else if (req.url === 'books/author/' && req.method === 'GET') {
        res.write('Get author of the book');
        console.log('This returns the name of the author');

    } else if (req.url === '/books/author' && req.method === 'POST') {
        res.write(' input the name of the author of the book');
        console.log('This is a post request from books and author');

    } else if (req.url === '/books/author' && req.method === 'PUT') {
        res.write('change the name of the athor of this book');
        console.log('This is a change of name as the author of the book');
     } else {
       res.writeHead(404, { 'Content-type': 'text/plane' });
       console.log('welcome!');
    }
     res.end();
}

const server = http.createServer(behaviour)

server.listen(PORT, (req, res) => {
    console.log(`Server is listening from http://${HOST_NAME}:${PORT}`)
})
