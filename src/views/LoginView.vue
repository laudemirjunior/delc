<template>
  <div class="Container">
    <div class="containerLoginForm">
      <FormLoginComponent />
    </div>
  </div>
</template>

<script>
import FormLoginComponent from "../components/FormLoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    FormLoginComponent,
  },
};
</script>
<style scoped>
.containerLoginForm {
  display: flex;
  justify-content: center;
}
</style>
