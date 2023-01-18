<template>
  <div>
    <hello-world></hello-world>
    <li v-for="(color, index) in colors" :key="index">{{index + 1}}{{color}}</li>
    <!-- <li v-for="user in users" :key="user.id">
      {{user.name}} : {{user.age}}
    </li> -->
    <!-- <li v-for="(value,name, index) in product" :key="index">{{name}} {{value}}</li> -->
    <input type="text" @keyup.enter='addNewColor'>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      colors:['orange', 'black', 'yellow'],
      users: [{name:'Denis', age:30, id:1}, {name: 'Ivan', age:35, id:2}],
      product: {
        brand:"Apple",
        model:"iPhone 14 Pro",
        price: "$1500"
      }
    }
  },
  methods: {
    addNewColor(e) {
      this.colors.push(e.target.value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
