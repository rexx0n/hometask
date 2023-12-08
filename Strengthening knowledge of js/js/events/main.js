//Напишите код для отслеживания события нажатия клавиши Enter на поле ввода и вывода сообщения в консоль.
document.addEventListener(('keydown'), (e)=> {
    if (e.keyCode == 13) {
        console.log('Вы нажали на enter')
    }
})