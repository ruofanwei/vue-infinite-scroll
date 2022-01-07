
<template>
  <button :class="classes" class=" text-2xl rounded-lg m-auto font-medium leading-6  text-center px-4 py-2 inline-block focus:outline-none transition shadow" >
      <slot/>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

type IVariant = "primary" | "transparent";

type IVariantsClasses = {
  // eslint-disable-next-line no-unused-vars
  [key in IVariant]: string;
};

export default defineComponent({
    name: "Button",
    props: {
    variant: { type: String as PropType<IVariant>, default: "primary" },
  },
  setup(props) {
    const variantsClasses: IVariantsClasses = {
      primary: "bg-primary hover:bg-primary text-white",
      transparent: "bg-transparent hover:bg-transparent text-primary border-primary border-2",

    };
    return { classes: variantsClasses[props.variant] };
  },

})
</script>

