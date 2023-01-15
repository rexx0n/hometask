<template>
  <div>
    <p>Игра крестики нолики</p>
    <button class="reset">Начать заново</button>
    <div class="ss">
      <div class="tiktok">
        <div class="tiktok__pole" id="0"></div>
        <div class="tiktok__pole" id="1"></div>
        <div class="tiktok__pole" id="2"></div>
        <div class="tiktok__pole" id="3"></div>
        <div class="tiktok__pole" id="4"></div>
        <div class="tiktok__pole" id="5"></div>
        <div class="tiktok__pole" id="6"></div>
        <div class="tiktok__pole" id="7"></div>
        <div class="tiktok__pole" id="8"></div>
      </div>
      <div class="block">
        <p></p>
      </div>
    </div>
  </div>
</template>
// при клике на поле должен появлятся крестик или нолик
<script>
export default  {
  name: 'tikTok',
  data () {
  return {
    mark:'x',
  }
  },
  methods: {
    onClick (event) {
      if (this.mark === 'x') {
        event.target.id
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0 auto;
  background-color: #7029ff;;
}
.tiktok {
  display: flex;
  width: 359px;
  height: 500px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.tiktok__pole {
  background-color: gray;
  width: 100px;
  height: 100px;
  margin-right: 13px;
  margin-bottom:26px ;
}
.tiktok__pole--tik {
  background-image: url(../assets/x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiktok__pole--tok {
  background-image: url(../assets/o.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.ss {
  display: flex;
  justify-content: center;
}
</style>