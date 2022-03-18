let wordle = {
    onPoleWrite () {
        console.log(1)
    },
    setRandomWord () {
        // throw new Error("Не реализована");
        let i = Math.random() *(this.dict.length - 1)
        i = Math.round(i)
        this.word = this.dict[i]

    },
    init () {
        this.setRandomWord()
        document
          .querySelector(".btn")
          .addEventListener("click", this.onPoleWrite.bind(this));
    },
    dict: ["ложка","рюмка"],
    word: null,
};

wordle.init()