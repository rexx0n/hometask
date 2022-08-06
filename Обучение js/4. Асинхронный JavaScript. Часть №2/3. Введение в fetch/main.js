// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json()
//   })
//   .then(post => console.log(post))
//   .catch((err) => console.log(err));

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch((err) => console.log(err));
  });
}

getPost(1).then(post => console.log(post))
