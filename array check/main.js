function mas(arr, arr2) {
  //     return masiv.toString() === masiv2.toString()
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(mas([1, 2, 3], [1, 2, 3]) === true);
console.log(mas([1, 2, 4], [1, 2, 3]) === false);
console.log(mas([1, 2, 3], []) === false);
console.log(mas([1, 2, 3], [1, 2]) === false);
console.log(mas([], []) === true);
