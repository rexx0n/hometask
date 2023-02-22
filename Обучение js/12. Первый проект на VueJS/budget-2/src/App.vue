<template>
<div>
  <div class="budget-list-wrap">
  <Form @submitForm='onFormSubmit'/>
  <TotalBalance :total="TotalBalance"/>
  <FilterPanel @changeFilter="onChangeFilter"></FilterPanel>
  <BudgetList :list="list" :filter="filter"></BudgetList>
  </div>
</div>
  
</template>

<script>
import BudgetList from '@/components/BudgetList.vue'
import TotalBalance from '@/components/TotalBalance.vue'
import Form from '@/components/Form.vue'
import FilterPanel from "@/components/FilterPanel";
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    FilterPanel
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment:'Some comment',
          id: 1,
        },
        2: {
          type: 'OUTCOME',
          value: -50,
          comment:'Some out comment',
          id: 2,
        }
      },
      filter: 'ALL',
    }
  },
  computed: {
    TotalBalance() {
      return Object.values(this.list).reduce((acc, item)=> acc + item.value,0)
    }
  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.$set(this.list, newObj.id, newObj)
    },
    onChangeFilter(value) {
      console.log(value)
      this.filter = value
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
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
