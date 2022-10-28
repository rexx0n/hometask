<template>
  <div class="flex">
    <div class="img">
      <img
        v-if="isCatVisible"
        :class="imgFiltres"
        :style="imgStyles"
        src="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp"
        alt=""
      />
      <p v-else>Кот скоро вернется</p>
    </div>
    <div class="controls">
      <h1>Cat</h1>
      <button @click="isCatVisible = !isCatVisible">Показать / спрятать</button>
      <button
        @click="imgFiltres.sepia = !imgFiltres.sepia"
        type="button"
        :class="imgFiltres.sepia ? 'active' : ''"
      >
        сепия
      </button>
      <button
        @click="imgFiltres.shadow = !imgFiltres.shadow"
        type="button"
        :class="imgFiltres.shadow ? 'active' : ''"
      >
        Тень
      </button>
      <button
        @click="imgFiltres.border = !imgFiltres.border"
        type="button"
        :class="imgFiltres.border ? 'active' : ''"
      >
        рамка
      </button>
      <button
        :class="imgFiltres.small ? 'active' : ''"
        @click="imgFiltres.small = !imgFiltres.small"
        type="button"
      >
        Уменьшить
      </button>
    </div>
    <label>
      Ширина: {{ imgSizes.currentWidth }}
      <input
        type="range"
        :min="imgSizes.minWidth"
        :max="imgSizes.maxWidth"
        :value="imgSizes.currentWidth"
        @input="imgSizes.currentWidth = $event.target.value"
      />
    </label>
    <label>
      Высота: {{ imgSizes.currentHeight }}
      <input
        type="range"
        :min="imgSizes.minHeight"
        :max="imgSizes.maxHeight"
        :value="imgSizes.currentHeight"
        @input="imgSizes.currentHeight = $event.target.value"
      />
    </label>
    <label>
      Угол: {{imgSizes.currentRotate}}
      <input type="range" :min="imgSizes.minRotate" :max="imgSizes.maxRotate" :value="imgSizes.currentRotate" @input="imgSizes.currentRotate = $event.target.value"/>
    </label>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "PhotoRedactor",
  data() {
    return {
      isCatVisible: true,
      imgFiltres: {
        sepia: false,
        border: false,
        small: false,
        shadow:false,
      },
      imgSizes: {
        maxWidth: 680,
        maxHeight: 480,
        currentWidth: 680,
        currentHeight: 480,
        minRotate: 0,
        maxRotate: 360,
        currentRotate: 0,
      },
    };
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
        transform: `rotate(${this.imgSizes.currentRotate}deg)`
      };
    },
  },
};
console.log(computed);
</script>

<style>
.flex {
  display: flex;
}
.active {
  background-color: #dbdbdb;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 500px;
}
.sepia {
  filter: sepia(100%);
}
.border {
  border: 5px dashed #464646;
}
.small {
  width: 400px;
}
.shadow {
  box-shadow: #2c3e50 1px 1px 1px;
}
</style>
