<template>
  <div class="flex flex-col justify-center w-full border-red-100">
    <p class="font-heading md:text-tiny mb-[2.5rem]">Latest Article</p>
    <div class="wrapper border-red-500">
      <div
        v-for="(item, index) in state.posts"
        :key="index"
        class="col-span-1 flex flex-col w-[296px]"
      >
        <div class="h-[184px] w-full bg-slate-600"></div>

        <div class="flex flex-col">
          <div
            class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading text-left h-24 text-ellipsis overflow-hidden"
          >
            {{ item.node.title }}
          </div>

          <div class="text-[0.9rem] md:text-xs font-body mb-8 text-left">
            {{ item.node.excerpt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import { reactive, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_POSTS } from '@/libs/queries'

interface IComponent {
  posts: Array<Record<string, any>>
}

const state = reactive<IComponent>({
  posts: [],
})

const { result } = useQuery(GET_POSTS)

watch(result, (value) => {
  state.posts = value.postsConnection.edges
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
