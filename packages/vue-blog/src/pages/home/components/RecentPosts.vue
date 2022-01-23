<template>
  <div class="wrapper grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0 mt-[40px] md:min-h-screen">
    <div class="col-span-1 flex flex-col">
      <div class="h-[184px] w-full bg-slate-600"></div>

      <div class="flex flex-col">
        <div class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading px-2">
          20 Of The Best Songs Released In February
        </div>
        <div class="text-[0.9rem] md:text-xs font-heading px-2">by Shoo Phar Mhien</div>
      </div>
    </div>

    <div class="md:row-span-2 md:col-span-2 col-span-1 mt-6 md:mt-0">
      <div class="h-[184px] flex md:h-[25rem] bg-slate-600"></div>

      <div class="flex flex-col justify-center">
        <div class="text-[1.2rem] md:text-tiny font-heading px-2 mt-8 mb-6">
          TikTok Made Me Buy It Products You Shouldn't Sleep On
        </div>

        <div class="text-[0.9rem] md:text-xs font-body px-2 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis quis amet pellentesque
          arcu, tincidunt.
        </div>
        <div class="text-xs font-heading px-2 flex justify-center items-center">
          <div class="rounded-full bg-slate-600 h-[40px] w-[40px]"></div>
          <div class="ml-4">by Shoo Phar Mhien</div>
        </div>
      </div>
    </div>

    <div class="col-span-1 flex flex-col mt-6 md:mt-0">
      <div class="h-[184px] w-full bg-slate-600"></div>

      <div class="flex flex-col">
        <div class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading px-2">
          20 Of The Best Songs Released In February
        </div>
        <div class="text-[0.9rem] md:text-xs font-heading px-2">by Shoo Phar Mhien</div>
      </div>
    </div>

    <div class="col-span-1 flex flex-col mt-6 md:mt-0">
      <div class="h-[184px] w-full bg-slate-600"></div>

      <div class="flex flex-col">
        <div class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading px-2">
          20 Of The Best Songs Released In February
        </div>
        <div class="text-[0.9rem] md:text-xs font-heading px-2">by Shoo Phar Mhien</div>
      </div>
    </div>

    <div class="col-span-1 flex flex-col mt-6 md:mt-0">
      <div class="h-[184px] w-full bg-slate-600"></div>

      <div class="flex flex-col">
        <div class="mt-8 mb-4 text-[1.2rem] md:text-sm font-heading px-2">
          20 Of The Best Songs Released In February
        </div>
        <div class="text-[0.9rem] md:text-xs font-heading px-2">by Shoo Phar Mhien</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: { type: String, default: 'Welcome!' },
  },
})
</script>
