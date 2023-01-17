<template>
  <div id='app'>
      <button @click="onClick('123',$event)">click</button>
      <input type="text" @keyup.esc='onKeyUp'>
      <p>{{text}} {{someText}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      text:'',
      someText:''
  }
  },
  
  components: {
   
  },
  methods: {
    onClick(value, e) {
      console.log(value, e)
    },
    onKeyUp(e) {
      this.text = 'ты нашел секрет'
      this.someText = e.target.value
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
