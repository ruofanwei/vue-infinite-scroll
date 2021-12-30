<template>
  <div class="relative flex justify-center items-center p-5 border-2 rounded-lg border-cyan-500">
    <div class="overflow-hidden text-center">
      <p v-if="!error" class="text-center text-lg text-cyan-500 " data-test="text">
        結帳總金額 <span  class="text-7xl text-blue-300">$100</span>
      </p>
      <div class="flex space-x-0 text-neutral-400" >現金 {{text}} </div>
      <div class="flex space-x-0 text-neutral-400">找零金額 0</div>
      <button class="inline-block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-cyan-500 rounded shadow ripple hover:shadow-lg hover:bg-cyan-500 focus:outline-none" >立即結帳</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Screen",
  props: {
    text: { type: String, default: "" },
    error: { type: Boolean, default: false },
  },
});
</script>