const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let feedEl = document.getElementById("feed");
for (let i = 0; i < posts.length; i++ ) {
  let post = posts[i]
  console.log(post.name)
  feedEl.innerHTML += `
    <div class="post">
      <div class="post-avatar">
        <img class="img-avatar" src="${post.avatar}" alt="${post.name}"> 
        <div class="name-place">
          <p class="username">${post.name}</p>
          <p class="location">${post.location}</p>
        </div>
      </div>
      <div class="post-content">
        <img src="${post.post}" alt="${post.name}"> 
      </div>
      <div class="post-social">
        <img class="social-icon" src="images/icon-heart.png" alt="like">
        <img class="social-icon" src="images/icon-comment.png" alt="comment">
        <img class="social-icon" src="images/icon-dm.png" alt="dm">
      </div>
      <p class="likes">${post.likes} likes</p>
      <p class="comment"><span class="username">${post.username}</span> ${post.comment}</p>
    </div>
`
}
