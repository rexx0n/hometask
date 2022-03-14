let game = {
  isTok: true,
  onPoleClick(event) {
    if (this.isfinish === true) {
      return;
    }
    if (event.target.znak === "X" || event.target.znak === "O") {
      return;
    }
    console.log(event);
    if (this.isTok === true) {
      event.target.classList.add("tiktok__pole--tok");
      event.target.znak = "O";
      this.changeTitle("Ходит крестик");
    } else {
      event.target.classList.add("tiktok__pole--tik");
      event.target.znak = "X";
      this.changeTitle("Ходит нолик");
    }
    let result = this.checkWinner();
    if (result !== null) {
      this.changeTitle(`Победил ${result}`);
      this.isfinish = true;
    }

    if (this.checkGameOver() === true) {
      this.changeTitle("Game Over");
      this.isfinish = true;
    }

    this.isTok = !this.isTok;
  },
  isfinish: false,
  changeTitle(text) {
    let paragraph = document.querySelector(".block p");
    paragraph.textContent = text;
  },
  checkGameOver() {
    let pole = document.querySelectorAll(".tiktok__pole");
    for (let i = 0; i < pole.length; i++) {
      if (pole[i].znak === undefined) {
        return false;
      }
    }
    return true;
  },
  onReset() {
    this.isTok = true;
    this.isfinish = false;
    this.changeTitle("Сейчас ходит нолик");
    let pole = document.querySelectorAll(".tiktok__pole");
    for (let i = 0; i < pole.length; i++) {
       pole[i].znak = undefined 
       pole[i].classList.remove("tiktok__pole--tik");
       pole[i].classList.remove("tiktok__pole--tok");
    }
  },
  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        document.getElementById(a).znak &&
        document.getElementById(a).znak === document.getElementById(b).znak &&
        document.getElementById(a).znak === document.getElementById(c).znak
      ) {
        return document.getElementById(a).znak;
      }
    }
    return null;
  },
  init() {
    document
      .querySelector(".reset")
      .addEventListener("click", this.onReset.bind(this));
    this.changeTitle("Ходит нолик");
    document.querySelectorAll(".tiktok__pole").forEach((element) => {
      element.addEventListener("click", this.onPoleClick.bind(this));
    });
  },
};

game.init();
