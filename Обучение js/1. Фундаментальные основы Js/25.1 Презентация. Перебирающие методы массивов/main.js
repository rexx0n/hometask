// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
const arr = [1,2,3,5,8,9,10]
let a = arr.map(number => ({digit: number, odd:(number % 2 === 0)}) )
console.log( JSON.stringify(a)) 