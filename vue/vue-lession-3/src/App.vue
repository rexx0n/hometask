<template>
  <div>
    <h1>Письменные столы</h1>
    <ul>
      <li>
        <product-card />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: "ProductCard",
  components:{ProductCard},
  data() {
    return {
      title: "Стол jim",
      price: 19999,
      imgUrl:
        "https://www.cmp24.ru/images/prodacts/sourse/62029/62029116_stol-pismennyiy-uglovoy-jimi-la-redoute-interieurs.jpg",
      count: 20,
    };
  },
};
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
