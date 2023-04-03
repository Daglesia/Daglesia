<script setup lang="ts">
import { useSlots } from 'vue'

defineProps({
  delay: {
    type: String,
    required: true
  },
  isHidden: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['onTransitionEnd'])

const vVisible = {
  updated(el: HTMLStyleElement, { value, oldValue }: any, { transition }: any) {
    if (!value === !oldValue) {
      return
    }

    if (value) {
      transition.beforeEnter(el)
      el.style.visibility = ''
      transition.enter(el)
    } else {
      transition.leave(el, () => {
        el.style.visibility = 'hidden'
      })
    }
  }
}
</script>

<template>
  <div>
    <transition name="slide-vertical" @after-leave="emit('onTransitionEnd')" appear>
      <span v-visible="isHidden" :style="delay"><slot></slot></span>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/transitions.scss';

div {
  position: static;
  overflow: hidden;
}
span {
  position: relative;
  top: 0;
}
</style>
