// Напишите функцию, которая находит сумму всех чисел от 1 до N, где N - это аргумент функции.
let count = 1
function calc(n) {
    for (let i = 0; count <= n; i++) {
        console.log(count + n)
        count++
    }
}
calc(3)
// Создайте функцию, которая определяет, является ли число простым (не имеет делителей, кроме 1 и самого себя
function primeNumbers(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true; //
    }
    const sqrtNumber = Math.sqrt(num);
    for (let i = 2; i <= sqrtNumber; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}