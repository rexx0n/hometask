//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let btn = document.querySelector("#btn-msg")
 let a = btn.dataset.text
btn.addEventListener ("click", function () {
    alert(a)
})