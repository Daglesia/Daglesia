<script setup lang="ts">
import MenuButton from '@/components/MenuButton.vue'
import { ref } from 'vue'

const p = ref(false)
</script>

<template>
  <nav>
    <Transition name="slide-horizontal" appear>
      <div>
        <a href="https://www.google.com/search?client=firefox-b-d&q=flex+gap">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a>
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/transitions.scss';

nav {
  position: absolute;
  right: 0.2em;
  overflow: hidden;
}

div {
  padding-block: 0.5em;

  display: flex;
  flex-direction: column;
  row-gap: 0.3em;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.3em;

  position: relative;
  left: 0;
}

nav:hover > a {
  opacity: 0.5;
}

nav:hover > a:hover {
  opacity: 1;
}

a {
  transition: all 0.5s ease;
  margin: auto;
}

svg {
  margin-inline: 0.2em;
  color: white;
  font-size: 2em;

  cursor: pointer;
}
</style>
