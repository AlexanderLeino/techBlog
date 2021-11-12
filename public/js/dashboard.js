const blogPost = document.getElementsByClassName('blogPost')
console.log(blogPost)

for (let i = 0; i < blogPost.length; i++){
    blogPost[i].addEventListener('click', (e)=> {
        let postId = e.currentTarget.getAttribute('data-id')
        console.log(postId)
        fetch(`/edit/`, {
            method: 'GET',
            headers: {
                'Content-type': "applicaiton/json"
            }
        })
    })
      
}
