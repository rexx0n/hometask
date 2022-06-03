// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
 // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

function isParent (parent, child) {
    return parent.contains(child)
}

//console.log(isParent(document.body.children[0], document.querySelector('mark')))
console.log(isParent(document.body.children[0], document.querySelector('mark')))
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')))
const div = document.querySelector('p')
console.log(div.querySelector("ul"))
console.log(document.body.children[0].contains(document.querySelector('ul')))