<template>
  <div class="bg-sub h-full w-[300px] flex flex-col justify-between">
    <!-- Cart header -->
    <div
      class="text-center p-5 bg-primary text-white flex-none font-mono text-3xl"
    >
      Cart
    </div>

    <!-- Cart footer -->
    <div>
      <section
        class="
          bg-light
          text-primary
          flex flex-none
          justify-around
          py-5
          border-white border-b-2
        "
      >
        <div>總數:{{ totalAmount }}</div>
        <div>時間:{{ totalDuration }}分鐘</div>
        <div>總額:{{ totalPrice }}</div>
      </section>
      <section class="bg-light flex flex-none p-3 justify-around">
        <Button
          type="button"
          active="transparent"
          class="border-primary border-2 text-primary whitespace-nowrap"
          >開始服務</Button
        >
        <Button
          type="button"
          rounded="lg"
          bg="primary"
          class="w-2/5 text-white"
          @click="exampleModalShowing = true"
          >結帳</Button
        >
        <CardModal :showing="exampleModalShowing">
          <Calculator/>
        </CardModal>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'
import CardModal from './CardModal.vue'
import Calculator from './Calculator.vue'
export default defineComponent({
  name: 'Cart',
  components: { Button, CardModal ,Calculator},
  data() {
    return { exampleModalShowing: false }
  },
})
</script >

