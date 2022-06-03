// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

console.log(document.querySelector("html"))
console.log(document.documentElement)

console.log(document.querySelector("body"))
console.log(document.body)

console.log(document.body.children)

console.log(document.querySelector("div"))

if (document.body.children) {
  const children = document.body.children;

  for (var i = 1; i < children.length - 1; ++i) {
    console.log(children[i])
  }
}