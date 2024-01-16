// Загрузите данные с сервера (например, JSON файл) с использованием Fetch API и выведите их на странице.
let result
 fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
const h1 = document.querySelector('h1')
console.log(result)
h1.textContent = result

//Реализуйте форму обратной связи с отправкой данных на сервер с использованием AJAX.
