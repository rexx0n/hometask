<template>
  <div>
      <form @submit.prevent>
          <div>
              <p>{{info.EmailText}}</p>
              <input placeholder="email" v-model="info.email" type="email">
          </div>

          <div>
              <p v-if="info.bool">{{info.PasswordText}}</p>
              <input placeholder="password" v-model="info.password" type="password">
          </div>
          <button @click="onClick">зарегистрироваться</button>
      </form>
  </div>
</template>

<script setup>

import {reactive} from "vue";
const info = reactive({
    PasswordText:'',
    bool:false,
    email:'',
    password: '',
    EmailText:'',
})

function onClick() {
    if(info.email.length === 0) {
        info.EmailText = 'Заполните поле email'
    }
    if (info.email.length < 5) {
        info.EmailText = 'Заполните поле email до конца'
    }
  if(info.password.length < 5) {
      info.PasswordText = 'Пароль должен содержать больше 5 символов'
      info.bool = true
  }
  else if( info.password.length > 5) {
      info.PasswordText = ''
  }
   if (info.email.length > 5) {
      info.EmailText = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    font-size: 12px;
    color: red;
}
form {
    border-radius: 20px;
    padding: 20px;
    background: rgba(16, 34, 52, 0.07);
    gap: 20px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
}
input {
    width: 300px;
    padding: 8px;
    border-radius: 20px;
}
button {
    background: #ef8f8f;
    color: white;
    border-radius: 20px;
    padding: 8px;
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
