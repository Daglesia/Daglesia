<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MenuButton from '@/components/MenuButton.vue'
import BackgroundImage from './components/BackgroundImage.vue'
import ContactComponent from './components/ContactComponent.vue'
import { onMounted, ref } from 'vue'
</script>

<template>
  <div class="content">
    <RouterView />
  </div>
  <contact-component/>
  <menu-button/>
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
