<template>
    <form action="" @submit.prevent="addTask">
        <input v-model="contentNewTask" type="text" placeholder="task">
    </form>
    <AddButton @click="addTask"></AddButton>
        <TransitionGroup name="list" tag="ul">
        <li v-for="task in tasks" :class="{completes: task.complete, noComplete: !task.complete}">
            {{task.content}}
            <button @click="task.complete = true">Complete</button>
            <DeleteBtn :id='task.id' @click="deleteTask(task.id)">delete</DeleteBtn>
        </li>
        </TransitionGroup>
</template>

<script setup>
  import {ref} from "vue";
  import AddButton from "./AddButton.vue";
  import DeleteBtn from "./DeleteBtn.vue";

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
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
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
    transition: 500ms;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid silver;
}
</style>
