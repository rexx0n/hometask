<template>
  <!--  Фильтрация списка товаров: Создайте компонент для отображения списка товаров, используя Vue.js,
и добавьте возможность фильтрации товаров по категории или цене.-->
  <div>
      <div>
          <button @click="priceUp">по цене ↑</button>
          <button @click="priceDown">по цене ↓</button>
            <select @change="onSort($event.target)">
                <option value="Кровать">Кровать</option>
                <option value="Стул">Стул</option>
                <option value="Стол">Стол</option>
            </select>
      </div>
      <div class="list" v-for="item in sortCategory()" :key="item.id">
          <h3>Name: {{item.name}}</h3>
          <h3>Pirce: {{item.price}}</h3>
          <h3>Categoties: {{item.categories}}</h3>
      </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";
// eslint-disable-next-line
let category = ref(null)

let list = reactive([
    {id: 1, name: 'Product 1', price: 99.99, categories: 'Стул'},
    {id: 2, name: 'Product 2', price: 19.99, categories: 'Кровать'},
    {id: 3, name: 'Product 3', price: 9.99, categories: 'Стул'},
    {id: 4, name: 'Product 4', price: 329.99, categories: 'Кровать'},
    {id: 5, name: 'Product 5', price: 49.9, categories: 'Стол'},
    {id: 6, name: 'Product 6', price: 120.99, categories: 'Стол'},
])

function priceDown () {
    list = list.sort((a,b)=> a.price - b.price)
}
function priceUp () {
    list = list.sort((a, b) => b.price - a.price)
}
function onSort (target) {
    category.value = target.value
}
function sortCategory () {
    return list.filter(product => product.categories === category.value || category.value === null)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
    display: flex;
    gap: 15px;
    border:1px solid #42b983;
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
