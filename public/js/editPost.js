const deleteBtn = document.getElementById('deletePostBtn')
const updateBtn = document.getElementById('updatePostBtn')

deleteBtn.addEventListener('click', (e)=> {
    const id = window.location.lastIndexOf
    console.log(id)
    e.preventDefault()
    fetch(`/api/post/edit/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }, 

    })
   
})