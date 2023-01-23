<template>
  <div>
    <h1> Hello {{fullName}}</h1>
    <HelloWorld />
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
    return{
      firsName:'Aleksey',
      lastName:''
    }
  },
  computed: {
    fullName() {
      return `${this.firsName || 'Default'} ${this.lastName || 'User'}`
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
