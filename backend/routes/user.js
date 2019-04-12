const express = require('express');
const userRoutes = express.Router()

let User = require('../models/user')

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err)
        } else {
            res.json(users)
        }
    })
})

userRoutes.route('/register').post(function(req, res) {
    let newUser = new User(req.body)
    newUser.save()
        .then(newUser => {
            res.status(200).json({'newUser': 'New user registered successfully'})
        })
        .catch(err => {
            res.status(400).send('Register failed')
        })
})

module.exports = userRoutes