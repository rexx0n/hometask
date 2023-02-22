<template>
    <el-menu default-active="3" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="$emit('change-filter','INCOME')" index="1">Приход</el-menu-item>
      <el-menu-item @click="$emit('change-filter','OUTCOME')" index="2">Расход</el-menu-item>
      <el-menu-item @click="$emit('change-filter','ALL')" index="3">Все</el-menu-item>
    </el-menu>
</template>

<script>
export default {
  methods: {
    handleSelect() {

    }
  }
}
</script>

<style scoped>

</style>