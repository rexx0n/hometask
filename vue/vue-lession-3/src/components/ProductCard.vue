<template>
  <div>
    <img :src="imgUrl" width="300px" />
    <div>
      <h2>{{ title }}</h2>
      <p>{{ price }}</p>
      <p>Достпуно для поставки{{ count }}</p>
      <button>Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProductCard',
  data() {
    return {
      title: "Стол jim",
      price: 19999,
      imgUrl:'https://www.cmp24.ru/images/prodacts/sourse/62029/62029116_stol-pismennyiy-uglovoy-jimi-la-redoute-interieurs.jpg',
      count:20
    }
  }
}
</script>

<style>
</style>
