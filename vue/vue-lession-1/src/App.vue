<template>
  <div>
    <h1>{{ getFullName }}</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ getFullsName(user) }}
      </li>
    </ul>
    <button type="button" @click="currentPage--">Пред.</button>
    <button
      v-for="page in pages"
      :key="page"
      type="button"
      @click="currentPage = page"
    >
      {{ page }}
    </button>
    <button type="button" @click="currentPage++">След.</button>
    <p>Страница {{ currentPage }} Из {{ pages }}</p>
    <!-- дз
     реализовать вывод список имен и поиск по ним
     вывод через v-for поиск через computed -->
    <div>
      <input
        @input="searchText = $event.target.value"
        type="text"
      />
      <ul>
        <li v-for="(name, index) in getFilteredNames" :key="index">
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "userCard",
  data() {
    return {
      firstName: "Игнатий",
      secondName: "Иларионович",
      lasName: "Богатов",
      users: [
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lasName: "Богатов",
        },
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lasName: "Богатов",
        },
      ],
      pages: 3,
      currentPage: 1,
      searchText: '',
      names: ["Василий","Петр","Данил","Григорий"],
    };
  },
  computed: {
    getFilteredNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
    },
    getFullName() {
      return `${this.firstName} ${this.secondName} ${this.lasName}`.toUpperCase();
    },
  },
  methods: {
    getFullsName(user) {
      return `${user.firstName} ${user.secondName} ${user.lasName}`;
    },
    loadUsers(page) {
      console.log(`Загрузка пользователей страница ${page}`);
    },
  },
  watch: {
    currentPage(newValue) {
      this.loadUsers(newValue);
    },
  },
};
console.log(computed);
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
