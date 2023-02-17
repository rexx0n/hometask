<template>
  <div>
    <div class="list-item">
      <i :class="classObject" ></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="$emit('deleteItem',item.id)">delete</ElButton>
    </div>
  </div>

</template>

<script>

  export default  {
    name:'BudgetListItem',
    props: {
      item: {
        type: Object,
      },
    },
    computed: {
      classObject() {
        return {
          'el-icon-top': this.item.type === 'INCOME',
          'el-icon-bottom': this.item.type === 'OUTCOME'
        }
      }
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