<template>
  <div
    class="
      max-w-xs
      mx-auto
      overflow-hidden
      bg-white
      rounded-lg
      shadow-lg
      dark:bg-gray-800
      h-fit
    "
  >
    <div class="px-4 py-2">
      <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
        first
      </h1>

    </div>

    <img
      class="object-cover w-full h-48 mt-2"
      src="https://images.unsplash.com/photo-1635972904366-3fb9ac369ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
      alt="NIKE AIR"
    />

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-lg font-bold text-white">$129</h1>
      <button
        class="
          px-2
          py-1
          text-xs
          font-semibold
          text-gray-900
          uppercase
          transition-colors
          duration-200
          transform
          bg-white
          rounded
          hover:bg-gray-200
          focus:bg-gray-400 focus:outline-none
        "
      >
        Add to cart
      </button>
    </div>
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