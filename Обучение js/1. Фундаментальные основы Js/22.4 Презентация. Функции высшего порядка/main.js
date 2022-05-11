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
    let s1 =  callback(item)
    res += s1;
  }
  return res;
}
function handler1(item) {
  return  item[0].toUpperCase() + item.slice(1, item.length);
}
function handler2 (item) {
    return (item * 10) + ", "
}
console.log(
  firstFunc(["my", "name", "is", "Trinity"], handler1) ===
    "New value: MyNameIsTrinity"
);
console.log(firstFunc([10, 20, 30], handler2) === "New value: 100, 200, 300, " )
