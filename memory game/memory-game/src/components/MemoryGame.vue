<template>
  <h1>{{ winner }}</h1>
  <p>Осталось открыть {{ countClosedCard }}</p>
  <div class="flex">
    <div @click="onClick(i,index)" class="item" v-for="(i,index) in pole" :key="index">
      <template v-if="value === index">{{ i }}</template>
      <template v-if="valueTwo === index">{{ i }}</template>
      <template v-if="open[index]">{{ i }}</template>
    </div>
  </div>
  <select @change="onChange" v-model="size">
    <option :value="6">Easy</option>
    <option :value="18">Medium</option>
    <option :value="36">Hard</option>
  </select>
</template>

<script>

export default {
  name: 'MemoryGame',
  data() {
    return {
      pole: ['1', '2', '3', '3', '2', '1',],
      value: '',
      valueTwo: '',
      open: [false, false, false, false, false, false],
      size: 6,
    }
  },
  methods: {
    //перезаписать Pole на требуемое колво
    onChange() {
      this.reset()
      this.pole = this.generatePole()// this.pole = this.generatepole(this.size)//в зависимости от параметра size возвращает массив[1,1,]
       this.pole = this.shuffle()   // this.pole = this.random(this.pole)
      // value open сбросить
    },
    shuffle() {
      return this.pole.sort(() => Math.random() - 0.5);
    },
    generatePole() {
      //надо чтобы 2 одинаковых числа записывались в подряд
      for (let i = 0; i < this.size / 2; i++) {
        this.pole.push(i)
        this.pole.push(i)
      }
      console.log(this.pole)
      return this.pole
    },
    reset() {
      this.value = ''
      this.valueTwo = ''
      this.open = [false, false, false, false, false, false]
      this.pole = []
    },
    onClick(i, index) {
      if (this.value === '') {
        //1 click
        this.value = index
        if (this.open[this.value]) {
          this.value = ''
        }
      } else {
        //2 click
        this.valueTwo = index
        if (this.open[this.valueTwo]) {
          this.valueTwo = ''
        }
        if (this.value === this.valueTwo) {
          this.valueTwo = ''
        }

        if (this.pole[this.value] === this.pole[this.valueTwo]) {
          this.open[this.value] = true
          this.open[this.valueTwo] = true
          this.value = ''
          this.valueTwo = ''
        } else if (this.valueTwo !== '') {
          setTimeout(() => {
            this.value = ''
            this.valueTwo = ''
          }, 1500)

        }
      }
    },
  },
  computed: {
    checkWinner() {
      for (let i = 0; i < this.open.length; i++) {
        if (this.open[i] !== true) {
          return false;
        }
      }
      return true
    },
    winner() {
      if (this.checkWinner === true) {
        return 'Победа'
      }
      return ''
    },
    countClosedCard() {
      return this.open.filter((el) => {
        if (el !== false) {
          return false
        }
        return true
      }).length
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  min-width: 91px;
  min-height: 100px;
  box-shadow: inset 1px 1px 8px 14px #d2c2ac;
  background: #CCB494;
  margin: 10px;
}

.flex {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
}

</style>
