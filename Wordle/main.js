let wordle = {
  onPoleWrite() {
    //получить строку которую ввели
    let str = this.getCurrent();
    //Проверить на 5 символов
    //если больше 5 то отмена
    //если меньше 5 то отмена
    if (this.isValid(str) === false) {
                                                            //если меньше 5 символов то вывести что нужно 5
      return ;
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
                                                                        //будет отлично если сделать ниже алфавит и вычеркивать буквы которые были использованы
      // если буква стоит в правильном место то покрасить в зеленый
    }
    //проверить совпадают ли слова
    // если да то вывести победа если нет то увеличить попытку
    if (this.isWin(str) === true) {
                                                                          //алерт заменить на вывод в html 
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
    //throw new Error("Не реализована");
    if (isCharExist(simfol, this.word) != null && isCharExist(simfol, this.word) !== index) {
      return true
    } 
    else {
      return false
    }
  },
  // функция возвращает true если simfol есть в загаданом слове (this.word) и стоит на своей позиции
  isGreen(simfol1, index1) {
    if (isCharExist(simfol1, this.word) !==null && isCharExist(simfol1, this.word) === index1) {
      return true
    }
    else {
      return false
    }
  },
  getCurrent() {
    let input = document.getElementById("input");
    return input.value;
  },
  //проверят является ли строка длиной 5 символов
  isValid(str) {
    return str.length === 5;
  },
  isWin(text) {
    //throw new Error("Не реализована");  
    if (text === this.word) {
      return true
    }
    else {
      return false
    }
  },
  setRandomWord() {
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
//функция проверяет если ли символ в слове и если есть возвращает номер его позиции в слове, а если нет возвращает null
function isCharExist (symbol, word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === symbol) {
        return i
      }
  } 
  return null
}
wordle.init()