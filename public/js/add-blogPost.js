
const form = document.querySelector('form')
let blogTitle = document.getElementById('blogTitle').value.trim()
let blogBody = document.getElementById('blogBody').value.trim()
const createPostBtn = document.getElementById('createPostBtn')



form.addEventListener('submit', async e => {
  e.preventDefault() 
  
  console.log(blogTitle, blogBody)
  await fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({blogBody, blogTitle}),
  }) 
      .catch((e) => {
        console.log(e)
      })
})