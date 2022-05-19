'use strict'
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
// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc();
// object.height; // 11;
const object = {
  height: 10,
  inc: function () {
    return this.height + 1;
  },
};
console.log(object.height);
console.log(object.inc());
console.log(object.height);

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3
const numerator = {
  value: 1,
  double: function () {
    this.value = this.value * 2;
    return this;
  },
  plusOne: function () {
    this.value++;
    return this;
  },
  minusOne: function () {
    this.value--;
    return this;
  },
};
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value === 3);

// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const company = {
  price: 10,
  quantity: 25,
  getAll() {
    return this.price * this.quantity;
  },
};
console.log(company.getAll());

//Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
const company1 = {
  quantity: 10,
  price: 20,
  getAll: company.getAll,
};
console.log(company1.getAll());
// Даны объект и функция:
let sizes = { width: 5, height: 10 },
  getSquare = function () {
    console.log(this);
    return this.width * this.height;
  };
  
 console.log(getSquare.call(sizes)); 
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes


// 4.
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight;
getElementHeight = getElementHeight.bind(element)  
console.log(getElementHeight());

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
