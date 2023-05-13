<template>
    <div>
        <div ref="width" class="slider">
            <button>
                ←
            </button>
            <div ref="sliderLine" class="slider-line">
                <img src="https://i.pinimg.com/564x/42/2b/00/422b0043dfd692f26171180414a81aac.jpg" alt="">
                <img src="https://i.pinimg.com/564x/ba/8a/7f/ba8a7f465eaafea74a481ace8bd579e2.jpg" alt="">
                <img src="https://i.pinimg.com/736x/cf/94/89/cf9489122ac4a897827254172c8dc776.jpg" alt="">
                <img src="https://i.pinimg.com/564x/24/ae/3a/24ae3a446a327998d404729123ea4be0.jpg" alt="">
                <img src="https://i.pinimg.com/564x/a2/be/10/a2be10c4f3fd21d2a117b192513f6573.jpg" alt="">
            </div>
            <button class="button-right">
                →
            </button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
// eslint-disable-next-line
let count = ref(0)
// eslint-disable-next-line
const width = ref()
const sliderLine = ref()



// eslint-disable-next-line
 function init() {



}

 onMounted(() => {
     // eslint-disable-next-line
    sliderLine.value.style.width = width*5 + 'px'
     width.value = width.value.offsetWidth
     console.log(width.value)
     console.log()
 })
// // eslint-disable-next-line
// const render = () => {
//     return h('div', []);
// };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    max-width: 500px;
    width: 100%;
    max-height: 250px;
}

.slider {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40%;
    margin: 20px auto;
    overflow: hidden;
}
.slider-line {
    display: flex;
    transition: ease 1s;
}
h3 {
  margin: 40px 0 0;
}
.button-right{
    margin: 10px;
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
