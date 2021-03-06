const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.residence = !isEmpty(data.residence) ? data.residence : "";
    // data.country = !isEmpty(data.country) ? data.password2 : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    
    // email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    // username checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required"
    }

    // personal information checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name field is required";
    }
    if (Validator.isEmpty(data.residence)) {
        errors.residence = "Residence is required"
    }
    // if (Validator.isEmpty(data.country)) {
    //     errors.country = "Country is required"
    // }
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone number is required"
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};