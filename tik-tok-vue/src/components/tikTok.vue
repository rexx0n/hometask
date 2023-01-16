<template>
  <div>
    <p>Игра крестики нолики</p>
    <button class="reset">Начать заново</button>
    <div class="ss">
      <div class="tiktok">
        <div @click="onClick" :class="{tiktok__pole__tik: false}" class="tiktok__pole border-right" id="0"></div>
        <div @click="onClick" class="tiktok__pole border-right" id="1"></div>
        <div @click="onClick" class="tiktok__pole" id="2"></div>
        <div @click="onClick" class="tiktok__pole border-right border-top" id="3"></div>
        <div @click="onClick" class="tiktok__pole border-right border-top tiktok__pole--tik" id="4"></div>
        <div @click="onClick" class="tiktok__pole border-top" id="5"></div>
        <div @click="onClick" class="tiktok__pole border-right border-top" id="6"></div>
        <div @click="onClick" class="tiktok__pole border-right border-top" id="7"></div>
        <div @click="onClick" class="tiktok__pole border-top" id="8"></div>
      </div>
      <div class="block">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>
// при клике на поле должен появлятся крестик или нолик
// если mark === 'x' то поставить крестик и поменять на нолик если mark = '0' то поставить 0 и поменять на х
//при клике нужно добавить класс  если 0 то добавить класс
//
<script>
export default {
  name: 'tikTok',
  data() {
    return {
      mark: 'x',
      id: [],
      title: 'Ходит крестик',
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
    }
  },
  methods: {
    onClick(event) {
      if (this.mark === 'x') {
        console.log(event.target)
        event.target.classList.add("tiktok__pole__tik")
        this.id.push(event.target.id)
        console.log(this.id)
        for (let i = 0; i < this.lines.length; i++) {
          // const [a, b, c, d, e] = this.id;
          console.log(this.lines)
        }
        this.mark = '0'
        this.title = 'Ходит нолик'


      } else {
        console.log(event.target)
        event.target.classList.add("tiktok__pole__tok")

        this.mark = 'x'
        this.title = 'Ходит крестик'
      }
    }
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
}

.border-right {
  border-right: 1px solid black;
}

.border-top {
  border-top: 1px solid black;
}

.tiktok__pole__tik {
  background-image: url(../assets/x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiktok__pole__tok {
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