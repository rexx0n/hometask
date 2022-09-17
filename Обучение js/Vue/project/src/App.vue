<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select 
      v-model="selectedSord"
      :options="sortOptions"
       />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list v-if="!isPostsLoading" @remove="removePost" :posts="posts" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {value: 'title', name:"По названию"},
        {value: 'body', name:"По описанию"}
      ]
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
      console.log(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        this.isPostsLoading = false;
      } catch (e) {
        alert("Ошибка");
      } finally {
      }
    },
  },
  mounted() {
    this.fetchPost();
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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
