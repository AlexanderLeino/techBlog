const deleteBtn = document.getElementById('deletePostBtn')
const updateBtn = document.getElementById('updatePostBtn')


console.log(deleteBtn, updateBtn)

deleteBtn.addEventListener('click', (e)=> {
    e.preventDefault()
   
    console.log(currentPost)
})