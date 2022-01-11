<template>
  <div
    class="
      max-w-xs
      mx-auto
      bg-white
      rounded-lg
      shadow-lg
      h-fit
      px-4 py-2
      active:bg-sub
    "
  >
      <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
        <slot/>
      </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BookingCard',

})
</script>

<style>
</style>