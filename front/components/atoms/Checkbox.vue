<template>
  <div class="flex items-center pl-3">
    <input id="vue-checkbox-list" v-model="props.checked" @click="emit('changed')" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
    <label for="vue-checkbox-list" class="w-full py-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{props.title}}</label>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['changed'])
  const props = defineProps<{
    title: string,
    checked: boolean
  }>()
</script>