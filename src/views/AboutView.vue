<script setup lang="ts">
import FancyStarText from '@/components/FancyStarText.vue'
import TransitionWrapper from '@/components/TransitionWrapper.vue'
import { useMenuStore } from '@/stores/menu'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import router from '@/router'

const store = useMenuStore()
const hidden = ref(false)
const { menuHidden } = storeToRefs(store)

onMounted(() => {
  store.setMenuHidden(true)
  store.setActiveElement(0)
  store.setItemHovered(true)
})

const handleAnimationEnd = async (): Promise<void> => {
  // a little smoother transition
  await new Promise((resolve) => setTimeout(resolve, 250))
  router.push('/')
}

console.log('beoeoe', menuHidden.value)

interface Delay {
  enter: number
  leave: number
}

const addDelayStyle = (delay: Delay, interval: number = 0): string =>
  hidden.value
    ? `transition-delay: ${delay.leave - interval}ms;`
    : `transition-delay: ${delay.enter + interval}ms;`

const delay = {
  title: {
    enter: 0,
    leave: 350
  },
  introduction: {
    enter: 50,
    leave: 300
  },
  list: {
    enter: 150,
    leave: 250
  },
  techstack: {
    enter: 250,
    leave: 100
  },
  outside: {
    enter: 300,
    leave: 50
  },
  contact: {
    enter: 350,
    leave: 0
  }
}

const techstackIcons = [
  'fa-brands fa-vuejs',
  'fa-brands fa-aws',
  'fa-brands fa-github',
  'fa-brands fa-node-js'
]
</script>

<template>
  <main>
    <transition-wrapper
      :delay="addDelayStyle(delay.title)"
      :isHidden="menuHidden"
      @onTransitionEnd="handleAnimationEnd"
    >
      <h1>Hi there, I'm <fancy-star-text>Magdalena!</fancy-star-text></h1>
    </transition-wrapper>
    <transition-wrapper :delay="addDelayStyle(delay.introduction)" :isHidden="menuHidden">
      <p>
        I'm a software engineer with
        <fancy-star-text>2 years of commercial experience</fancy-star-text> in the industry. I'm
        passionate about building scalable and performant applications that deliver value to
        end-users. In my career so far, I've had the opportunity to work with a variety of
        technologies and tools, including (but not limited to):
      </p>
    </transition-wrapper>
    <ul>
      <li v-for="(item, index) in techstackIcons" :key="item">
        <transition-wrapper
          :delay="addDelayStyle(delay.outside, index * 50)"
          :isHidden="menuHidden"
        >
          <font-awesome-icon :icon="item" />
        </transition-wrapper>
      </li>
    </ul>
    <transition-wrapper :delay="addDelayStyle(delay.outside)" :isHidden="menuHidden">
      <p>
        Outside of work, I enjoy playing computer games and automating tasks to make my life easier.
        I find the process of writing scripts and creating tools to be both fun and rewarding. I
        strive to maintain a healthy balance between my personal and professional life.
      </p>
    </transition-wrapper>
    <transition-wrapper :delay="addDelayStyle(delay.contact)" :isHidden="menuHidden">
      <p>
        If you're interested in learning more about my work or discussing potential collaborations,
        please don't hesitate to
        <fancy-star-text><a href="mailto:example@gmail.com">reach out to me</a></fancy-star-text
        >. I'm always open to new opportunities and challenges, and I look forward to hearing from
        you!
      </p>
    </transition-wrapper>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/transitions.scss';

ul {
  margin: 0;
  position: static;
  overflow: hidden;

  display: flex;
  gap: 1em;
}
h1 {
  text-align: center;
}
a {
  text-decoration: none;
}

li {
  all: unset;
}

p,
h1,
li {
  position: relative;
  top: 0;
}

main {
  position: static;
  margin: auto;
}

button {
  position: absolute;
}

div {
  position: static;
  overflow: hidden;
}

@media only screen and (orientation: landscape) {
  main {
    width: 40vw;
  }
}
@media only screen and (orientation: portrait) {
  main {
    width: 80vw;
    margin-left: 1em;
  }
}

svg {
  font-size: 2.5rem;
}
</style>
