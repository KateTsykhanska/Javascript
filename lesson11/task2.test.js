const axios = require('axios');

test("POST", async () => {
    const post = await
        axios.post(`https://jsonplaceholder.typicode.com/posts`,
            {
                "title": "it's title",
                "body": "it's body"
            },
        );
    console.log(post.data);
    expect(post.status).toBe(201),
        expect(post.id).toBeDefined
});
