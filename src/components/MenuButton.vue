<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { onBeforeMount, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import TransitionWrapper from './TransitionWrapper.vue';

const store = useMenuStore()
const handleMenuButtonClick = ():void => {
    store.setMenuHidden(false);
}
const { menuHidden } = storeToRefs(store)

onBeforeMount(()=>{
    store.setMenuHidden(true);
})
</script>

<template>
    <nav>
    <transition name="slide">
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
    top:2vmax;
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
    color: #D99D55;
}

</style>