const methodName = "setNewPrice"
class ProductEs {
    constructor(brand, price, discount) {
        this._brand = brand
        this.price = price
        this.discount = discount
    }
    get brand () {
        return this._brand
    }
    set brand (name) {
        this._brand = name
    }
    getPriceWithDiscount () {
        return (this.price * (100 - this.discount)) / 100
    }
    [methodName] (newPrice) {
        this.price = newPrice
    }
    static plus (x,y) {
        return x + y;//нет в прототипе, находиться в конструкторе
    }
    //ProductEs.plus(1,2)
}

const newProduct = new ProductEs ("samsung", 200,10)