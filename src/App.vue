<template>

  <div class="flex w-screen justify-between bg-gray-100 h-screen">
  <Aside/>

  <Cart/>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
//import Calculator from "./components/Calculator.vue"
import Aside from "./components/Aside.vue"
import Cart from "./components/Cart.vue"
export default defineComponent({
  name: 'App',
  components: {
    Aside,
    Cart,
  },
})
</script>