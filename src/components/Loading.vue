<template>
  <div class="border-t-primary loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "Loading",
});
</script>
<style scoped>
.loader {
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}
@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>