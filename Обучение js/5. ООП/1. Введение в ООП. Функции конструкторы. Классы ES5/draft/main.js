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