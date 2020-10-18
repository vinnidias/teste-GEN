const postMethod = require('./api-post-method')

const username = 'tomsmith'
const password = 'SuperSecretPassword!'

const wrongPassword = '1234'

test('should return status 200 when the declared username and password are passed', async () => {
    const response = await postMethod(username, password)
    expect(response.status).toBe(200)
});

test('should return status 401 when the declared username and wrong password are passed', async () => {
    const response = await postMethod(username, wrongPassword)
    expect(response.status).toBe(401)
});

