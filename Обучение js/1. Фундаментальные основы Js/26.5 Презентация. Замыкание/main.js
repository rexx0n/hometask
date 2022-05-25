// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus (num = 0){
    return function(num2 = 0) {
        return num - num2
    }
}

console.log(minus(10)(6) === 4)
console.log(minus(5)(6) === -1)
console.log(minus(10)() === 10)
console.log(minus()() === 0)
console.log(minus()(6) === -6)

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

