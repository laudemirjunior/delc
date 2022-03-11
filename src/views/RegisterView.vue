<template>
  <div>
    <div class="containerRegisterForm">
      <FormRegisterComponent />
    </div>
  </div>
</template>
<script>
import FormRegisterComponent from "../components/FormRegisterComponent.vue";
export default {
  name: "RegisterView",
  components: {
    FormRegisterComponent,
  },
};
</script>
<style scoped>
.containerRegisterForm {
  display: flex;
  justify-content: center;
}
</style>
