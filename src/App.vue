<template>
  <div id="app">
    <HeaderComponent />
    <div id="main">
      <router-view />
      <TostComponent />
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import TostComponent from "./components/TostComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    TostComponent,
  },
  create: {
    isLogged() {
      if (localStorage.getItem("@delc:token")) {
        return this.$store.commit("changeLogged", true);
      }
    },
  },
};
</script>
<style>
body {
  background-color: var(--background);
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
#main {
  flex: 1;
}
a {
  color: var(--black);
}
:root {
  --white: #fff;
  --black: #000;
  --background: #f8f8f8;
  --darkBlue: #0077c0;
  --lightBlue: #80bbdf;
  --border: #dcdcdc;
  --gray: #a4a69c;
  --liner: ;
}
</style>
