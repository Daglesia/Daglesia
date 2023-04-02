<script setup lang="ts">
import MenuButton from '@/components/MenuButton.vue';
</script>

<template>
    <nav>
        <a href="https://www.google.com/search?client=firefox-b-d&q=flex+gap">
            <font-awesome-icon icon="fa-brands fa-linkedin"/>
        </a>
        <a>
            <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    padding-block: 0.5em;

    display: flex;
    flex-direction: column;
    row-gap: 0.3em;

    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.3em;

    position: absolute;
    right: 0.2em;
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

svg {margin-inline: 0.2em;
    color: white;
    font-size: 2em;

    cursor: pointer;
}
</style>