const app = require('express')();
const port = 8080;
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const express = require('express');
const cors = require('cors');

const books = [
    {
        BookId: 1,
        BookName: "Metro 2033",
        Genre: ["Science Fiction", "Fiction", "Horror"],
        ReleaseDate: "2002",
        Description: "The year is 2033. The world has been reduced to rubble.",
        ReviewScore: 4,
        HowManyPages: 458,
    },
    {
        BookId: 2,
        BookName: "The Witcher: the last wish",
        Genre: ["Fantasy", "Fiction"],
        ReleaseDate: "1993",
        Description: "Geralt the Witcher is a man whose magic powers...",
        ReviewScore: 4,
        HowManyPages: 400,
    },
];

const users = [
    {
        UserId: 1,
        FirstName: "Aleksander",
        LastName: "Kaasik",
        UserName: "alka",
        Password: "PlainText",
        OwnerShipListID: 1
    },
    {
        UserId: 2,
        FirstName: "Mihhail",
        LastName: "Bajandin",
        UserName: "mihhail",
        Password: "PlainText",
        OwnerShipListID: 2
    },
];

const ownerships = [
    {
        OwnerId: 1,
        BookId: 1,
        UserId: 1,
        Status: "Owned",
    },
    {
        OwnerId: 2,
        BookId: 2,
        UserId: 2,
        Status: "Borrowed",
    },
];

app.use(express.json());
app.use(cors());



app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.BookId === parseInt(req.params.id));
    if (!book) {
        return res.status(404).send({ Error: 'Book not found' });
    }
    res.send(book);
});

app.post('/books', (req, res) => {
    if (!req.body.BookName || !req.body.Genre || !req.body.ReleaseDate || !req.body.Description || !req.body.ReviewScore || !req.body.HowManyPages) {
        return res.status(400).send({ error: 'Missing book parameters' });
    }
    const newBook = {
        BookId: books.length + 1,
        BookName: req.body.BookName,
        Genre: req.body.Genre,
        ReleaseDate: req.body.ReleaseDate,
        Description: req.body.Description,
        ReviewScore: req.body.ReviewScore,
        HowManyPages: req.body.HowManyPages,
    };
    books.push(newBook);
    res.status(201).send(newBook);
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.BookId === parseInt(req.params.id));
    if (!book) {
        return res.status(404).send({ Error: 'Book not found' });
    }
    if (!req.body.BookName || !req.body.Genre || !req.body.ReleaseDate || !req.body.Description || !req.body.ReviewScore || !req.body.HowManyPages) {
        return res.status(400).send({ error: 'Missing book parameters' });
    }
    book.BookName = req.body.BookName;
    book.Genre = req.body.Genre;
    book.ReleaseDate = req.body.ReleaseDate;
    book.Description = req.body.Description;
    book.ReviewScore = req.body.ReviewScore;
    book.HowManyPages = req.body.HowManyPages;
    res.send(book);
});

app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.BookId === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send({ Error: 'Book not found' });
    }
    books.splice(index, 1);
    res.status(204).send();
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.UserId === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({ Error: 'User not found' });
    }
    res.send(user);
});


app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    if (!req.body.FirstName || !req.body.LastName || !req.body.UserName || !req.body.Password) {
        return res.status(400).send({ Error: 'Missing user parameters' });
    }
    const newUser = {
        UserId: users.length + 1,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.Password,
        OwnerShipListID: req.body.OwnerShipListID || null
    };
    users.push(newUser);
    res.status(201).send(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.UserId === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({ Error: 'User not found' });
    }
    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.UserName = req.body.UserName;
    user.Password = req.body.Password;
    res.send(user);
});


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});
