<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>
let props = defineProps(['id']);
console.log(props.id)
</script>

<style scoped>

</style>