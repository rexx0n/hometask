//first variation
function isPoli(arg) {
    if (arg === "") {
      return false
    }
    let a = arg.split("").reverse().join("") 
    return a === arg
  }
  isPoli('')
  console.log(isPoli('ДОВОД')===true);
  console.log(isPoli('cat')===false);
  console.log(isPoli('AABBAA')===true);

  // second variation

  function isPolig(text) {
    let c = Math.floor(text.length / 2) 
    for (let i = 0; i >=c;) {
        if (i>=c) {
            return true
        }
        else {
            text[i] === text[text.length - i + 1]
        }
    }
  }
  console.log(isPolig('ДОВОД')===true)