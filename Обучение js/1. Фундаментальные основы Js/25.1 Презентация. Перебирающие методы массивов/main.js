// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
const arr = [1,2,3,5,8,9,10]
let a = arr.map(number => ({digit: number, odd:(number % 2 === 0)}) )
console.log( JSON.stringify(a)) 

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
let arr2 = [12, 4, 50, 1, 0, 18, 40]
let is0 = arr2.some(number => number === 0)
console.log(is0)

// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
let arr3 = ['yess', 'hello', 'noss', 'easycode', 'what']
let isAll = arr3.every(element => element.length > 3)
console.log(isAll)

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

 let arrStr = [
    {char:"a",index:12},
    {char:"w",index:8},
    {char:"Y",index:10},
    {char:"p",index:3}, 
    {char:"p",index:2},
    {char:"N",index:6},
    {char:" ",index:5},
    {char:"y",index:4},
    {char:"r",index:13},
    {char:"H",index:0},
    {char:"e",index:11},
    {char:"a",index:1},
    {char:" ",index:9},
    {char:"!",index:14},
    {char:"e",index:7}
]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
function sob (arr) {
    let a = ""
    arr.sort( (prev,next) => prev.index - next.index)
    arr.forEach(element => a += element.char)
    return a
}
console.log(sob(arrStr))