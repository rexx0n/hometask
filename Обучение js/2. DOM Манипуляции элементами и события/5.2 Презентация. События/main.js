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

document.addEventListener("click", (e) => {
  let a = e.target;
  console.log(a.id);
});

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д


let btnGenerate = document.querySelector("#btn-generate");
let num = 3
btnGenerate.addEventListener("click",  e => {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = `Item ${num}`;
  ul.appendChild(li);
  num++
});
