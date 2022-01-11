<template>
  <div class="flex w-screen bg-gray-100 h-screen">
    <Aside />

    <div
      class="
        grid grid-rows-3 grid-flow-col
        gap-4
        justify-items-stretch
        h-fit
        p-5
      "
    >
      <BookingCardSkeleton v-for="n in 15" v-show="!loaded" :key="n" />
      <BookingCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="addToCart(product.id)"
        >{{ product.id }}</BookingCard
      >
      <Button type="button" variant="primary" class="whitespace-nowrap"
      >合併進車</Button
    >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useGetters, useActions } from 'vuex-composition-helpers'
import Button from '../components/Button.vue'
import { router } from '../main'
import Aside from '../components/Aside.vue'
import BookingCard from '../components/BookingCard.vue'
import BookingCardSkeleton from '../components/BookingCardSkeleton.vue'
import store from '../store/index'

export default defineComponent({
  name: 'Home',
  components: {
    Button,
    Aside,
    BookingCard,
    BookingCardSkeleton,
  },
  setup: () => {
    const { fetchAll } = useActions(['fetchAll'])
    const { products, loaded } = useGetters(['products', 'loaded'])

    onMounted(async () => {
      await fetchAll()
    })
    return {
      products,
      loaded,
    }
  },

  methods: {
    addToCart(id: number) {
      store.commit('addToCart', id)
      router.push('Menu')
    },
  },
})
</script>