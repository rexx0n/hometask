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