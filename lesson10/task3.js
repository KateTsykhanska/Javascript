async function fetchPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await response.json()
}

async function fetchComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    return await response.json()
}

async function getPostAndComments() {
    try {
        const id = 1
        const post = await fetchPost(id)
        console.log("Пост:", post)
        const comments = await fetchComments(id)
        console.log("Коментарі:")
        comments.forEach(comment => {
            console.log(`- ${comment.body}`)
        })
    } catch (error) {
        console.error("Помилка:", error)
    }
}

async function getFastestResponse() {
    try {
        const fastest = await Promise.race([
            fetchPost(1),
            fetchComments(1)
        ])
        console.log("Найшвидша відповідь:", fastest)
    } catch (error) {
        console.error("Помилка при виконанні Promise.race:", error)
    }
}
getPostAndComments()
getFastestResponse()