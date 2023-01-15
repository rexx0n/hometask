<template>
  <div class="calc">
    <div class="screen"><span v-if="result==null">{{ num }} {{operator}} {{numTwo}}</span>
      <span v-else>{{result}}</span> </div>
    <div class="flex">
      <button v-on:click="reset" class="lightGray">AC</button>
      <button v-on:click="addNumber(1)" class="lightGray">+/-</button>
      <button v-on:click="addNumber('%')" class="lightGray">%</button>
      <button v-on:click="addOperator('/')" class="marks">÷</button>
      <button v-on:click="addNumber(7)">7</button>
      <button v-on:click="addNumber(8)">8</button>
      <button v-on:click="addNumber(9)">9</button>
      <button v-on:click="addOperator('*')" class="marks">х</button>
      <button v-on:click="addNumber(4)">4</button>
      <button v-on:click="addNumber(5)">5</button>
      <button v-on:click="addNumber(6)">6</button>
      <button v-on:click="addOperator('-')" class="marks">-</button>
      <button v-on:click="addNumber(1)">1</button>
      <button v-on:click="addNumber(2)">2</button>
      <button v-on:click="addNumber(3)">3</button>
      <button v-on:click="addOperator('+')" class="marks">+</button>
      <button v-on:click="addNumber(0)" class="padding">0</button>
      <button v-on:click="addNumber('.')">.</button>
      <button v-on:click="calculate" class="marks">=</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'сalculator',
  data() {
    return {
      num: '',
      numTwo: '',
      operator: "",
      result: null,
    }
  },
  methods: {
    calculate() {
      this.result = this.calc(this.num, this.numTwo, this.operator)
    },
    addNumber(digit) {
      if (this.operator !== '') {
        this.numTwo += digit
      }
      else {
        this.num += digit
      }
    },
    addOperator(operator) {
      this.operator = operator
    },
    reset() {
      this.num = ''
      this.numTwo = ''
      this.operator = ''
      this.result = null
    },
    calc(a, b, c) {
      let result
      a = Number(a)
      b = Number(b)
      if (c == "+") {
        result = a + b
      }
      if (c == "-") {
        result = a - b
      }
      if (c == "*") {
        result = a * b
      }
      if (c == '%') {
        result = a / b * 100
      }
      if (c == "/") {
        if (a !== 0 && b !== 0)
        {
          result = a / b
        }
        else {
          result = 'На ноль делить нельзя'
        }

      }
      return result
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

.flex {
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
