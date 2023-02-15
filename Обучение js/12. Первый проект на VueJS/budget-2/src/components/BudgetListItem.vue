<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="deleteItem(item.id)">delete</ElButton>
    </div>
  </div>

</template>

<script>

  export default  {
    name:'BudgetListItem',
    methods: {
      deleteItem(id) {
          this.$emit('deleteItem', id)

      }
    },
    props: {
      list: {
        type: Object,
        default: () => ({}),
      },
    },

  }
</script>

<style>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>