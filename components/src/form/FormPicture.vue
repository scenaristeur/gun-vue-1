<script setup>
import { ref, watch, computed } from 'vue'

import { usePictureUpload } from '@composables'

const props = defineProps({
  field: { type: String, default: 'cover' },
  options: {
    type: Object, default: {
      picSize: 800,
      preserveRatio: true
    }
  }
})

const emit = defineEmits(['update'])

const id = computed(() => `${props.field}_upload`)
const add = ref(false)
const picture = ref()

const { state, handleChange } = usePictureUpload(props.options)

watch(() => state.output, file => {
  if (file?.content) {
    add.value = true
    picture.value = file.content
  }
})

watch(picture, pic => {
  emit('update', pic)
})


</script>

<template lang='pug'>
.flex.flex-wrap
  input.hidden(type="file" v-if="!picture" :id="id"  @change="handleChange" accept="image/*")
  label.m-1.button.cursor-pointer(@click="add = true" :class="{ active: picture }" :for="id")
    slot
      la-image
  ui-layer.max-h-60vh.mt-20(:open="add" @close="add = false")
    button.button.fixed.text-2xl.opacity-40.hover_opacity-100.m-4
      la-check(@click="add = false")
    button.button.fixed.text-2xl.opacity-40.hover_opacity-100.mt-4.ml-18
      la-trash-alt(@click="picture = null; add = false")
    img(:src="picture")
</template>

<style lang="postcss" scoped>
input {
  @apply p-2 rounded-xl m-1;
}

.button.active {
  @apply bg-fuchsia-800;
}
</style>