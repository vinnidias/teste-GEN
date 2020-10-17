const axios = require('axios')

module.exports = function postMethod (username, password) { 
   return axios.post('https://the-internet.herokuapp.com/authenticate', {
        username,
        password
    })

}

