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

function apartmentHouse (floors, apartments) {
    Build.call(this)
    this.floors = floors
    this.apartments = apartments
    this.getNumberApartments = function () {
        return {floors:this.floors, numberApartments: 5 * this.apartments}
    }
}

const b = new apartmentHouse(5, 4)
console.log(b)
console.log(b.getNumberApartments())


