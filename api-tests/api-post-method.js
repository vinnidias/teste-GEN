const fetch = require('node-fetch')

const username = 'tom'
const password = 'SuperSecretPassword!'

const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

function postMethod(username, password) {
    options.body = JSON.stringify({
        username,
        password
    })
    return fetch('https://the-internet.herokuapp.com/authenticate', options)

}

module.exports = postMethod

