// Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’
function PlanetWithSatellite (name,satelliteName) {
    Planet.call(this)
    this.getName = function () {
        return `Planet name is ${name}.The satellite is ${satelliteName}`;
    }
}
var earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName()); // 'Planet name is earth. The satellite is moon’



// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Build (name, floors) {
    this.name = name
    this.floors = floors
    this.getFloors = this.floors
    this.instFloors = function (num) {
        return this.floors = num
    }
}
const a = new Build("google", 5);
console.log(a);
console.log(a.instFloors(7));
console.log(a.getFloors);

let pa = Object.create(Build)

console.log(pa) 

function apartmentHouse (floors, apartments) {
    this.floors = floors
    this.apartments = apartments
    this.getNumberApartments = function () {
        return {floors:this.floors, numberApartments: 5 * this.apartments}
    }
}

let animal = {
    eats:true
}
function Rabbit (name) {
    this.name = name
}
Rabbit.prototype = animal
let rabbit = new Rabbit ("White Rabbit")
console.log(rabbit.eats)


const b = new apartmentHouse(5, 4)
console.log(b)
console.log(b.getNumberApartments())


const parent = {
    who: "cat",
    whatSay: function () {
      return "Meow";
    },
  },
  child = Object.create(parent);
child.who = "Vasya";

console.log(child)
console.log(parent)

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
// Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. Придумайте ему несколько свойству, которые будут характерны только для этого класса. Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture (name,price) {
    this.name = name
    this.price = price
    Furniture.prototype.info = function () {return `${name},${price}`}
}
let fur = new Furniture("chair",1000)
console.log(fur.info())

class OfficeFurniture extends Furniture {
    model = 2
 }
 let office = new OfficeFurniture("office",10000)

//  4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
