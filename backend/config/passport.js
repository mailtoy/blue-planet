// const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/user');
// const bcrypt = require('bcryptjs');

// module.exports = function(passport) {
//     passport.use(new LocalStrategy(function(email, password, done) {
//         let query = {email: email}
//         // Match email
//         User.findOne(query, function(err, user) {
//             if (err) throw err
//             if (!user) {
//                 return done(null, false, {message: 'No user found'})
//             }
//             // Match password
//             bcrypt.compare(password, user.password, function(err, isMatch){
//                 if (err) throw err;
//                 if (isMatch) {
//                     return done(null, user)
//                 } else {
//                     return done(null, false, {message: 'Wrong password'})
//                 }
//             })
//         })
//     }))

//     passport.serializeUser((user, done) => {
//         done(null, user.id)
//     })
    
//     passport.deserializeUser((id, done) => {
//         User.findById(id, (err, user) => {
//             done(err, user)
//         })
//     })
// }

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('./keys');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};