const app = require('express')();
const port = 8080;
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
/* const swaggerDocument = require('./docs/swagger.json'); */
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
var express = require('express')
const books = 
[
    {
        BookId: 1, 
        BookName: "Metro 2033",
        Gerne: "Science Fiction, Horror",
        ReleaseDate : "2002", 
        Description: "The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct. The half-destroyed cities have become uninhabitable through radiation.", 
        ReviewScore: 4,
        HowManyPages: 458
    },
    {
        BookId: 2, 
        BookName: "The Witcher: the last wish",
        Gerne: "Fantasy",
        ReleaseDate : "1993", 
        Description: "Geralt the Witcher is a man who whose magic powers, enchanced by long training and a mystrerious elixir, have made him a brilliant fighter", 
        ReviewScore: 4,
        HowManyPages: 400
    },
    {
        BookId: 3, 
        BookName: "Comfort Me with Apples",
        Gerne: "Horror",
        ReleaseDate : "2021", 
        Description: "Sophia was made for him", 
        ReviewScore: 3.58,
        HowManyPages: 103
    }
]

app.use(express.json());

app.get('/books', (req, res) => {
    res.send(books);
})

app.get('/books/:id', (req, res) => {
    if(typeof books[req.params.id] === 'undefined') {
        return res.status(404).send({Error: 'Books not found'});
    }
    res.send(books[req.params.id-1]);
})

app.post('/books', (req, res) => {
    if (
        !req.body.BookName ||
        !req.body.Gerne ||
        !req.body.ReleaseDate || 
        !req.body.Description || 
        !req.body.ReviewScore || 
        !req.body.HowManyPages) 
        {
            return res.status(400).send({error: 'One or multiple parameters are missing'});
        }
    let book = {
        BookId: books.length+1, 
        BookName: req.body.BookName,
        Gerne: req.body.Gerne,
        ReleaseDate : req.body.ReleaseDate, 
        Description: req.body.Description, 
        ReviewScore: req.body.ReviewScore,
        HowManyPages: req.body.HowManyPages
    }
    books.push(book);
    res.status(201)
    .location(`${getBaseUrl(req)}/books/${books.length}`)
    .send(book);
})


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`Backend api jookseb aadressil: http://localhost:${port}`);});

function getBaseUrl(req) {
    return req.connection && req.connection.encrypted ? "https" : "http" + `://${req.headers.host}`;
}