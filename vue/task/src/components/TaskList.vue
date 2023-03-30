<template>
  <!-- Создайте простое приложение "Список задач", которое позволяет пользователю добавлять, редактировать и удалять задачи.
   Для этого вы можете использовать компоненты Vue.js для отображения списка задач и формы для добавления новой задачи.
    Также можно использовать Vuex для управления состоянием приложения, таким как список задач.-->
  <div class="app">
    <form @submit.prevent>
      <h4>Создание задачи</h4>
      <input v-model="task.title"
             class="input"
             type="text"
             placeholder="Название задачи">
      <input
          v-model="task.body"
             class="input"
             type="text"
             placeholder="Описание">
      <button class="btn" @click="createTask">Создать</button>
    </form>
    <div>
      <button v-if="isEdit" class="btn" @click="refactor(task)">Редактировать</button>
      <button v-else class="btn" @click="save(task)">Сохранить</button>
    </div>
    <div class="task" :key="task.id" v-for="task in tasks">
      <div>
        <div>
          <strong>Название:</strong>
          <div v-if="!isEdit">
            <input type="text" class="input--refactor" @input="task.title = $event.target.value" :value="task.title">
          </div>
          <div v-else>
            {{ task.title }}
          </div>
        </div>
        <div><strong>Описание:</strong>
          <div v-if="!isEdit">
            <input type="text" class="input--refactor" @input="task.body = $event.target.value" :value="task.body">
          </div>
          <div v-else>
            {{ task.body }}
          </div>
          </div>
      </div>
      <div>
        <button @click="deleteTask(task)" class="btn">Удалить задачу</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      tasks: [
        {id: 1, title: "Some text", body: 'Описание задачи'},
        {id: 2, title: "Some text 2", body: 'Описание задачи 2'},
        {id: 3, title: "Some text 3", body: 'Описание задачи 3'},
      ],
      task: {
        title: '',
        body: '',
      },
      isEdit:true,
    }
  },
  methods: {
    save() {
      this.isEdit = true
    },
    refactor() {
      this.isEdit = false
    },
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.task.title,
        body: this.task.body,
      }
      this.tasks.push(newTask)
      this.task.title = ''
      this.task.body = ''
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(p => p.id !== task.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input--refactor {
  border: 1px solid gray;
}

.task {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  padding: 10px 15px;
  background: none;
  align-self: flex-end;
  color: teal;
  border: 1px solid teal;
}

.input {
  border: 1px solid gray;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
