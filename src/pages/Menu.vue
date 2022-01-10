<template>
   <div class="flex w-screen  bg-gray-100 h-screen">

  <div class="grid grid-rows-3 grid-flow-col gap-4 justify-items-stretch h-fit p-5 ">
  <BookingCardSkeleton v-for="n in 15" v-show="!loaded"  :key="n" />
  <BookingCard  v-for="item in products" :key="item.id"  @click="addToCart(item)">{{ item.id }}</BookingCard>
  </div>
   <Cart/>
  </div>
</template>

<script lang="ts">
import {  computed, defineComponent, onMounted } from 'vue'
import Cart from "../components/Cart.vue"
import BookingCard from "../components/BookingCard.vue"
import BookingCardSkeleton from '../components/BookingCardSkeleton.vue'
import store from '../store/index'
import ProductStore from '../store/modules/products';
import type {Product} from '../store/modules/products'

export default defineComponent({
  name: 'Menu',
  components: {
    Cart,
    BookingCard,
    BookingCardSkeleton
  },
  setup: () => {
    const products = computed(() => ProductStore.state.items)
    const loaded = computed(() => ProductStore.getters.loaded)

    onMounted( async()=>{

    })

    return{
      products,
      loaded
    }
  },
  async created(){
    await store.dispatch('fetchAll')
  },
  methods:{
    addToCart(item:Product){
      store.commit('addToCart',item)
    }
  },





})
</script>