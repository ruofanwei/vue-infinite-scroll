
<template>
  <div class="h-fit">
    <Screen :text="memory" :error="error" :payable="payable" :balance="balance"  />
    <div class="flex p-5 gap-4 items-stretch justify-center">
      <div class="grid grid-rows-3 grid-flow-col gap-4 justify-items-stretch">
        <Button
          v-for="number in ['100', '500', '1000']"
          :key="number"
          type="button"
          rounded="lg"
          bg="cyan-500"
          class="w-40 h-full text-white"
          @click="handlePlus(number)"
        >
          {{ number }}
        </Button>
      </div>
      <div class="grid grid-rows-4 grid-flow-col gap-4 justify-items-stretch ">
        <Button
          v-for="number in ['1', '5', '10','50']"
          :key="number"
          type="button"
          rounded="lg"
          bg="cyan-500"
          class="w-20 h-full text-white"
          @click="handlePlus(number)"
        >
          {{ number }}
        </Button>
      </div>
      <div
        class="
          w-50
          sm:max-w-full
          h-full
          gap-4
          auto-rows-[minmax(50px,auto)]
          grid-cols-3 grid
        "
      >
        <Button
          v-for="number in ['7', '8', '9']"
          :key="number"
          active="transparent"
          class="w-20 h-20 border-cyan-500 border-2 text-stone-500"
          @click="addDigit(number)"
        >
          {{ number }}
        </Button>

        <Button
          v-for="number in ['4', '5', '6']"
          :key="number"
          active="transparent"
          type="button"
          class="w-20 h-20 border-cyan-500 border-2 text-stone-500"
          @click="addDigit(number)"
        >
          {{ number }}
        </Button>

        <Button
          v-for="number in ['1', '2', '3']"
          :key="number"
          type="button"
          active="transparent"
          class="w-20 h-20 border-cyan-500 border-2 text-stone-500"
          @click="addDigit(number)"
        >
          {{ number }}
        </Button>

        <Button
          type="button"
          active="transparent"
          class="w-20 h-20 border-cyan-500 border-2 text-stone-500 text-xl"
          @click="handleEqual"
          >剛好</Button
        >
        <Button
          type="button"
          active="transparent"
          class="w-20 h-20 border-cyan-500 border-2 text-stone-500"
          @click="addDigit('0')"
          >0</Button
        >
        <Button
          type="button"
          active="transparent"
          class="w-20 h-20 border-cyan-500 border-2"
          @click="clear"
          ><svg
            width="382"
            height="246"
            viewBox="0 0 382 246"
            fill="none"
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120.262 15H357C362.523 15 367 19.4772 367 25V221C367 226.523 362.523 231 357 231H120.501C117.614 231 114.868 229.752 112.969 227.578L25.8924 127.876C22.5617 124.062 22.607 118.361 25.9978 114.601L112.836 18.3031C114.732 16.2003 117.431 15 120.262 15Z"
              stroke="#78716C"
              stroke-width="30"
            />
            <line
              x1="15"
              y1="-15"
              x2="174.014"
              y2="-15"
              transform="matrix(-0.809399 0.587259 -0.538547 -0.842596 300.344 56)"
              stroke="#78716C"
              stroke-width="30"
              stroke-linecap="round"
            />
            <path
              d="M168.52 80.5268L291.897 174.5"
              stroke="#78716C"
              stroke-width="30"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted,onUpdated } from 'vue'
import Screen from './Screen.vue'
import Button from './Button.vue'
import {
  DIGITS,
  ERASE_KEYS,
  CLEAR_KEYS,
} from '../constants/calculatorData'
import { useCalculate } from '../compositions/useCalculate'
import { useKeyboard } from '../compositions/useKeyboard'
export default defineComponent({
  name: 'Calculator',
  components: { Screen, Button },

  setup: () => {
    const calculate = useCalculate()
    const keyboard = useKeyboard()

    onMounted(() => {
      keyboard.addListener((e) => {
        const key = e.key === ',' ? '.' : e.key
        if (DIGITS.includes(key)) calculate.addDigit(key)
        if (CLEAR_KEYS.includes(key)) calculate.clear()
        if (ERASE_KEYS.includes(key)) calculate.eraseLast()
      })
    })
    onUpdated(() => {
      calculate.calculateResult()
    })
    onBeforeUnmount(() => {
      keyboard.removeAllListeners()
    })


    return { ...calculate,  }
  },
})
</script>
<style scoped>
</style>