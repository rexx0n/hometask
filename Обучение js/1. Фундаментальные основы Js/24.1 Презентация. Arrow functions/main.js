// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

// function sum() {
//   const params = Array.prototype.slice.call(arguments);

//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) { return prev + next; });
// }

// sum(1, 2, 3, 4); // 10
// sum(); // 0

const sum = (...props) => {
  if (!props.length) return 0;
  console.log(Array.isArray(arguments))
  return props.reduce( (prev, next) => prev + next);
};

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum() === 0);

function asr (x,y,z) {
  console.log(y)
  arguments[1] = 5
  console.log(y)
  y = 6
  console.log(arguments)
  let a = 1
  let b = 2
  let c = 3
  let arr = [a,b,c]
  arr[1] = 4
  console.log(b)
}
asr(1,2,3)