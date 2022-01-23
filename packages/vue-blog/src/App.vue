<template>
  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="container mx-auto max-w-[1232px]">
    <router-view />
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
/* stylelint-disable selector-max-type, selector-class-pattern */

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

// Design variables and utilities from src/design.
@import '@/design';

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: black;
}

body {
  width: 100%;
  height: 100%;
}

/* stylelint-disable-next-line */
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-body-bg;
  text-rendering: optimizeLegibility;
}
</style>
