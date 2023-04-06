<template>
  <p>
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@keyframes background-pan {
  from {
    background-position: 0% center;
  }

  to {
    background-position: -500% center;
  }
}

p {
  all: unset;
  animation: background-pan 20s linear infinite;
  background: linear-gradient(to right, #ffffff, #d99d55, #ffffff);
  background-size: 500%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>
