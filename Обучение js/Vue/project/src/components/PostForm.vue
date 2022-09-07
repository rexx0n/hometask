<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
      v-bind:value="title"
      @input="title = $event.target.value"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      @input="body = $event.target.value"
      v-bind:value="body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  align-self: flex-end;
  border: 1px solid teal;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
