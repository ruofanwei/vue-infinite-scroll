<template>
  <div class="flex w-screen bg-gray-100 h-screen">
    <Aside />
    <div class="w-full ">
      <section class="p-5">
        <Button
          v-if="selectMultiToCart === true"
          type="button"
          variant="primary"
          class="whitespace-nowrap mr-10"
          @click="confirmMultiToCart"
          >確認</Button
        >
        <Button
          v-if="selectMultiToCart === true"
          type="button"
          variant="primary"
          class="whitespace-nowrap mr-10"
          @click="selectMultiToCart = false"
          >取消</Button
        >
        <Button
          v-if="selectMultiToCart === false"
          type="button"
          variant="primary"
          class="whitespace-nowrap mr-10"
          @click="selectMultiToCart = true"
          >合併進車</Button
        >
        <Button
          type="button"
          variant="primary"
          class="whitespace-nowrap"
          >篩選條件</Button
        >

      </section>
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
          :class="selectMultiToCart && 'selecting'"
          @click="addToCart(product.id)"
          >{{ product.id }}</BookingCard
        >
      </div>
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
  data() {
    return {
      selectMultiToCart: false,
    }
  },

  methods: {
    addToCart(id: number) {
      if (!this.selectMultiToCart) {
        store.commit('addToCart', id)
        router.push('Menu')
      } else if (this.selectMultiToCart) {
        store.commit('addToCart', id)
      }
    },
    confirmMultiToCart() {
      router.push('Menu')
    },
  },
})
</script>
<style lang="postcss" scoped>
  .selecting {
    /* cubic-bezier - the Speed Curve of the Animation */
    /* both - the fill-mode For an Animation */
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>