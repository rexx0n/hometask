// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
function multiply() {
  let sum = 0;
  for (let i = 0; i < arguments.lenght; i++) {
    sum += arguments[i];
  }
  return sum;
}

