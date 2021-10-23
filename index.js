const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.send('wow,i am excited to learn node and express with nodemon')
});

const users = [
    { id: 0, name: "Shishir", email: "shishir@gmail.com", phone: "01788888888" },
    { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888" },
    { id: 2, name: "Shabnur", email: "Shabnur@gmail.com", phone: "01788888888" },
    { id: 3, name: "Shuchorita", email: "Shuchorita@gmail.com", phone: "01788888888" },
    { id: 4, name: "Suvochchri", email: "Suvochchri@gmail.com", phone: "01788888888" },
    { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "01788888888" },
]
// use query parameter

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    res.send(users)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post',req.body);
    // res.send(JSON.stringify(users))
    res.json(newUser)
})

// dynamic api

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})