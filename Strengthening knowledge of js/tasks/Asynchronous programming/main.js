// Напишите функцию, которая делает запрос к внешнему API (например, к API JSONPlaceholder) и выводит результат в консоль.
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
//Реализуйте простой таймер, который срабатывает через заданное количество секунд и выполняет определенное действие
// (например, выводит сообщение в консоль).
function simpleTimer(seconds, action) {
    setTimeout(action, seconds * 1000)
}
function showMessage() {
    console.log('timer')
}
simpleTimer(5,showMessage)