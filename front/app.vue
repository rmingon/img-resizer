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
import SideCard from "~/components/molecules/SideCard.vue";
import type { CSSProperties } from 'vue'

import {useParallax, useWindowSize} from '@vueuse/core'

const target = ref(null)
const parallax = reactive(useParallax(target))

const layerBase: CSSProperties = {
  position: 'absolute',
  transition: '.3s ease-out all',
}
const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px)`,
}))
const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20}px)`,
}))
const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 30}px)`,
}))
const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 40}px)`,
}))
const layer4 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 50}px) translateY(${parallax.roll * 50}px)`,
}))

</script>

<style>
  html {
    z-index: -50;
    background-color: #090723;
  }
</style>