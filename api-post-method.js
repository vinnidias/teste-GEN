const axios = require('axios')

const post = (username, password) => {
    axios.post('https://the-internet.herokuapp.com/authenticate', {
        username,
        password
    }).then(res => {
        return res.status
    })
}

module.exports = post

