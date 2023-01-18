<template>
  <div>
    <p>Игра крестики нолики</p>
    <button @click="reset">Начать заново</button>
    <div class="ss">
      <div class="tiktok">
        <div @click="onClick(index)" v-for="(i,index) in pole" :key="index"
             :class="{'tiktok__pole--tik': i === TIK,'tiktok__pole--tok': i === TOK}" class="tiktok__pole"></div>

      </div>
      <div class="block">
        <p v-if="mark === TIK">Ходит крестик</p>
        <p v-else>Ходит нолик</p>
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>
// при клике на поле должен появлятся крестик или нолик
// если mark === 'x' то поставить крестик и поменять на нолик если mark = '0' то поставить 0 и поменять на х
//при клике нужно добавить класс  если 0 то добавить класс
//
<script>
const TIK = 'х'
const TOK = '0'
export default {
  name: 'TikTok',
  data() {
    return {
      mark: TIK,
      TIK: TIK,
      TOK: TOK,

      title: '',
      lines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      pole: ['', '', '', '', '', '', '', '', ''],
    }
  },
  methods: {
    onClick: function (index) {
      if (this.pole[index] !== '') {
        return
      }
      this.pole[index] = this.mark
      this.mark = this.mark === TIK ? TOK : TIK
      if (this.checkWinner() !== null) {
        this.title = this.checkWinner() === TOK ? "Выиграл нолик" : "Выиграл крестик"
      }
      this.draw()
    },
    draw() {
      for (let i = 0; i < this.pole.length; i++) {
        if (this.pole[i] === '') {
          return
        }
      }
      return this.title = 'Ничья';
    },
    reset() {
      this.pole = ['', '', '', '', '', '', '', '', '']
      this.mark = TIK
      this.title = ''
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
            this.pole[a] &&
            this.pole[a] === this.pole[b] &&
            this.pole[a] === this.pole[c]
        ) {
          return this.pole[a];
        }
      }
      return null
    },
  }
}
</script>

<style scoped>

.tiktok {
  display: flex;
  width: 359px;
  justify-content: center;
  flex-wrap: wrap;
}

.tiktok__pole {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.border-right {
  border-right: 1px solid black;
}

.border-top {
  border-top: 1px solid black;
}

.tiktok__pole--tik {
  background-image: url(../assets/x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiktok__pole--tok {
  background-image: url(../assets/o.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.ss {
  display: flex;
  justify-content: center;
}
</style>