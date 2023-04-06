<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

const store = useMenuStore()
const handleMenuButtonClick = (): void => {
  store.setMenuHidden(false)
}
const { menuHidden } = storeToRefs(store)
</script>

<template>
  <nav>
    <transition name="slide-vertical">
      <button v-if="menuHidden" @click="handleMenuButtonClick">
        <font-awesome-icon icon="fa-solid fa-house" />
      </button>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/transitions.scss';
nav {
  position: absolute;
  top: 2vmax;
  left: 3vmax;
  font-size: 1.4em;
  overflow: hidden;
}

h2 {
  position: relative;
  margin: 0;
}

svg {
  transition: all 0.5s ease;
}

button {
  all: unset;
  cursor: pointer;
  position: relative;
  top: 0;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.3em;
  padding: 0.3em;
}

button:hover > svg {
  color: var(--color-accent);
}
</style>
