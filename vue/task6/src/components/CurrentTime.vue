<template>
<!--  Отображение текущего времени и даты: Создайте компонент для отображения
текущего времени и даты, используя Vue.js, и обновляйте его в режиме реального времени с помощью функции setInterval.-->
  <div>
      <h1>Текущее время: {{time}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CurrentTime',
  data() {
    return {
      time:'',
    }
  },
  mounted() {
    this.getCurrentTime()
  },
  methods: {
    getCurrentTime() {
      setInterval(() => {
        const date = new Date();
        this.time = date.toLocaleTimeString();
      }, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
