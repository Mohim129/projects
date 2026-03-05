const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};


// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }

const displayPost = (posts) => {

// 1. get the container 
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = '';

    posts.forEach((post) => {
    // 2. Create HTML Element 
        const postCard = document.createElement("div")
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    // 3. Add to the container
        postContainer.append(postCard)

  });
};
loadPost()