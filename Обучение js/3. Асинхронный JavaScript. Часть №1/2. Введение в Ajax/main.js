// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
let xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");
xhr.addEventListener("load", () => {
  let response = JSON.parse(xhr.responseText);
  response.forEach((user) => {
    let name = user.name;
    let div2 = document.createElement("div");
    let div = document.querySelector("div");
    let h4 = document.createElement("h4");
    div.appendChild(div2);
    div2.appendChild(h4);
    h4.textContent = name;
    h4.addEventListener("click", (e) => {
      if (h4.textContent === name) {
        let email = document.createElement("p");
        let userName = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        div2.appendChild(email);
        div2.appendChild(userName);
        div2.appendChild(phone);
        div2.appendChild(website);
        email.textContent = user.email;
        userName.textContent = user.username;
        phone.textContent = user.phone;
        website.textContent = user.website;
      }
    });
  });
  console.log(response);
});
xhr.send();
//Создать форму добавления пользователя состоящая из полей name, email, username, phone, website при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного пользователя на страницу.
function getPosts(cb) {
  let xhr = new XMLHttpRequest();
  xhr.open("post", "index.html");
  xhr.addEventListener("load", () => {
    let response = JSON.parse(xhr.responseText);
    console.log(response)
  });

 

  xhr.send();
}


axios.post()
axios.get('google.com')