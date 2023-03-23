// Напишите функцию, которая принимает строку и возвращает ее в верхнем регистре.
export function toUpper(str  = '') {
    return str.toUpperCase()
}
// console.log(toUpper('agssa')=== 'AGSSA')
// Напишите функцию, которая принимает массив чисел и возвращает наибольшее значение.
export function largest(arr) {
    return arr.reduce((acc, item) => acc > item,0)
}
// console.log(largest([1,2,3,4,5]))//todo
// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий элементы обоих массивов.
export function sumArr(arr = [], arr2 = []) {
    return arr.concat(arr2)
}
// console.log(sumArr([1,2,], [3,4]))
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные числа.
export function oddNumbered (arr = []) {
    let newArr
    newArr = arr.filter(item => {
        if(item % 2 === 0) {
            return false
        }
        return true
    })
    return newArr
}
// console.log(oddNumbered([1,2,3,4,5]))
// Напишите функцию, которая принимает две строки и возвращает true, если первая строка содержит вторую строку, и false в противном случае.
export function isInclude(str = '', str2 = '') {
    let strTwo = str2.split(' ')
    for(let i = 0; i < strTwo.length; i++) {
        if(strTwo[i] === str) {
            return true
        }
    }
    return false
}
// console.log(isInclude('еж', 'белый еж'))
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые делятся на 3.
export function isDividingANumberThree(arr = []) {
    let newArr
    newArr =  arr.filter(item => {
        if(item % 3 === 0) {
            return true
        }
        return false
    })
    return newArr
}
// console.log(isDividingANumberThree([1,3,4,6,9,2,5,12]))
// Напишите функцию, которая принимает два числа и возвращает их произведение.
export function multiplication(num = 0, numTwo = 0) {
    return num * numTwo
}
// console.log(multiplication(2, 4))
// Напишите функцию, которая принимает строку и возвращает ее в нижнем регистре.
export function toLower(str = '') {
    return str.toLowerCase()
}
// console.log(toLower('FAFAFASASDFG'))
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.

// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий только элементы, которые встречаются в обоих массивах.
export function arrone(arr = [],arr2 = []) {
    let newArr = []
    arr2.forEach(element => {
        if( arr.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
}

// console.log(arrone(['еж','кол','код','музыка','книга'], ['еж','новый','массив','книга',]))