<template>
  <div id="app">
    <input type="text" v-model="textComputed">
    <h3>
      input text value:
      <i>{{text}}</i>
    </h3>
    <div class="checkboxes">
      <input type="checkbox" v-model="checkbox">
      <h3>
       checkbox value:
      <i>{{checkbox}}</i>
    </h3>
    <select v-model="select">
      <option value="bmw">BMW</option>
      <option value="audi">Audi</option>
    </select>
    <h3>
      select value:
      <i>{{select}}</i>
    </h3>
    </div>
    <HelloWorld></HelloWorld>
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
      text:'',
      checkbox:false,
      select: '',
    }
  },
  computed: {
    textComputed: {
      get() {
        return this.text
      },
      set(value) {
        console.log(value)
        this.text = value
      }
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
