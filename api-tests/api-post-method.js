const request = require('superagent')


function postMethod(username, password) {
    return request.post('https://the-internet.herokuapp.com/authenticate').send({username, password})
}

module.exports = postMethod
