<template>
  <div>
      <button @click="goToAbout">about page</button>
      <router-link to="/about">Gotoabout</router-link>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
        const router = useRouter()
        function goToAbout()  {
            router.push('/about')
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
