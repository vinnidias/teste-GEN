const postMethod = require('./api-post-method')

const username = 'tomsmith'
const password = 'SuperSecretPassword!'

test('should return status 200 when the declared username and password are passed', done => {
    postMethod(username, password)
        .then(result => {
            expect(result.status).toBe(200)
            done()
        })
        .catch(err => {
            done(err)
        })
    
});
