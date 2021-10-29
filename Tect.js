fetch('https://api.github.com/users/LNad668')
.then(Response => Response.json())
.then(user => console.log(user))
.catch(error => console.log(error));
