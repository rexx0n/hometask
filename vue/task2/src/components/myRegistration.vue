<template>
  <!-- Создание формы регистрации с валидацией полей: Создайте форму регистрации,
  используя компоненты Vue.js, и добавьте валидацию полей, например, проверку на
  пустые значения, соответствие формата e-mail и пароля. -->
  <div>
    <form action="registr" @submit.prevent >
      <h2>
        Регистрация
      </h2>
      <p>{{message}}</p>
      <div class="inputs">
        <input v-model="emailValue" type="email" placeholder="email">
        <input v-model="passwordValue" type="password" placeholder="password">
      </div>
      <button @click="reg">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      emailValue:'',
      passwordValue:'',
      message:'',
    }
  },
  methods: {
    reg () {
      if (this.emailValue === '' || this.passwordValue === '') {
        this.message = 'Заполните поля!'
        this.clear()
        return
      }
      if (this.passwordValue.length < 8) {
        this.message = 'Пароль должен быть больше 8 символов'
        this.clear()
        return;
      }
      if (!/[A-Z]/.test(this.passwordValue)) {
        this.message = 'В пароле должен быть один символ в верхнем регистре'
        this.clear()
        return;
      }
        alert('Вы успешно зарегестрировались')
    },
    clear() {
      setTimeout(()=> {
        this.message = ''
      }, 3500)
      this.passwordValue = ''
      this.emailValue = ''
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: white;
  font-size: 26px;
}
p {
  color: #ff0000ad;
  font-size: 20px;
}
button {
  font-size: 20px;
  padding: 10px;
  color: white;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter:blur(8px);
  border-radius: 7px;
}
form {
  margin: auto;
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius:20px ;
  border: 1px solid white;
  backdrop-filter:blur(8px);
}
input {
  max-width: 300px;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  border: none;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
