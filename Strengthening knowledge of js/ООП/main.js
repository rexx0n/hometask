class Rectagle {
     _width
     _height
    constructor(w,h) {
        this.width = w;
        this.height = h
    }
    get width() {
        return this._width
    }
    set width(value) {
        this._width = value
    }
    calcArea() {
        return this._width * this._height
    }
}

const rect = new Rectagle(5,10)

console.log(rect.calcArea());

class User {
    _username
    _password
    _id 
    constructor(username, password){
        this._username = username
        this._password = password
        // this._id = generateRandomId()
    }
    get username () {
        return this._username
    }
    set username(value) {
        this._username = value
    }
    get password() {
        return this._password
    }
    set password (value) {
        this._password = value
    }
    get id(){
        return this._id
    }
}
const user = new User('Alex','sdsa')

class Person {
    get age() {
        return this._age;
    }
    get fullName() {
        return `Фамилия ${this._lastName} Имя ${this._firtsName}`
    }
    set age(value) {
        if(value < 0) {
            this._age = 0
        }
        else {
            this._age = value;
        }
    }
    greeting() {
        console.log(`Привет я человек и меня зовут ${this._firtsName}`)
    }
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
    get firtsName() {
        return this._firtsName;
    }

    set firtsName(value) {
        this._firtsName = value;
    }
    _firtsName
    _lastName
    _age

    constructor(firtsName, lastName,age) {
        this._firtsName = firtsName
        this._lastName = lastName
        this._age = age
    }
}
class Employee extends Person{
    inn
     number
     snils
    constructor(firtName, lastName, age, inn, number, snils) {
        super(firtName, lastName,age);
        this.inn = inn
        this.number = number
        this.snils = snils
    }
}
const employee1 = new Employee('Alex', 'asda', 15, 1,12,12312)
console.log(employee1)

class Developer extends Employee {
    level
    language
    constructor(firtName, lastName, age, inn, number, snils,level, language) {
        super(firtName, lastName, age, inn, number, snils);
        this.level = level
        this.language = language
    }
}
const devep = new Developer('Alex', 'sda', 14,14,14,14,'Junior', 'JavaScript')
const emplayee = new Employee('Emplayee', 'asda',12,12,12,12)
const person = new Person('Person', 'asda', 14)

devep.greeting()
emplayee.greeting()
person.greeting()