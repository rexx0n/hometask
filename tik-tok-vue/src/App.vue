<template>
  <p>Игра крестики нолики</p>
  <button class="reset">Начать заново</button>
  <div class="ss">
    <div class="tiktok">
      <div @click="test" class="tiktok__pole" id="0">{{ pole[0] }}</div>
     
    </div>
    <div class="block">
      <p>{{msg}}</p>
    </div>
  </div>
  <div @click="increment">
  Count is: {{ count }}
</div>
</template>

<script setup>
import {ref, onMounted} from "vue";
//X X X
//X X X
//X X X
let pole = ref(["", "x", "0", "", "", "", "", "", ""]);
console.log(pole);
function test() {
  pole.value[0] = "X";
  msg.value = '<hr>dfgdfg'
}


let msg = ref('sdjhgfkjdfhsdhjfkhsd');

const count = ref(0)
function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style>
body {
  margin: 0 auto;
  background-color: #515052;
}
.tiktok {
  display: flex;
  width: 359px;
  height: 500px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.tiktok__pole {
  background-color: gray;
  width: 100px;
  height: 100px;
  margin-right: 13px;
  margin-bottom: 26px;
}
.tiktok__pole--tik {
  background-image: url(assets/x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiktok__pole--tok {
  background-image: url(assets/o.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.ss {
  display: flex;
  justify-content: center;
}
</style>
