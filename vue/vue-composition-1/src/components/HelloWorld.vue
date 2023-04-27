<template>
  <div>
      <h1 @click="plus">{{state.count}}</h1>
      <h1 @click="minus">{{count2}}</h1>
      <h1>{{счетчик}}</h1>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";

     const state= reactive({count:0})
      function plus() {
         state.count++
      }
      function minus() {
         count2.value--
      }
      const count2 = ref(10)
      const счетчик = ref(20)
      const log = computed(()=> {
          return console.log('asdasda')
      })



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
