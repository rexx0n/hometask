<template>
  <div>
      <p @click="$emit('increaseBy',1)"> Increase by 1</p>
  </div>
</template>

<script setup>
//eslint-disable-next-line
import {ref} from "vue";
// eslint-disable-next-line
let count = ref(0)
// eslint-disable-next-line
function increaseCount(n) {
    count.value += n
}
const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
    emit('submit')
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
