//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let btn = document.querySelector("#btn-msg");
let a = btn.dataset.text;
btn.addEventListener("click", function () {
  alert(a);
});

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btn.addEventListener("mouseover", function () {
  btn.classList.add("red");
});
btn.addEventListener("mouseout", function () {
  btn.classList.remove("red");
});
//При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

document.addEventListener("click", e => {
    let a = e.target
    console.log(a.id)
})