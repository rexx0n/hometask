// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let text = "i am in the easycode";

function capitalize(text) {
  let res = "";
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (i === 0 && c !== " ") {
      c = c.toUpperCase();
    } else if (i > 0 && text[i - 1] === " " && c !== " ") {
      c = c.toUpperCase();
    }
    res += c;
  }
  return res;
}

console.log(capitalize(text) === "I Am In The Easycode");

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str = "tseb eht ma i";
newStr = "";
for (let i = str.length; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);// undefinedi am the best

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
//включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

num = 10
for (let i = 0; i >=num; i++) {
  
} 
