const fetch = require('node-fetch')


function postMethod(username, password) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
    };
    return fetch('https://the-internet.herokuapp.com/authenticate', options)

}

module.exports = postMethod


