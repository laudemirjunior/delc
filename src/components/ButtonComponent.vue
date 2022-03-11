<template lang="">
  <button :class="color ? 'light' : 'dark'">
    {{ children }}
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    children: String,
    color: String,
  },
};
</script>
<style scoped>
button {
  width: 100%;
  max-width: 350px;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark {
  background-color: var(--darkBlue);
}
.light {
  background-color: var(--lightBlue);
}
</style>
