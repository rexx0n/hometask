// Найти параграф и получить его текстовое содержимое (только текст!)

let paragr = document.querySelector("p");
console.log(paragr.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function info(arg) {
  let a = arg.nodeType;
  let b = arg.nodeName;
  let child = arg.children.length;
  return {
    a,
    b,
    child,
  };
}
console.log(info(document.querySelector("div")));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFrom(ul) {
  const list = ul.querySelectorAll("li");
  return [...list].map((item) => item.textContent);
}

const ul1 = document.querySelector("ul");

console.log(getTextFrom(ul1));

// Найти в коде список ul и добавить класс “list”
let ul = document.querySelector("ul").classList.add("list");
console.log(ul);

//Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// console.log((ul.querySelector("a").id = "link"));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-



const paragrh =  document.querySelector("p")
console.log(paragr.textCont = "-text-")
console.log(paragrh)
// На li через один (начиная с самого первого) установить класс “item”
const ul3 = document.querySelectorAll("li")
console.log(ul3)
for (let i = 0; i < ul3.length; i++) {
  ul3[i].classList.add("item")
  i++
}
console.log(ul3.length);
//На все ссылки в примере установить класс “custom-link”
 const link = document.querySelectorAll("a")
 link.forEach(element => {
  element.classList.add("custom-link")
 });
console.log(link)