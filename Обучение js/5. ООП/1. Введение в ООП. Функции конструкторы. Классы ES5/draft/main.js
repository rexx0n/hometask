const str = new String("hello world")

function Product(brand, price, discount) {
    //1. Создается новый обьект
    //2. На этот обьект устанавливается ссылка this
    //3. возвращает этот обьект
    this.brand = brand
    this.price = price
    this.discount = discount
    this.getPriceWithDiscount = function () {
        return (this.price * (100 - this.discount)) / 100
    }
}
const apple = new Product("Apple", 100, 15)
const samsung = new Product("Samsung", 200, 25)
console.log(apple)
console.log(samsung.getPriceWithDiscount())

function User(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
User.prototype.sayHello = function () {
    return `Hello ${ this.firstName} ${this.lastName}`
}

const user = new User("Aleksei", "Petrov") 

function Customer (firstName, lastName, membership) {
    User.apply(this, arguments)
    this.membership = membership
}

Customer.prototype = Object.create(User.prototype)
Customer.prototype.cunstructor = Customer

Customer.prototype.getMemberShip = function () {
    return this.membership.toUppereCase()
}

const customer = new Customer ("Danil", "Petrov","basic")