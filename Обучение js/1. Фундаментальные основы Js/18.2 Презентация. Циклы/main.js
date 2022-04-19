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

for (let i = 0; i < str.length; i++) {
  
}


