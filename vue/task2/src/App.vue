<template>
  <div>
    <myRegistration ></myRegistration>
  </div>

</template>

<script>
import myRegistration from './components/myRegistration.vue'

export default {
  name: 'App',
  components: {
    myRegistration
  }
}
</script>

<style>
body {
  background: url("https://pcvector.net/uploads/posts/2018-08/1533326959_low-poly-background-generator-min.png");
  background-repeat:no-repeat;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
