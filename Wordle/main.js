let wordle = {
  onPoleWrite() {
    //получить строку которую ввели
    let str = this.getCurrent();
    //Проверить на 5 символов
    //если больше 5 то отмена
    //если меньше 5 то отмена
    if (this.isValid(str) === false) {
      return;
    }
    //если 5 то ввести по символу в ячейки
    let row = document.getElementById(this.try).querySelectorAll("span");
    for (let i = 0; i < str.length; i++) {
      let a = str[i];
      row[i].textContent = a;
      //Если буква есть в слове но не в этом порядке то покрасить в желтый
      if (this.isYellow(a, i)) {
        //добавить класс желтый
        row[i].classList.add("yellow");
      } else {
        if (this.isGreen(a, i)) {
          //Добавить класс зеленый
          row[i].classList.add("green");
        }
      }

      // если буква стоит в правильном место то покрасить в зеленый
    }
    //проверить совпадают ли слова
    // если да то вывести победа если нет то увеличить попытку
    if (this.isWin(str) === true) {
      alert("You Win");
    } else {
      this.try++;
      //если попыток не осталось то вывести проигрыш, макс 6 попыток
      if (this.try === 6) {
        alert("You Lose");
      }
    }
  },
  try: 0,
  // функция возвращает true если simfol есть в загаданом слове (this.word) и не стоит на своей позиции
  isYellow(simfol, index) {
    throw new Error("Не реализована");
    
  },
  // функция возвращает true если simfol есть в загаданом слове (this.word) и стоит на своей позиции
  isGreen(simfol1, index1) {
    throw new Error("Не реализована");
  },
  getCurrent() {
    // throw new Error("Не реализована")
    let input = document.getElementById("input");
    return input.value;
  },
  //проверят является ли строка длиной 5 символов
  isValid(str) {
    return str.length === 5;
  },
  isWin(text) {
    throw new Error("Не реализована");
  },
  setRandomWord() {
    // throw new Error("Не реализована");
    let i = Math.random() * (this.dict.length - 1);
    i = Math.round(i);
    this.word = this.dict[i];
  },
  init() {
    this.setRandomWord();
    document
      .querySelector(".btn")
      .addEventListener("click", this.onPoleWrite.bind(this));
  },
  dict: ["ложка", "рюмка"],
  word: null,
};

wordle.init()