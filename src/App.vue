<template>

  <div class="flex w-screen justify-between bg-gray-100 h-screen">
  <Aside/>
  <BookingCard/>

  <Cart/>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
//import Calculator from "./components/Calculator.vue"
import Aside from "./components/Aside.vue"
import Cart from "./components/Cart.vue"
import BookingCard from "./components/BookingCard.vue"
export default defineComponent({
  name: 'App',
  components: {
    Aside,
    Cart,
    BookingCard,
  },
})
</script>