<template>
  <div class="flex justify-center flex-col">
    <PostCategories />
    <RecentPosts msg="Welcome" />
    <AllPosts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RecentPosts from './components/RecentPosts.vue'
import AllPosts from './components/AllPosts.vue'
import PostCategories from './components/PostCategories.vue'

export default defineComponent({
  name: 'HomePage',
  components: { RecentPosts, AllPosts, PostCategories },
})
</script>
