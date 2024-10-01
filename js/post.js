function loadPost(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displayPost(data)
   )
    
}

function displayPost(posts){
  for(const post of posts ){
    const postContainer = document.getElementById('posts-container');
  const div = document.createElement('div');
  div.classList.add('post')
  div.innerHTML = `
   <h4>User-${post.id}</h4>
   <h5>Post: ${post.username}</h5>
   <p>Email: ${post.email}</p>
  `
  postContainer.appendChild(div)
  }
  
}
loadPost();

