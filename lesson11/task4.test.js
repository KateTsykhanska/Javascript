const axios = require('axios');

test("DELETE", async () => {
    const deleting = await
        axios.delete(`https://jsonplaceholder.typicode.com/posts/1`, 
        );
    expect(deleting.status).toBe(200)
});
