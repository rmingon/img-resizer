<template>
  <div class="text-6xl text-white ml-6">
    RESIZE YOUR IMAGE IN ALL FORMAT
  </div>
  <div class="bg-white/75 rounded ml-6 w-full mt-4 py-3 px-3" @dragover.prevent @drop.prevent="onDrop">
    <div class="px-3 py-3 border-dashed border-2 border-midnight rounded">
      <h2>Files to Upload (Drag them over)</h2>
    </div>
    <div class="flex items-center justify-center space-x-1" v-for="(file, i) in files" :key="i">
      <span>{{file.name}}</span>
      <svg width="16" height="16" class="stroke-black cursor-pointer" @click="removeFile(i)" viewBox="0 0 24 24"><path fill="#dedede" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
    </div>
    <div class="flex flex-col justify-start">
      <div class="ml-4 items-center">
        <div class="mt-3">
          <h5>Size :</h5>
        </div>
        <div class="flex">
          <checkbox title="16x16 (favicon)"></checkbox>
          <checkbox title="40x40 (avatar)"></checkbox>
          <checkbox title="60x60 (avatar)"></checkbox>
        </div>
        <div class="flex">
          <checkbox title="120x120 (card)"></checkbox>
          <checkbox title="1920x1080 (hero)"></checkbox>
          <checkbox title="1920x1080 (card)"></checkbox>
        </div>
      </div>
      <div class="ml-4 flex items-center">
        <div>
          <h5>Format :</h5>
        </div>
        <div class="flex">
          <checkbox title="png"></checkbox>
          <checkbox title="jpg"></checkbox>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex">
          <checkbox @changed="changed" :checked="keep_it" title="Keep it for me"></checkbox>
        </div>
        <div class="ml-6" v-if="keep_it">
          <h5>We will just give you links for your images</h5>
        </div>
      </div>
      <button class="px-3 py-1 bg-midnight mt-2 rounded text-xl text-white hover:bg-midnight/75 active:bg-black">GO !!!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "~/components/atoms/Checkbox.vue";

const keep_it = ref(false)

const changed = (ev : any) => {
  keep_it.value = ev
  console.log(ev)
}

const emit = defineEmits(['files-dropped'])

const files = ref<any[]>([])

function onDrop(e: any) {
  let droppedFiles = e.dataTransfer.files;
  ([...droppedFiles]).forEach((f: any) => files.value.push(f));

  let formData = new FormData();
  files.value.forEach((f,x) => {
    formData.append('file'+(x+1), f);
  });
  console.log(files.value, formData)

}

const removeFile = (index: number) => {
  delete files.value[index]
}
</script>

<style scoped>

</style>