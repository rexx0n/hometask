// Напишите функцию, которая принимает два числа и возвращает их сумму.
function sum(one, two) {
    return one + two
}
// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.
function sumArr (arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res
}
console.log(sumArr([1,2,3,4]) === 10)
// Напишите функцию, которая принимает строку и возвращает ее длину.
function whatsLength(str) {
    return str.length
}
// Напишите функцию, которая принимает массив строк и возвращает массив тех строк, которые имеют длину больше 5 символов.
function arrStr (arr) {
    return arr.filter(word => word.length > 5)
}
console.log(typeof arrStr(['asd','ert','Человек','фывфыафыа']))
// Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
function reverse(str) {
   return str.split('').reverse().join('')
}
console.log(reverse('Hello') === 'olleH')
// Напишите функцию, которая принимает массив чисел и возвращает массив, отсортированный по возрастанию.
function sortt(arr) {
    return arr.sort((a, b) => a - b );
}
console.log(sortt([24,5,1,42,523,2,4,3]) == [1,2,3,4,5,24,42,523])//почему обьект 
// Напишите функцию, которая принимает две строки и возвращает true, если они являются анаграммами, и false в противном случае.
function annagram(strOne,strTwo) {
    if(strOne.length !== strTwo.length) {
        return false
    }
    let str1 = strOne.split('')
    let str2 = strTwo.split('')
    for(let i = 0; i < strOne.length; i++) {
        if( str1.includes(str2[i]) === false) {
            return false
        }
    }
    return true
}
console.log(annagram('рож','орж'))
// Напишите функцию, которая принимает массив чисел и возвращает среднее значение.

// Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (то есть читается одинаково как справа налево, так и слева направо).
function isPalidrome(str) {
    let a =  str.toLowerCase().split('').reverse().join('')
    if(a === str.toLowerCase()) {
        return true
    }
    return false
}
  console.log(isPalidrome('Казак'))  
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только уникальные значения.
function unical(arr) {
    arr.reduce((acc,str)=>{
    
    
          
    },[])
}
console.log(unical(['еж','еж','asd','asr']))