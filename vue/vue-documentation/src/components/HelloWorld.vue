<template>
  <h1>{{ msg }}</h1>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'

defineProps({
    msg: String,
})
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

console.log(publishedBooksMessage.value)

</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
