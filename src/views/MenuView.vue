<script setup lang="ts">
import router from '@/router'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'
import { onBeforeMount, onMounted, ref } from 'vue'

const menuStore = useMenuStore()
const { menuHidden } = storeToRefs(menuStore)
const itemClicked = ref('')

const handleMouseover = (elementNumber: number): void => {
  menuStore.setActiveElement(elementNumber)
  menuStore.setItemHovered(true)
}

const handleMouseLeave = (): void => {
  if (itemClicked.value === '') {
    menuStore.setItemHovered(false)
  }
}

const handleMouseClick = (name: string): void => {
  itemClicked.value = name
  menuStore.setMenuHidden(true)
}

const handleAnimationEnd = (index: number): void => {
  // ensure all animation finishes
  if (index === items.length - 1) {
    router.push(itemClicked.value)
  }
}

const items = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' }
]

onMounted(() => {
  menuStore.setMenuHidden(false)
})

onBeforeMount(() => {
  menuStore.setActiveElement(0)
  menuStore.setItemHovered(false)
  itemClicked.value = ''
})
</script>

<template>
  <main>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @mouseover="handleMouseover(index)"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick(item.href)"
      >
        <Transition name="slide-vertical" appear @after-leave="handleAnimationEnd(index)">
          <p :style="`transition-delay: ${index * 100}ms;`" v-if="!menuHidden">{{ item.name }}</p>
        </Transition>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/menu.scss';
@use '@/styles/transitions.scss';
</style>
