let btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-posts");
const container = document.querySelector(".container");
function getPosts(cb) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    let response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function createPost(body, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open("post", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    let response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title;
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  card.appendChild(cardBody);
  return card
}

function renderPosts(response) {
  let fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTemplate(post)
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card)
  });
});
