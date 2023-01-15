<template>
  <div>
    <h1 v-if="msgIsVisible">{{firstName}}</h1>
    <h1 v-else>Error</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      firstName: 'Alexey',
      msgIsVisible:true,
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
