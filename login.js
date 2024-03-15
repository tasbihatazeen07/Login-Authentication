function isUsernameExists(username) {
 
    const existingUsernames = ['user1', 'user2', 'user3'];
  
    return existingUsernames.includes(username);
  }
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    if (isUsernameExists(username)) {
      alert('Username already exists. Please choose a different one.');
    } else {
    
      alert('Successful registration! Redirecting to secured page...');
    
      window.location.href = 'secured.html';
    }
  });
  
  