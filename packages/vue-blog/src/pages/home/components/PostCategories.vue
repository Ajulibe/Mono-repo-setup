<template>
  <div class="flex justify-around flex-row items-center w-full overflow-scroll mt-16">
    <div
      v-for="item in state.categories"
      :key="item.name"
      class="w-[6rem] h-[6rem] rounded-full border-2 border-[#00C99C] flex justify-center items-center border-dotted"
    >
      <div class="w-[5rem] h-[5rem] rounded-full bg-slate-500 flex justify-center items-center">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'

interface CategoriesState {
  name: number
}
interface CmpState {
  categories: CategoriesState[]
}

const state = reactive<CmpState>({
  categories: [{ name: 1 }, { name: 2 }],
})

onMounted(() => {
  state.categories = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
  ]
})
</script>
