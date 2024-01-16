//Напишите код для отслеживания события нажатия клавиши Enter на поле ввода и вывода сообщения в консоль.
document.addEventListener(('keydown'), (e)=> {
    if (e.keyCode == 13) {
        console.log('Вы нажали на enter')
    }
})
//Создайте интерактивное меню, реагирующее на события мыши (наведение, клик, отпускание).
const menu = document.querySelector('.menu')
menu.addEventListener('mouseover',()=>{
    menu.style.background = 'blue'
})
menu.addEventListener('mouseout',()=>{
    menu.style.background = 'red'
})
menu.addEventListener('click',()=>{
    menu.style.boxShadow = 'green -1px -1px 1px 9px'
})