// Importing the validator package
const validator = require('validator');

function checkForUrl(input) {
    // Simple URL check using validator package
    if (validator.isURL(input)) {
        return true;
    } else {
        return false;
    }
}

module.exports = { checkForUrl };
