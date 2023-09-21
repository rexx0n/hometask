// Напишите функцию, которая определяет, является ли строка палиндромом (читается одинаково справа налево и слева направо).

function isPalindrom(str) {
    let newStr = str
    newStr = newStr.split('').reverse().join('')
    return newStr===str
}

console.log(isPalindrom('asdas'))
console.log(isPalindrom('ама'))
// Реализуйте функцию, которая удаляет все пробелы из строки
 function deleteProb(str) {
    let newStr = str.split('')
     for(let i = newStr.length; i > 0;i--) {
         if (newStr[i] === ' ') {
             newStr.splice(i,1)
         }
     }
     return newStr.join('')
}

console.log(deleteProb('asdas asdasdas dasdas'))
//  Создайте функцию, которая преобразует строку в "заглавный кэмелкейс" (например, из "hello world" получится "HelloWorld").
function camelCase(str) {
    let newStr = str.split('')
    newStr[0] = newStr[0].toUpperCase()
    for(let i = newStr.length; i > 0; i--) {
        if (newStr[i] === ' ') {
            newStr[i + 1] = newStr[i +1].toUpperCase()
            newStr.splice(i, 1)
        }
    }
    return newStr.join('')
}

console.log(camelCase('hello  asdas asdas asdas'))