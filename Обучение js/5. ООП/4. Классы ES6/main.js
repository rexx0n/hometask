// Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:

// const comp = new Component('span');

class Component {
  constructor(tagName = "div") {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}

const comp = new Component("span");
const compo = new Component();

// Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) {
//   this.node.textContent = text;
// };
//Сделано выше

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
class Calculator {
  constructor(num) {
    this._num = num;
  }
  addUp(nume) {
    return (this._num = this._num + nume);
  }
  subtract(nume) {
    return (this._num = this._num - nume);
  }
  multiply(nume) {
    return (this._num = this._num * nume);
  }
  divide (nume) {
    return (this._num = this._num / nume);
  }
  set num (name) {
    this._num = name
  }
  get num () {
    return this._num
  }
}

const calc = new Calculator(2);
