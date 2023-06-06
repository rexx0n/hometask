<template>
<!--  Создайте простой таймер. Используйте композицию, чтобы отделить логику таймера от представления. -->
<!--  Таймер должен иметь кнопки "Старт", "Пауза" и "Сброс", а также отображать текущее время таймера.-->
  <div>
      <h1>{{timer}}</h1>
      <button @click="startTimer()">Старт</button>
      <button @click="stopTimer">Пауза</button>
      <button @click="resetTimer">Сброс</button>

  </div>
</template>

<script setup>
/* eslint-disable */
import {ref} from "vue";

let timer = ref(0)
let timerVal;
function startTimer() {
    timerVal =  setInterval(()=> {
        timer.value++
    },1000)
}
function stopTimer() {
    clearInterval(timerVal)
}
function resetTimer() {
    timer.value = 0
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
