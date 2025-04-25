
const axios = require('axios')

test("GET response", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status).toBe(200)

    const data = response.data
    expect(data).toHaveProperty('userId'),
        expect(data).toHaveProperty('id'),
        expect(data).toHaveProperty('title'),
        expect(data).toHaveProperty('body')
})