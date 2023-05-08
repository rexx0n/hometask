<template>
  <!--  Создание слайдера изображений:
Создайте компонент для отображения слайдера изображений, используя Vue.js,
и добавьте возможность переключения между изображениями с помощью кнопок или автоматически через определенный интервал времени.-->
  <div>
      <div class="carousel">
          <button>
              ←
          </button>
          <div>
              <div>
                  <img src="" alt="">
                  <img src="" alt="">
                  <img src="" alt="">
                  <img src="" alt="">
                  <img src="" alt="">
              </div>
          </div>
          <button>

          </button>
      </div>
  </div>
</template>

<script setup>


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
