<template>
  <p class="text-white">
    {{ props.label }}
  </p>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string,
  }>()
</script>

<style scoped>

</style>