<template>
  <div>
    <router-link class="router" to="/">Главная</router-link>
    <router-link class="router" to="/second">Вторая страница</router-link>
    <router-link class="router" to="/about">О нас</router-link>
  </div>
</template>

<script>
export default {
  name: "routerPages"
}
</script>

<style scoped>
.router {
  padding: 20px;
  font-size: 20px;
  text-decoration: none;

}
</style>