<template>
  <div class="text-6xl text-white ml-6">
    Resize your image in all FORMAT
  </div>
  <div class="bg-white rounded ml-6 w-full mt-4 py-3 px-3" ref="dropZoneRef" >
    <div class="px-3 py-3 border-dashed border-2 rounded" :class="isOverDropZone ? 'bg-green' : 'border-midnight'">
      <h2>Files to Upload (Drag them over)</h2>
    </div>
    <div class="flex items-center justify-center space-x-1"  v-for="(file, i) in files" :key="i">
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
      <div class="ml-4 flex items-center">
        <div>
          <h5>Protect :</h5>
        </div>
        <div class="flex">
          <input type="text">
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex">
          <checkbox @changed="changed" title="Keep it for me"></checkbox>
        </div>
        <div class="ml-6" v-if="keep_it">
          <h5>We will just give you links for your images</h5>
        </div>
      </div>
      <button @click="upload" class="px-3 py-1 bg-midnight mt-2 rounded text-xl text-white hover:bg-midnight/75 active:bg-black">GO !!!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "~/components/atoms/Checkbox.vue";

const keep_it = ref(false)
const files = ref<File[]>([])

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(filesDroped: File[] | null) {
  files.value = filesDroped || []
}

const changed = (ev : any) => {
  keep_it.value = ev
}

const upload = () => {
  var data = new FormData()
  data.append('file', files.value[0])
  fetch('http://127.0.0.1:3001/files/upload', {
    method: 'POST',
    body: data
  })
}

const removeFile = (index: number) => {
  console.log(index)
  delete files.value[index]
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

</script>

<style scoped>

</style>