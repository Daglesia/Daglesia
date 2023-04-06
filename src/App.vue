<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuButton from '@/components/MenuButton.vue'
import BackgroundImage from './components/BackgroundImage.vue'
import ContactComponent from './components/ContactComponent.vue'
</script>

<template>
  <div id="content">
    <RouterView />
  </div>
  <contact-component />
  <menu-button />
  <background-image />
</template>

<style scoped lang="scss">
@use '@/styles/main.scss';
</style>
