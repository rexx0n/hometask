// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let a = "hidden";
if (a === "hidden") {
  a = "visible";
} else {
  a = "hidden";
}
console.log(a);

// 2.Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let b = 10;
if (b === 0) {
  b = 1;
} else if (b < 0) {
  b = "less them zero";
} else if (b > 0) {
  b *= 10;
}
console.log(b);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };
//let car = { name: "Lexus", age: 1, create: 2008, needRepair: false };

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
}
else {
  car.needRepair = false
}
console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '5%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
//TODO убрать функцию, использовать isNaN и использовать parseFloat
let item = { name: "Intel core i7", price: "100", discount: "15" };
if (item.discount !== NaN && item.price !== NaN) {
  function discount(price, discount) {
    let priceNumber = Number(price);//я убрал символ доллора в обьекты чтобы сделать из строки число
    let discountNumber = Number(discount);// и процент убрал
    let sum = (priceNumber / 100) * discountNumber;

    return priceNumber - sum;
  }
  item.priceWithDiscount = discount(item.price, item.discount);
}
console.log(item);

// 5.Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "100",
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (product.price >= min && product.price <= max) {
  console.log(product.name)
}
else {
  console.log("Товаров не найдено")
}