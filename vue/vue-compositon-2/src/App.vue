<template>
  <HelloWorld/>
  <NewComponent foo="Hell"></NewComponent>
  <span ></span>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from "@/components/NewComponent.vue";
export default {
  name: 'App',
  components: {
      NewComponent,
    HelloWorld
  },

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
