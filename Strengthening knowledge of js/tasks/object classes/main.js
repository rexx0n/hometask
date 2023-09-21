// Создайте класс "Человек", имеющий свойства "имя" и "возраст". Напишите метод, который возвращает строку с информацией о человеке.
class Human {
    constructor() {
        this.name = 'Aleksey'
        this.lastName = 'Mir'
    }
    info() {
        console.log(this.name, this.lastName)
    }
}
let human = new Human()
human.info()

//     Создайте класс "Калькулятор", который имеет методы для сложения, вычитания, умножения и деления чисел.
class Calculator {
    constructor() {
    }
    addition(num, num2) {
        console.log(num + num2)
    }
    subtraction(num, num2) {
        console.log(num - num2)
    }
    multiplication(num, num2) {
        console.log(num * num2)
    }
    fission(num, num2) {
        console.log(num / num2)
    }
}

let calc = new Calculator()
calc.addition(2,2)
calc.subtraction(4,2)
calc.multiplication(4,2)
calc.fission(12,2)
//     Реализуйте объект "Команда футболистов", включающий в себя массив футболистов. Напишите методы для добавления и удаления футболистов
//     из команды.
class SoсcerTeam {
    constructor(arr) {
        this.arr = arr
    }
    deleteUser() {
        this.arr.shift()
        console.log(this.arr)
    }
    addUser(item){
        this.arr.push(item)
        console.log(this.arr)
    }
}
let soccer = new SoсcerTeam(['a','b','c','d','e'])
soccer.deleteUser()
soccer.addUser('g')