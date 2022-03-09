function capitalize(text) {
  let res = "";
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (i === 0 && c !== " ") {
      c = c.toUpperCase()
    } else if (i > 0 && text[i - 1] === " " && c !== " ") {
      c = c.toUpperCase()
    }
    res += c
  }
  return res
}
// i = 0  иэто c != " ", то это слово i > 0 и предыдущий символ равен " " и c != то это слово

console.log(capitalize("каждый охотник желает знать") === "Каждый Охотник Желает Знать");
console.log(capitalize("") === "");
console.log(capitalize("hello World") === "Hello World");
console.log(capitalize("111") === "111");