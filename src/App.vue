<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuButton from '@/components/MenuButton.vue'
import BackgroundImage from './components/BackgroundImage.vue'
import ContactComponent from './components/ContactComponent.vue'
</script>

<template>
  <div class="content">
    <RouterView />
  </div>
  <contact-component />
  <menu-button />
  <background-image />
</template>

<style scoped lang="scss">
body {
  background-color: black;
}

.content {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}
</style>
