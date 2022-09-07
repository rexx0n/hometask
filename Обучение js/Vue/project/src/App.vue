<template>
  <div>
    <div>
      <button @:click="addLike">like</button>
      <button @click="addDislike">dislike</button>
    </div>
  </div>
  <div>
    Кол-во лайков: <strong>{{ likes }}</strong>
  </div>
  <div>
    Кол-во дизлайков: <strong>{{ dislikes }}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style></style>