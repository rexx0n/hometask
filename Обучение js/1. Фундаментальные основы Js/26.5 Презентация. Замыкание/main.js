// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus (num = 0){
    let g = ['ewqeqweqweqe']
    return function(num2 = 0) {
        console.log(g)
        return num - num2
    }
}
let a = minus(10)
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

function multiplyMaker (val = 0) {
    let x = val 
    return function (num = 0) {
        return x *= num
    }
}
const multiply = multiplyMaker(2);

console.log(multiply(2) === 4)
console.log(multiply(1) === 4)
console.log(multiply(3) === 12)
console.log(multiply(10) === 120)

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

function module () {
    let x
    return {
        instStr (value = "") {
            if (value === Number) {
                return x = String(value)
            }
            return  x = String(value)
        },
        getStr () {
            return console.log(x)
        },
        getLengthStr () {
            return console.log(x.length)
        },
        getReverse () {
            return console.log(x.split("").reverse().join(""))
        }
        
    }
}
const mod = module()
console.log(mod.instStr("hello"))
mod.getStr()
mod.getLengthStr()
mod.getReverse()
// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); /

function calculator () {
    let value
    return {
        instValue (num) {
            value = num
            return value
        },
        getPlus (num) {
            value += num
            return value
        },
        getMultiply (num) {
            value *= num
            return value
        },
        getValue () {
            
            return value.toFixed()
        }
    }
}
const calc = calculator()
console.log(calc.instValue(10))
console.log(calc.getPlus(5.3))
console.log(calc.getMultiply(2))
console.log(calc.getValue())
console.log(calc.instValue(2))
a(5)