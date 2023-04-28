<template>
  <div>
      <form action="">
          <input v-model="Myname" type="text" placeholder="name">
          <input v-model="Myemail" type="email" placeholder="email">
          <input v-model="Mypassword" type="password" placeholder="password">
      </form>
      <button @click="isShow">Вывести даннные</button>
      <div v-if="bool">
          <h1>Name: {{Myname}}</h1>
          <h1>Email: {{Myemail}}</h1>
          <h1>Password: {{Mypassword}}</h1>
      </div>

        <div v-for="user in users" :key="user">
          <h1>{{user.name}}</h1>
      </div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from "vue";
let Myname = ref('')
let Myemail = ref('')
let Mypassword = ref('')
let bool = ref(false)
function isShow() {
    bool = true
}
watch(bool, (newBool) => {
    console.log(newBool)
})
onMounted(()=> {
    console.log('теперь ')
})
const users = ref([{
    name:'Aleksei',
    age:17,
    job:'frontend',
},{
    name:"asda",
    age:18,
    job:'asdas',

}
])

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
