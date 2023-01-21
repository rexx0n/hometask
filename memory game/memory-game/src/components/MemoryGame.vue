<template>
  <div class="flex">
    <h1>{{winner}}</h1>
    <div @click="onClick(i,index)" class="item" v-for="(i,index) in pole" :key="index">
      <template v-if="value === index">{{ i }} </template>
      <template v-if="valueTwo === index">{{i}}</template>
      <template v-if="open[index]">{{i}}</template>
    </div>
    <select>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

  </div>
</template>

<script>
//как при клике сделать чтобы показывалось цифра
//При клике на среднию сложность добавить в массив 4 цифры, на сложную 6
export default {
  name: 'MemoryGame',
  data() {
    return {
      pole: ['1', '2', '3', '3', '2', '1'],
      value: '',
      valueTwo: '',
      open:[false,false,false,false,false,false],
      count: 0,
      winner: '',


    }
  },
  methods: {
    onClick(i, index) {
      if (this.value === '') {
        //1 click
        this.value = index
        if(this.open[this.value]) {
          this.value = ''
        }
      } else {
        //2 click
        this.valueTwo = index
        if(this.open[this.valueTwo]) {
          this.valueTwo = ''
        }
        if(this.value === this.valueTwo) {
          this.valueTwo = ''
        }

        if (this.pole[this.value] === this.pole[this.valueTwo]) {
          this.open[this.value] = true
          this.open[this.valueTwo] = true
          this.checkWinner()
          this.value = ''
          this.valueTwo = ''
        } else if (this.valueTwo !== '') {

          setTimeout(()=>{
            this.value = ''
            this.valueTwo = ''
          },1500)

        }
      }
    },
    checkWinner() {
      for (let i = 0; i < this.open.length; i++) {
        if (this.open[i] !== this.open[i + 1]) {
          return;
        }
        this.count++
        if (this.count !== 2) {
          return
        }
        this.winner = "Победа"
        console.log()
      }
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
  width: 91px;
  height: 100px;
  box-shadow: inset 1px 1px 8px 14px #d2c2ac;
  background: #CCB494;
}

.flex {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
}

</style>
