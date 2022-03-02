function getNumberExplanation(number) {
  let result;
  switch (number) {
    case 666:
      result = "devil number";
      break;
    case 42:
      result = "answer for everything";
      break;
    case 7:
      result = "prime number";
      break;
    default:
      result = null;
  }
  return result;
}

console.log(getNumberExplanation(666) === "devil number");
console.log(getNumberExplanation(42) === "answer for everything");
console.log(getNumberExplanation(7) === "prime number");
console.log(getNumberExplanation(2342) === null);