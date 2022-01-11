<template>
  <section class="h-fit z-50">
       <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">篩選條件</h2>
       <form>
           <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
               <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">會員手機</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">訂單編號</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                 <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">服務人員</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                 <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">時間</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
            </div>
           </form>
  </section>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'FilterForm',
})
</script>

