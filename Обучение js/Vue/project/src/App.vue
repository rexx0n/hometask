<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list 
    @remove="removePost"
    :posts="posts" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "Описание поста" },
        { id: 2, title: "JavaScript", body: "Описание поста2" },
        { id: 3, title: "JavaScript", body: "Описание поста3" },
        { id: 4, title: "JavaScript", body: "Описание поста4" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      console.log(post)
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>