// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let text = "i am in the easycode";

for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    i++;
    text[i].toUpperCase();
  }
}
console.log(text);
