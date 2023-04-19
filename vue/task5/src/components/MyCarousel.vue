<template>
<!--  Создание слайдера изображений:
 Создайте компонент для отображения слайдера изображений, используя Vue.js,
  и добавьте возможность переключения между изображениями с помощью кнопок или автоматически через определенный интервал времени.-->
  <div>
    <div class="carousel">
        <button @click="MoveLeft">
          ←
        </button>
      <div class="overflow">
        <div :style="{ transform: `translateX( ${count + 'px'})`, }" class="images">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1644903894_1-kartinkin-net-p-kartinki-na-fon-1.jpg" alt="">
        </div>
      </div>
          <button @click="MoveRight">
            →
          </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCarousel',
  data() {
    return {
    count: -476,
    }
  },
  mounted() {
         setTimeout(()=> {
          this.MoveRight()
        },10000)
  },
  methods: {
    MoveRight() {
      if (this.count <= -970 ) {
        this.count = -18
        return
      }
      this.count = this.count - 494
    },
    MoveLeft() {
      if (this.count >= -18) {
        this.count = -970
        return
      }
      this.count = this.count + 494
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
img {
  width: 300px;
  margin-left: 10px;
  margin-right: 10px;
}
.images{
  width: 1920px;
  transition: 1.4s;
}
.overflow {
  overflow: hidden;
  width: 940px;
}
.carousel {
  display: flex;
  align-items: center;
}
button {
  background: purple;
  color: white;
  padding: 20px;
}
</style>
