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
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr); // undefinedi am the best

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
//включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let value = 1;
num = 10;
for (let i = num; i >= 1; i--) {
  value *= i;
}
console.log(value === 3628800);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let a = "";
let java = "Java  Script is a pretty good language";
for (let i = 0; i < java.length; i++) {
  if (java[i] === " ") {
    i++;
    a += java[i].toUpperCase();
  } else {
    a += java[i];
  }
}
console.log(a === "JavaScriptIsAPrettyGoodLanguage");

//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.





//6. Дан объект:
let list = {
  name: "denis",
  work: "easycode",
  age: 29,
};
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let b = "";
for (let prop in list) {
  if (typeof list[prop] === "string") {
    list[prop] = list[prop].toUpperCase();
  
  }
}

  console.log(list);
