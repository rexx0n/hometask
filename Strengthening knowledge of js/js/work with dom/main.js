//Создайте скрипт, который изменяет цвет фона страницы при каждом клике.
const body = document.querySelector('body')
const colors = ['red', 'blue', 'orange', 'green']
let count = 0
body.addEventListener(('click'),()=> {
    count++
        if ( count > colors.length) {
            count = 0
        }
    body.style.background = colors[count]
})
//Реализуйте функцию, которая добавляет новый элемент в DOM с использованием чистого JavaScript.
const button = document.querySelector('button')
let h1
let textH1
function addElement() {
    h1 = document.createElement('h1')
    textH1 = document.createTextNode('Hello this is h1')
    h1.appendChild(textH1)
    document.body.append(h1)
}

button.addEventListener(('click'), addElement)
