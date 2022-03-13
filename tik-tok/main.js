let game = {
    isTok: true,
    onPoleClick (event) {
        if (event.target.znak === "X" || event.target.znak === "O") {
            return 
        }
        console.log(event)
        if (this.isTok === true) {
            event.target.classList.add("tiktok__pole--tok");
            event.target.znak = "O";
        }
        else {
            event.target.classList.add("tiktok__pole--tik");
            event.target.znak = "X"
        }
        let result = this.checkWinner()
        if (result !== null) {
            alert(`Победил ${result}`)
        }
        
        if (this.checkGameOver() === true) {
            alert("Game Over")
        }
        
        this.isTok = ! this.isTok

    },
    checkGameOver () {
       let pole = document.querySelectorAll(".tiktok__pole")
       for (let i = 0; i < pole.length; i++) {
        if (pole[i].znak === undefined ) {
            return false
       }
       }
       return true
    },
    checkWinner () {
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
    init () {
        document.querySelectorAll(".tiktok__pole").forEach(element => {
            element.addEventListener("click", this.onPoleClick .bind(this));
        })
    } 
}


game.init()