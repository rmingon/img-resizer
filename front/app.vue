<template>
  <div ref="target">
    <div class="w-full">
      <the-navbar class="z-40"></the-navbar>
    </div>
    <div class="w-1/2">
      <side-card></side-card>
    </div>
    <img :style="layer0" src="@/assets/img/boat-beach.jpg" alt="" :class="['top-1 absolute right-40 w-36 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
    <img :style="layer2" src="@/assets/img/banana.jpg" alt="" :class="[`top-3/4`, 'absolute right-16 w-32 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
    <img :style="layer1" src="@/assets/img/mountain.jpg" alt="" :class="[`top-2/3`, 'absolute right-32 w-24 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
    <img :style="layer3" src="@/assets/img/beksinski.jpg" alt="" :class="[`top-1/4`, 'absolute right-64 w-40 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
    <img :style="layer2" src="@/assets/img/giger.jpg" alt="" :class="[`top-1/3`, 'absolute right-6 w-44 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
    <img :style="layer4" src="@/assets/img/beksinski-2.jpg" alt="" :class="[`top-1/2`, 'absolute right-1/3 w-52 rounded-xl -z-10 blur-[1px] transition duration-100 hover:blur-none saturate-200']" class="``">
  </div>

</template>

<script setup lang="ts">
import TheNavbar from "~/components/organisms/TheNavbar.vue";

</script>