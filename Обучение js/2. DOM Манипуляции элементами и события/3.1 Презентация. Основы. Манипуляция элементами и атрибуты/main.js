// Найти параграф и получить его текстовое содержимое (только текст!)

let paragr = document.querySelector("p")
console.log(paragr.textContent)

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function info (arg) {
    let a = arg.nodeType
    let b = arg.nodeName
    let child = arg.children.length
    return {
        a,
        b,
        child
    }
}
console.log(info(document.querySelector("div")))

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFromUl (arg){
    let a = document.querySelector(`${arg}`).textContent
    return [a]
}
console.log(getTextFromUl("ul"))


// Найти в коде список ul и добавить класс “list”
let ul = document.querySelector("ul").classList.add("list")
console.log(ul)

//Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
console.log(ul.querySelector("a").id = "link")

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
