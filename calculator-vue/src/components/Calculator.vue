<template>
  <div class="calc">
  <div>${}</div>
    <div class="flex">
      <button class="lightGray">AC</button>
      <button class="lightGray">+/-</button>
      <button class="lightGray">%</button>
      <button class="marks">÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="marks">х</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="marks">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="marks">+</button>
      <button class="padding">0</button>
      <button>.</button>
      <button class="marks">=</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'сalculator',
  
}
</script>

<style scoped>
.lightGray {
  background: lightgray;
}
.flex{
  margin: 0 auto;
  display: flex;
  max-width: 215px;
  flex-wrap: wrap;
  gap: 5px;
}
.calc {
  display: flex;
  margin: 0 auto;
  background: black;
  border-radius: 20px;
  max-width: 245px;
  min-height: 500px;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 1px 1px 0px 7px grey;
  padding-bottom: 10px;

}
.marks {
  background: orange;
}
.padding {
  padding-right: 66px;
  padding-left: 23px;
}
button {
  border-radius: 50px;
  background: gray;
  min-width: 50px;
  min-height: 50px;
  font-size: 20px;
}
</style>
