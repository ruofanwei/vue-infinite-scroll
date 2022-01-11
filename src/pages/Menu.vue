<template>
  <div class="flex w-screen bg-gray-100 h-screen justify-between">

    <div
      class="
        grid grid-rows-3 grid-flow-col
        gap-4
        justify-items-stretch
        h-fit
        p-5
      "
    ></div>
    <Cart>
      <div class="grid grid-col-2 gap-4 m-10 h-30 overflow-scroll ">

        <BookingCard
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
          >{{ product.productId }}
          <div @click="removeProduct(product.id)">×</div>
          </BookingCard
        >
      </div>
    </Cart>
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import { useGetters } from 'vuex-composition-helpers';
import Cart from '../components/Cart.vue'
import BookingCard from '../components/BookingCard.vue'
import { usePersistCart } from '../composables/usePersistCart';
import store from '../store/index'

export default defineComponent({
  name: 'Menu',
  components: {
    Cart,
    BookingCard,

  },
  setup: () => {
    const { cartProducts } = useGetters(['cartProducts']);
    usePersistCart()


    return {
      cartProducts
    }
  },

  methods: {
    removeProduct(id: number){
      store.commit('removeProduct',id)
    }
  },
})
</script>