import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useMenuStore = defineStore('menu', () => {
  const activeElement = ref(0)
  const isItemHovered = ref(false)
  const menuHidden = ref(false)

  const setActiveElement = (newActiveElement: number): void => {
    activeElement.value = newActiveElement
    console.log(router.currentRoute.value.path)
  }

  const setItemHovered = (newState: boolean): void => {
    isItemHovered.value = newState
    console.log(isItemHovered)
  }

  const setMenuHidden = (newState: boolean): void => {
    menuHidden.value = newState
    console.log(menuHidden, 'beeep boop')
  }

  return {
    activeElement,
    isItemHovered,
    menuHidden,
    setActiveElement,
    setItemHovered,
    setMenuHidden
  }
})
