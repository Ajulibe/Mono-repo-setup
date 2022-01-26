<template>
  <div class="flex justify-center flex-col border-red-700">
    <PostCategories />
    <RecentPosts msg="Welcome" />
    <AllPosts />
  </div>
</template>

<script setup lang="ts">
import RecentPosts from './components/RecentPosts.vue'
import AllPosts from './components/AllPosts.vue'
import PostCategories from './components/PostCategories.vue'
</script>
