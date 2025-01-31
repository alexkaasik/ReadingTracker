const app = require('express')();
const port = 8080;
const cors = require("cors")
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
var express = require('express')

let books = 
[
    {
        BookId: 1, 
        BookName: "Metro 2033s",
        Gerne: ["Science Fiction", "Fiction", "Horror", "Post Apocalyptic", "Dystopia", "Fantasy", "Russia", "Audiobook", "Apocalyptic", "Russian Literature"],
        ReleaseDate : "2002", 
        Description: "The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct. The half-destroyed cities have become uninhabitable through radiation.", 
        ReviewScore: 4,
        HowManyPages: 458
    },
    {
        BookId: 2, 
        BookName: "The Witcher: the last wish",
        Gerne: ["Fantasy", "Fiction Short", "Stories", "Audiobook", "High Fantasy", "Adult", "Magic", "Adventure", "Epic Fantasy", "Polish Literature"],
        ReleaseDate : "1993", 
        Description: "Geralt the Witcher is a man who whose magic powers, enchanced by long training and a mystrerious elixir, have made him a brilliant fighter", 
        ReviewScore: 4,
        HowManyPages: 400
    },
    {
        BookId: 3, 
        BookName: "Comfort Me with Apples",
        Gerne: ["Horror", "Fantasy", "Fiction", "Novella", "Thriller", "Audiobook", "Mystery", "Adult", "Mystery Thriller", "Retellings"],
        ReleaseDate : "2021", 
        Description: "Sophia was made for him", 
        ReviewScore: 3.58,
        HowManyPages: 103
    }
];

