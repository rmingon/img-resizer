<template>
  <div class="absolute min-h-screen w-full bg-black/75">
    <div class="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-xl px-3 py-1">
      <header class="flex justify-between text-2xl">
        <slot name="header" class="">
          This is the default title!
        </slot>
        <button
            type="button"
            class="btn-close"
            @click="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke="#dedede" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l6 6m0-6l-6 6"/></svg>
        </button>
      </header>

      <section class="text-xl">
        <slot name="body">
          This is the default body!
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        <button
            type="button"
            class="btn-green"
            @click="close"
        >
          {{props.closeBtnLabel}}
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  closeBtnLabel: string
}

const emit = defineEmits(['close'])

const props = withDefaults(defineProps<Props>(), {
  closeBtnLabel: 'Close'
});

const close = () => {
  emit('close');
}

</script>