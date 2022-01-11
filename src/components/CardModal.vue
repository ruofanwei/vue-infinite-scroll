<template>
  <div
    v-if="showing"
    class="
      fixed
      inset-0
      w-full
      h-screen
      flex
      items-center
      justify-center
      bg-light/50

    "
  >
    <div :class="classes" class="absolute bg-light text-white shadow-lg rounded-lg p-8">
      <button
        aria-label="close"
        type="button"
        class="close absolute top-0 right-0 text-6xl text-primary "
        @click="$emit('close')"
      >
        ×
      </button>
       <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

type IVariant = "top" | "right" | "left" | "middle" | "bottom";

type IVariantsClasses = {
  // eslint-disable-next-line no-unused-vars
  [key in IVariant]: string;
};

export default defineComponent({
  name: 'CardModal',
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    variant: { type: String as PropType<IVariant>, default: "middle" },
  },
  emits: ['close'],
  setup(props) {
    const variantsClasses: IVariantsClasses = {
      top: "inset-x-0 top-0",
      right: "inset-y-0 right-0",
      left: "inset-y-0 left-0",
      bottom: "inset-x-0 bottom-0",
      middle:"",
    };
    return { classes: variantsClasses[props.variant] };
  }


})
</script>

<style>
</style>