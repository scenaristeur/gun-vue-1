<script setup>
import { reactive, ref, watchEffect, watch, computed, nextTick } from 'vue'
const add = ref()
const url = ref()
const input = ref()
const valid = ref(false)
const link = ref()

const emit = defineEmits(['update']);

watchEffect(() => {
  if (url.value) {
    valid.value = input?.value?.checkValidity()
    if (valid.value) {
      link.value = url.value
      emit('update', url.value)
    }
  }
  else {
    link.value = null
  }
})

</script>

<template lang='pug'>
.flex.flex-wrap
  button.button.m-1(@click="add = !add" :class="{ active: link }")
    la-link
  ui-layer.mt-20(:open="add" @close="add = false")
    .p-4.max-w-600px
      .flex.items-center.gap-4
        la-link.text-2xl
        .text-lg Add a link
        button.button.text-xl
          la-check(@click="add = false")
        button.button.text-xl
          la-trash-alt(@click="url = null; add = false")
      input.text-sm.p-4.my-4(ref="input" type="url" v-model="url" placeholder="Paste a URL")
</template>

<style lang="postcss" scoped>
input,
textarea {
  @apply p-2 rounded-xl m-1;
}

.active {
  @apply bg-fuchsia-500;
}
</style>