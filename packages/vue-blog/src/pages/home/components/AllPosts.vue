<template>
  <div class="flex flex-col justify-center w-full">
    <p class="font-heading md:text-tiny mb-[2.5rem]">Latest Article</p>
    <div class="wrapper">
      <div v-for="item in posts" :key="item.posts" class="col-span-1 flex flex-col w-[296px]">
        <div class="h-[184px] w-full bg-slate-600"></div>

        <div class="flex flex-col">
          <div
            class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading text-left h-24 text-ellipsis overflow-hidden"
          >
            {{ item.title }}
          </div>

          <div class="font-heading text-[0.9rem] md:text-xs font-body mb-8 text-left">
            {{ item.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'AllPosts',
  data() {
    return { posts: [] }
  },

  mounted() {
    this.getAllPosts()
  },

  methods: {
    getAllPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => (this.posts = response.data))
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  justify-items: center;
}
</style>
