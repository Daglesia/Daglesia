<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useMenuStore()
const { activeElement, isItemHovered, menuHidden } = storeToRefs(store)

const backgroundStyle = computed(() => {
  const offset = 40 + 10 * activeElement.value
  const opacity = menuHidden.value ? 'opacity: 0.1;' : ''

  return `background-position: center ${offset}%;${opacity}`
})
const hoverStyle = computed(() => (isItemHovered.value ? 'itemHovered' : ''))
</script>

<template>
  <div :style="backgroundStyle" :class="hoverStyle"></div>
</template>

<style scoped lang="scss">
.itemHovered {
  background-size: 100vmax;
  opacity: 0.2;
}

div {
  background-image: url('/menu.jpg');
  background-position: center 40%;
  height: 100%;
  left: 0px;
  opacity: 0.3;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
  width: 100%;
  z-index: -1;
}

@media only screen and (orientation: landscape) {
  div {
    background-size: 110vmax;
  }
}
@media only screen and (orientation: portrait) {
  div {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
