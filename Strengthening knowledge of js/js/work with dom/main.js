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