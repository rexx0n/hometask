// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
  width: 20,
  height: 20,
  getSquare: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.getSquare());
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
const price = {
  price: 10,
  discount: "15%",
  getPriceWithDiscount: function () {
    let sum = (this.price / 100) * parseFloat(this.discount);
    return this.price - sum;
  },
  getPrice: function () {
    return this.price;
  },
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
