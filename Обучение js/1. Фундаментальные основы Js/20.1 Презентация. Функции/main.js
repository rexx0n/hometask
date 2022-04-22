// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
function multiply() {
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
}
console.log(multiply(2, 10)=== 20);

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(text) {
  let res = "";
  for (let i = text.length - 1; i >= 0; i--) {
    res += text[i];
  }
  return res;
}
console.log(reverseString("text") === "txet");

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
