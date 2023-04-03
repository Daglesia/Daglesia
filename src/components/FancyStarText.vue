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

@keyframes scale {
  from,
  to {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
}

body {
  background-color: rgb(10, 10, 10);
  display: grid;
  height: 100vh;
  margin: 0px;
  overflow: hidden;
  place-items: center;
}

h1 {
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: clamp(2em, 2vw, 4em);
  font-weight: 400;
  margin: 0px;
  padding: 20px;
  text-align: center;
}

h1 > .magic {
  display: inline-block;
  position: relative;
}

h1 > .magic > .magic-star {
  --size: clamp(20px, 1.5vw, 30px);

  animation: scale 700ms ease forwards;
  display: block;
  height: var(--size);
  left: var(--star-left);
  position: absolute;
  top: var(--star-top);
  width: var(--size);
}

h1 > .magic > .magic-star > svg {
  animation: rotate 1000ms linear infinite;
  display: block;
  opacity: 0.7;
}

h1 > .magic > .magic-star > svg > path {
  fill: var(--violet);
}

p {
  all: unset;
  animation: background-pan 20s linear infinite;
  background: linear-gradient(to right, #ffffff, #d99d55, #ffffff);
  background-size: 500%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>
