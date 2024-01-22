<template>
    <form action="" @submit.prevent="addTask">
        <input v-model="contentNewTask" type="text" placeholder="task">
    </form>
    <AddButton @click="addTask"></AddButton>
    <ul>
        <li v-for="task in tasks" :class="{completes: task.complete, noComplete: !task.complete}">
            {{task.content}}
            <button @click="task.complete = true">Complete</button>
            <button @click="deleteTask(task.id)">delete</button>
        </li>

    </ul>
</template>

<script setup>
  import {ref} from "vue";
  import AddButton from "./AddButton.vue";

  let contentNewTask = ref()
  let tasks = ref([
      {id:0, content:'Complete sosososo', complete:false},
      {id:1, content:'Complete sosososo',complete:false},
      {id:2, content:'Complete sosososo', complete:false},
  ])

  function deleteTask(id) {
      let res = tasks.value.find((value)=> {
          return value.id === id
      })
      tasks.value.splice(tasks.value.indexOf(res), 1)
  }
  function addTask() {
      tasks.value.unshift({id:tasks.value.length,content: contentNewTask.value, complete:false })
  }
</script>

<style scoped>
.completes {
    color: lightgreen;
}
.noComplete {
    color: red;
}
ul {
    width: 600px;
    list-style-type: none;
}
li {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid silver;
}
</style>
