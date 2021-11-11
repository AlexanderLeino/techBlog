
const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (e){
    
  }}


let logOutBtn = document.getElementById('logout')
logOutBtn.addEventListener('click', logout)


