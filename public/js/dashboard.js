const blogPost = document.getElementsByClassName('blogPost')
console.log(blogPost)

for (let i = 0; i < blogPost.length; i++){
    blogPost[i].addEventListener('click', (e)=> {
        let postId = e.currentTarget.getAttribute('data-id')
        console.log(postId)
        fetch(`api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({postId})
        })
    })
      
}
