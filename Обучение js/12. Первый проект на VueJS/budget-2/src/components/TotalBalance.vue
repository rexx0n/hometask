<template>
  <div class="total-value" :class="{'green': total > 0,'black': total === 0, 'red': total < 0 }">
    Balance: {{total}}
  </div>
</template>

<script>
export default {
name : 'TotalBalance',
props: {
    total: {
        type:Number,
        default: 0
    }
}
}
</script>

<style>
.total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
}
.green {
  color: green;
}
.black {
  color: black;
}
.red {
  color: red;
}
</style>