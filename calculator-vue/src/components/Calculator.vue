<template>
  <div class="calc">
  <div class="screen">{{ num }}</div>
    <div class="flex">
      <button v-on:click="reset" class="lightGray">AC</button>
      <button v-on:click="addNumber" class="lightGray">+/-</button>
      <button v-on:click="addNumber" class="lightGray">%</button>
      <button v-on:click="addNumber" class="marks">÷</button>
      <button v-on:click="addNumber">7</button>
      <button v-on:click="addNumber">8</button>
      <button v-on:click="addNumber">9</button>
      <button v-on:click="addNumber" class="marks">х</button>
      <button v-on:click="addNumber">4</button>
      <button v-on:click="addNumber">5</button>
      <button v-on:click="addNumber">6</button>
      <button v-on:click="addNumber" class="marks">-</button>
      <button v-on:click="addNumber">1</button>
      <button v-on:click="addNumber">2</button>
      <button v-on:click="addNumber">3</button>
      <button class="marks">+</button>
      <button v-on:click="addNumber" class="padding">0</button>
      <button v-on:click="addNumber">.</button>
      <button v-on:click="addNumber" class="marks">=</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'сalculator',
  data() {
    return {
      num:0,
      mark:"",
    }
  },
  methods: {
    addNumber (event) {
      this.num = event.target.textContent
    },
    reset () {
      this.num = 0
    }
  }
  
}
</script>

<style scoped>
.lightGray {
  background: lightgray;
}
.screen {
  font-size: 40px;
  color: white;
  padding-right: 20px;
}
.flex{
  margin: 0 auto;
  display: flex;
  max-width: 215px;
  flex-wrap: wrap;
  gap: 5px;
}
.calc {
  display: flex;
  margin: 0 auto;
  background: black;
  border-radius: 20px;
  align-items: flex-end;
  max-width: 245px;
  min-height: 500px;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 1px 1px 0px 7px grey;
  padding-bottom: 10px;

}
.marks {
  background: orange;
}
.padding {
  padding-right: 69px;
  padding-left: 20px;
}
button {
  border-radius: 50px;
  background: gray;
  min-width: 50px;
  min-height: 50px;
  font-size: 20px;
}
</style>
