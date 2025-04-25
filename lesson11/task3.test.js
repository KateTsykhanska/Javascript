const axios = require('axios');

test("PUT", async () => {
    const updatedPost = {
        "title": "it's ta new itle",
        "body": "it's a new body"
    }

    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);

    console.log(response.data);

    console.log(updatedPost.data);
    expect(response.status).toBe(200),
        expect(response.data).toHaveProperty("id"),
        expect(response.data.title).toBe(updatedPost.title);
    expect(response.data.body).toBe(updatedPost.body);

})