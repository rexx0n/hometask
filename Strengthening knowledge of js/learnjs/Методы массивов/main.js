let arr = ["я", "study", "js"];
arr.splice(1, 1); //начиная с индекса 1 удалит 1 элемент
let lengths = arr.map((item) => item.length);
console.log(lengths);
arr.reverse(); //меняет порядок элементов
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.
function filterRange(arr, a, b) {
  let newarr = [];
  arr.map((item) => {
    if (item >= a && item <= b) {
      newarr.push(item);
    }
  });
  return newarr;
}
let arr2 = [5, 2, 3, 8, 1];
let filterred = filterRange(arr2, 1, 4);
console.log(filterred);
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
  arr.map((item) => {
    if (item < a || item > b) {
      arr.splice(arr.indexOf(item), 1);
    }
  });
}

filterRangeInPlace(arr2, 1, 4);
console.log(arr2);
