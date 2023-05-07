<template>
  <!-- Создайте простое приложение "Список задач", которое позволяет пользователю добавлять, редактировать и удалять задачи.
Для этого вы можете использовать компоненты Vue.js для отображения списка задач и формы для добавления новой задачи.
 Также можно использовать Vuex для управления состоянием приложения, таким как список задач.-->
  <div>
      <form @submit.prevent action="">
          <input v-model="newTaskTitle" placeholder="title" type="text">
          <input v-model="newTaskInfo" placeholder="info" type="text">
          <button @click="createTask">Create task</button>
      </form>
      <div v-for="task in tasks" :key="task.id">
          <div class="task">
              <div> Title: {{task.title}}</div>
              <div>Info: {{task.info}}</div>
              <button @click="DeleteTask(task)">Delete</button>
          </div>


      </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
let newTaskInfo = reactive('')
let newTaskTitle = reactive('')
let newTask = reactive({})
let lastTask = reactive('')
let tasks = reactive([
    {
        id:1,
        title:"some title1",
        info:'Some info1'
    },
    {
        id:2,
        title:"some title2",
        info:'Some info2'
    },
    {
        id:3,
        title:"some title3",
        info:'Some info3'
    },
    {
        id:4,
        title:"some title4",
        info:'Some info4'
    }
])

function createTask () {
    lastTask = tasks.pop()
    newTask = {
        id: lastTask.id + 1,
        title: newTaskTitle,
        info: newTaskInfo,
    }

    tasks.push(lastTask)
    tasks.push(newTask)
    newTaskTitle = ''
    newTaskInfo = ''
}

function DeleteTask(task) {
    tasks = tasks.filter(p => p.id !== task.id)
    console.log(task)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
    border: 1px solid #42b983;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
