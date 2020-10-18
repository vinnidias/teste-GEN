const postMethod = require('./api-post-method')

const username = 'tomsmith'
const password = 'SuperSecretPassword!'

test('should return status 200 when the declared username and password are passed', async () => {
    const response = await postMethod(username, password)
    expect(response.status).toBe(200)
});
