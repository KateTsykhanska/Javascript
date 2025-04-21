function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
fetchPost(1).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.error("There is an error in fetchPost", error)
    })


function fetchComments(id) {
    return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
}
fetchComments(1).then(response => response.json())
    .then(comments => {
        (console.log("Комментарi: "), comments.body)
        comments.forEach(comment => {
            console.log(`- ${comment.body}`)
        })
    })
    .catch(error => {
        console.error("There is an error in fetchComments", error)
    })