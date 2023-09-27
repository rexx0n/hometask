// Создайте HTML-страницу с несколькими элементами (например, кнопками и текстовыми полями).
// Напишите JavaScript код, который изменяет содержимое этих элементов (например, меняет текст кнопки при клике).
let button = document.querySelector('button')
let h1 = document.querySelector('h1')

button.addEventListener('click', ()=> {
    button.textContent = "Text changed"
})
h1.addEventListener('click', ()=> {
    h1.textContent = 'Text changed'
})