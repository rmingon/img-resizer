<template>
  <div class="flex justify-between items-center py-3 w-full px-3">
    <div class="text-gray-50"> <!-- LOGO -->
      RESIZOR
    </div>
    <div class="flex text-white bg-white h-10 items-center rounded-3xl flex-between px-1 py-1 space-x-2">
      <div>
        <img src="@/assets/flag/fr.png" alt="" class="object-cover w-7 h-7 rounded-full ">
      </div>
      <div>
        <select class="text-black w-12" v-model="lang">
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </div>
      <div class="bg-[#FE385C] rounded-2xl h-full cursor-pointer text-[14px] flex items-center justify-center w-20 hover:bg-[#FE637E] active:bg-[#FC002D] transition duration-150 select-none ">
        SingUp
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TopbarLink from "~/components/molecules/TopbarLink.vue";

const lang = ref("")

</script>

<style scoped>

</style>