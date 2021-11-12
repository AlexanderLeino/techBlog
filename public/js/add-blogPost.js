
const form = document.querySelector('form')
const blogTitle = document.getElementById('blogTitle').value
const blogBody = document.getElementById('blogBody').value
const createPostBtn = document.getElementById('createPostBtn')



form.addEventListener('submit', async e => {
  e.preventDefault() 
  const newPostData = {
    title: blogTitle,
    body: blogBody,
  }
  
  await fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(newPostData),
  }) 
      .catch((e) => {
        console.log(e)
      })
})