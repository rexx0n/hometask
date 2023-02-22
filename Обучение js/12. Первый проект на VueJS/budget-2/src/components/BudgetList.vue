<template>
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem v-for="(item, prop) in listFiltred" :key="prop" @deleteItem="onDeleteItem" :item="item"></BudgetListItem>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {
  BudgetListItem
  },
  props: {
    list: {

      default: () => ({}),
    },
    filter: {
      type: String,
      default: 'ALL'
    }
  },
  data() {
    return {
      header: "Budget List",
      emptyTitle: 'Empty List',
      dialogVisible: false
    };
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    },
    listFiltred() {
      return Object.keys(this.list)
          .filter(id => {
            console.log(this.filter)


            return this.filter === this.list[id].type || this.filter === 'ALL'
            //this.filter /INCOME OUTCOME ALL/
            //this.list[id] = item
            //                 INCOME OUTCOME ALL
            // INCOME           true  false   true
            // OUTCOME          false true    true

          })
          .reduce((obj, key) => {
            obj[key] = this.list[key];
            return obj;
          }, {});
    }
  },
  methods: {
    confirm() {
      return window.confirm('Вы уверены, что хотите удалить?')
    },
    onDeleteItem(id) {
      if (this.confirm()) {
        this.$delete(this.list, id)
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
