// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
function multiply() {
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
}
console.log(multiply(2, 10) === 20);

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(text) {
  let res = "";
  for (let i = text.length - 1; i >= 0; i--) {
    res += text[i];
  }
  return res;
}
console.log(reverseString("text") === "txet");
console.log(reverseString([1, 2, 3]));

/*Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
подсказка: для получения кода используйте специальный метод
*/
function getCodeStringFromText(test) {
  let result = "";
  for (let i = 0; i < test.length; i++) {
    result += test.charCodeAt(i) + " ";
  }
  return result;
}
console.log(getCodeStringFromText("hello") === "104 101 108 108 111 ");

/* Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
 */
function random(num) {
  if (num < 10 && num > 0) {
    numb = Math.random() * (10 - 0) + 0;
    numb = Math.round(numb);
    if (numb === num) {
      return console.log("Вы выиграли");
    } else {
      return console.log("Вы не угадали");
    }
  } else {
    console.log("Введите число от 0-10");
  }
}
random(1);

//TODO
//  5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.
function getArray(n) {
  let res = [];
  for (let i = 1; (i < n ); i++) {
    res.push(i);
  }
  return res.push(n);
}
console.log(getArray(20));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(arrl) {
  let res
  for (let i = 0; i < arrl.length; i++) {
    res = arrl.push(i)
  }
  return array
}
console.log(doubleArray([1, 2, 3]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection (arr, arr2) {
  arr.shift(arr[0])
  arr2.shift(arr2[0])
  return  arr
}
console.log(changeCollection([1,2,3],['a', 'b', 'c']) )
const ar = [1,2,4]
let value = ar.shift(ar[0])
console.log(ar)

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
