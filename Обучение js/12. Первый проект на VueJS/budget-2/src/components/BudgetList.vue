<template>
  <div class="budget-list-wrap">
    <el-dialog
        title="Tips"
        v-if="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
    </el-dialog>
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem @deleteItem="onDeleteItem" :list="list"></BudgetListItem>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>
  </div>
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
      type: Object,
      default: () => ({}),
    },
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
    }
  },
  methods: {
    confirm() {
      return window.confirm('Вы уверены, что хотите удалить?')
    },
    onDeleteItem(id) {
      if (this.handleClose()) {
        this.$delete(this.list, id)
      }
    },
    handleClose() {
      return   this.$confirm('Are you sure to close this dialog?')
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


</style>
