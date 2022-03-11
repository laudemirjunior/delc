<template>
  <div v-if="$store.state.show">
    <p>{{ $store.state.error }}</p>
    <font-awesome-icon icon="xmark" />
  </div>
</template>
<script>
export default {
  name: "TostComponent",
};
</script>
<style scoped>
@keyframes slidein {
  from {
    right: -200px;
  }
  to {
    right: 0;
  }
}
div {
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  margin: 55px 5px;
  width: 200px;
  height: 70px;
  border-radius: 5px;
  background-color: var(--lightBlue);
  display: flex;
  font-size: 14px;
  padding: 5px;
  animation-duration: 1s;
  animation-name: slidein;
}
p {
  font-weight: 400;
}
svg {
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 3px;
}
</style>
