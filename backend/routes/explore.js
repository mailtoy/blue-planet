const express = require('express');
const router = express.Router();
const db = require('monk')('localhost/blueplanet')

router.route('/').get((req, res) => {
    db.get('forums').find()
        .then(result => res.send(result[0]))
})

module.exports = router;