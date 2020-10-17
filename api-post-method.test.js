const postMethod = require('./api-post-method')

const username = 'tomsmith'
const password = 'SuperSecretPassword!'

test('should return status 200 when passed username: "tomsmith" and password: "SuperSecretPassword!"', ()=> {
    const result = postMethod(username, password)
    expect(result).toEqual()
});