<template>
  <div class="container my-5">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">Post Details</h1>
        <h3 class="card-subtitle mb-2 text-muted text-center">{{ id }}</h3>
        <h2 class="card-title text-center">{{ post.title }}</h2>
        <p class="card-text text-center">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../../../public/Mixins/Post.js";

export default {
  name: "PostDetails",
  mixins: [Post],
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.GetPostByID();
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 40px;
}
</style>
