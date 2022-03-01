//first variation
function isPoli(arg) {
  if (arg === "") {
    return false
  }
  let a = arg.split("").reverse().join("")
  return a === arg
}
isPoli('')
console.log(isPoli('ДОВОД') === true);
console.log(isPoli('cat') === false);
console.log(isPoli('AABBAA') === true);

// second variation

function isPolig(text) {
  let c = Math.floor(text.length / 2)
  for (let i = 0; i < c; i++) {
    if (text[i] !== text[text.length - i - 1]) {
      return false
    }
  }
  return true
}
console.log(isPolig('ДОВОД') === true)
console.log(isPoli('cat') === false);
console.log(isPoli('AABBAA') === true)