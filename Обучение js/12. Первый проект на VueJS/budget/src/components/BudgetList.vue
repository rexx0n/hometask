<template>
  <div class="budget-list-wrap">
    фывфывффывфывфывф
    <ElCard :header="header">
      <template v-if="!isEmpty"
        ><div class="list-item" v-for="(item, prop) in list" :key="prop">
          <span class="budget-comment">{{ item.commnet }}</span>
          <span class="budget-value">{{ item.value }}</span>
          <ElButton type="danger" size="mini">delete</ElButton>
        </div></template
      >
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      header: "Budget List",
      emptyTitle: 'Empty List'
    };
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

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
