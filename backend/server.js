const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const userRoutes = require('./routes/user')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blueplanet', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

userRoutes.get('/', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err)
        } else {
            res.json(users)
        }
    })
})

userRoutes.post('/register', function(req, res) {
    let newUser = new User(req.body)
    newUser.save()
        .then(newUser => {
            res.status(200).json({'newUser': 'New user registered successfully'})
        })
        .catch(err => {
            res.status(400).send('Register failed')
        })
})

app.use('/user', userRoutes)