let users = [
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
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// ---- Books start ----

app.get('/books', (req, res) => {
    return res.send(books);
});

app.get('/books/:id', (req, res) => {
    if(isNaN(parseInt(req.params.id-1, 10)) ) {
        return res.status(400).send({Error: 'bad id'});
    }

    const book = getBook(req, res);

    if (!book) { return }

    return res.send(book);
});

app.post('/books', (req, res) => {
    if (
        !req.body.BookName ||
        !req.body.Gerne ||
        !req.body.ReleaseDate || 
        !req.body.Description || 
        !req.body.ReviewScore || 
        !req.body.HowManyPages
    ) 
    {
        return res.status(400).send({error: 'One or multiple parameters are missing to create new book'});
    }
    let newBook = {
        BookId: books.length + 1,
        BookName: req.body.BookName,
        Gerne: req.body.Gerne,
        ReleaseDate: req.body.ReleaseDate,
        Description: req.body.Description,
        ReviewScore: req.body.ReviewScore,
        HowManyPages: req.body.HowManyPages,
    };

    books.push(newBook);
    return res.status(201).send(newBook);
});

app.put('/books/:id', (req, res) => {
    const book = getBook(req, res);
    if(!book) {return}

    if (
        !req.body.BookName ||
        !req.body.Gerne ||
        !req.body.ReleaseDate || 
        !req.body.Description || 
        !req.body.ReviewScore || 
        !req.body.HowManyPages
    )  
    {
        return res.status(400).send({error: 'One or multiple parameters are missing to update book'});
    }
    book.BookName = req.body.BookName;
    book.Genre = req.body.Genre;
    book.ReleaseDate = req.body.ReleaseDate;
    book.Description = req.body.Description;
    book.ReviewScore = req.body.ReviewScore;
    book.HowManyPages = req.body.HowManyPages;
    
    return res.status(201).send(book);
});

app.delete('/books/:id', (req, res) => {

    const book = getBook(req, res);

    if(!book) {return}

    if(isNaN(parseInt(req.params.id, 10)) ) {
        return res.status(400).send({Error: 'bad id'});
    }

    books = books.filter(val => val.BookId !== book.BookId)
    
    return res.status(204).send({Error: 'No Content'});
})

// ---- Books end ----

// ---- User Start ----

app.get('/users', (req, res) => {
    return res.send(users);
});

app.get('/users/:id', (req, res) => {
    if(isNaN(parseInt(req.params.id, 10)) ) {
        return res.status(400).send({Error: 'bad id'});
    }

    const user = getUser(req, res);
    
    if (!user) { return }

    return res.send(user);
});

app.post('/users', (req, res) => {
    if (
        !req.body.FirstName ||
        !req.body.LastName ||
        !req.body.LastName || 
        !req.body.Password
    )
    {
        return res.status(400).send({error: 'One or multiple parameters are missing to create a new user'});
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
    const user = getUser(req, res);
    if(!user) {return}

    if (
        !req.body.FirstName ||
        !req.body.LastName ||
        !req.body.LastName || 
        !req.body.Password
    ) 
    {
        return res.status(400).send({error: 'One or multiple parameters are missing to update a user'});
    } 

    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.UserName = req.body.UserName;
    user.Password = req.body.Password;

    return res.status(201).send(user);
});

app.delete('/users/:id', (req, res) => {
    const user = getUser(req, res);
    if(isNaN(parseInt(req.params.id, 10)) ) {
        return res.status(400).send({Error: 'bad id'});
    }

    users = users.filter(val => val.UserId !== user.UserId)

    return res.status(204).send({Error: 'No Content'});
});

// ---- Users End ----

// ---- Ownerships Start ----

app.get('/booknames', (req, res) => {
    
    book = []
    for (let x in books){
        var star = '{\"Bookid\":'+ books[x].BookId + ', \"BookName\":' + '\"' + books[x].BookName+'\"}'
        console.log(star)
        book.push(JSON.parse(star))
    }
    return res.send(book);
});

app.get('/usernames', (req, res) => {
    
    user = []

    for (let x in users){
        var star = '{\"UserId\":'+ users[x].UserId + ', \"UserName\":' + '\"' + users[x].UserName+'\"}'
        console.log(star)
        user.push(JSON.parse(star))
    }

    return res.send(user);
});




app.get('/ownerships', (req, res) => {
    return res.send(ownerships);
});

app.get('/ownerships/:id', (req, res) => {
    const ownership = ownerships.find(o => o.OwnerId === parseInt(req.params.id));
    if (!ownership) {
        return res.status(404).send({ Error: 'Ownership not found' });
    }
    res.send(ownership);
});

app.post('/ownerships', (req, res) => {
    if (!req.body.BookId || !req.body.UserId || !req.body.Status) {
        return res.status(400).send({ Error: 'Missing ownership parameters' });
    }
    const newOwnership = {
        OwnerId: ownerships.length + 1,
        BookId: req.body.BookId,
        UserId: req.body.UserId,
        Status: req.body.Status,
    };
    ownerships.push(newOwnership);
    res.status(201).send(newOwnership);
});

app.put('/ownerships/:id', (req, res) => {
    const ownership = ownerships.find(o => o.OwnerId === parseInt(req.params.id));
    if (!ownership) {
        return res.status(404).send({ Error: 'Ownership not found' });
    }
    ownership.BookId = req.body.BookId;
    ownership.UserId = req.body.UserId;
    ownership.Status = req.body.Status;
    res.send(ownership);
});

app.delete('ownerships/:id', (req, res) => {
    const index = ownerships.findIndex(o => o.OwnerId === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send({ Error: 'Ownership not found' });
    }
    ownerships.splice(index, 1);
    res.status(204).send();
});

// ---- Ownerships End ----

function getBook(req,res) 
{
    const idNumber = parseInt(req.params.id);
    
    if(isNaN(idNumber)) {
        res.status(400).send({Error:`id not found`});
        return null;
    }
    const book = books.find(book => book.BookId === idNumber)
    if(!book) {
        res.status(404).send({Error: 'Book not found'});
        return null;
    }

    return book;
}

function getUser(req,res) 
{
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error:`id not found`});
        return null;
    }
    const user = users.find(user => user.UserId === idNumber)
    if(!user) {
        res.status(404).send({Error: 'User was not found'});
        return null;
    }
    return user;
}

function getBaseUrl(req) {
    return req.connection && req.connection.encrypted ? "https" : "http" + `://${req.headers.host}`;
}

app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});
