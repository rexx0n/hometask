// Напишите функцию, которая находит наибольший элемент в массиве чисел.
let arr = [12312,1,2,3,4,5,6,7,8]
function biggest(arr) {
    arr.sort((a,b)=>  a - b)
    console.log(arr[arr.length - 1])
}
biggest(arr)
// Реализуйте функцию, которая удаляет все дубликаты из массива.
let arr2 = [1,2,2,3,3,4,5,6,7,7]
function filter(arr) {
   return  arr.filter((item, index, self) =>
       self.indexOf(item)  === index
   )
}

console.log(filter(arr2))
//Создайте функцию, которая инвертирует порядок элементов в массиве.
function invert(arr) {
    let newArr = []
    for(let i =arr.length -1; i > -1; i--) {
       newArr.push(arr[i])
    }
    return newArr
}

console.log(invert([1,2,3,4]))