/*1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300, ”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20, ”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321, ” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/
function firstFunc(arr, callback) {
  let res = "New value: ";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let s1 = callback(item);
    res += s1;
  }
  return res;
}
function handler1(item) {
  return item[0].toUpperCase() + item.slice(1, item.length);
}
function handler2(item) {
  return item * 10 + ", ";
}
function handler3(item) {
  // let name = item.name
  // let age = item.age
  return `${item.name /*name*/} is ${item.age /*age*/}, `;
}
function handler4(item) {
  let res = "";
  for (let i = item.length - 1; i >= 0; i--) {
    res += item[i];
  }
  return res;
}
console.log(firstFunc(["abc", "123"], handler4));
console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  ) === "New value: Jhon is 45, Aaron is 20, "
);
console.log(
  firstFunc(["my", "name", "is", "Trinity"], handler1) ===
    "New value: MyNameIsTrinity"
);
console.log(firstFunc([10, 20, 30], handler2) === "New value: 100, 200, 300, ");

let a = [1, 2, 3, 4];
a.forEach((element) => {
  console.log(element);
});

b = a.map((element) => {
  return element * 10;
});
console.log(b);

let o = [
  { key: "IS_PRINT", value: true },
  { key: "VIEW", value: true },
  { key: "ADMIN", value: true },
];

let option = o.reduce((acc, element) => {
  console.log(acc, element);
  let e = element.key;
  acc[e] = element.value;
  return acc;
}, {});

c = a.reduce((a, e) => {
  a.push(e * 10);
  return a;
}, []);
console.log(c);
/*2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
 
Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
*/
function every(arr, callback) {}
console.log(
  every([1, 7, 5, 8], (el, index, arr) => {
    if (el >= 5) {
      return true;
    }
    return false;
  })
);
