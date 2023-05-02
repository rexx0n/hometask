<template>
  <div>
      <h1>Hello {{props.foo}}</h1>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps([
    'foo'
])
console.log(props.foo)
</script>

<style scoped>

</style>