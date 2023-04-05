<template>
<!--  Фильтрация списка товаров: Создайте компонент для отображения списка товаров, используя Vue.js,
 и добавьте возможность фильтрации товаров по категории или цене.-->
  <div>
    <div class="sort">
      <h2>Сортировка</h2>
      <div>
        <button @click="priceSort">По цене</button>
        <button>По категории</button>
        <select @change="sortCategor($event.target)">
          <option value="Кровать">Кровать</option>
          <option value="Стул">Стул</option>
          <option value="Стол">Стол</option>
        </select>
      </div>
    </div>
      <div v-for="product in products" :key="product.id">
          <div class="product">{{product.name}} Цена: {{product.price}} Категория: {{product.categories}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ListProducts',
    data() {
      return {
        productsTwo: [],
       products:  [
        { id: 1, name: 'Product 1', price: 99.99,categories:'Стул' },
        { id: 2, name: 'Product 2', price: 19.99,categories:'Кровать' },
        { id: 3, name: 'Product 3', price: 9.99, categories: 'Стул'},
        { id: 4, name: 'Product 4', price: 329.99,categories:'Кровать' },
        { id: 5, name: 'Product 5', price: 49.9,categories: 'Стол' },
        { id: 6, name: 'Product 6', price: 120.99,categories: 'Стол' },
      ],
     }
    },
  methods: {
    priceSort() {
      this.products.sort((a,b) =>  a.price - b.price)
    },
    sortCategor(target) {

      this.products = this.products.filter(product => product.categories === target.value)

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  padding: 20px;
  border: 1px solid palegoldenrod;
  text-align: start;
}
.sort {
  text-align: start;
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  margin-left: 10px;
  background: none;
  border: 1px solid palegoldenrod;
}
</style>
