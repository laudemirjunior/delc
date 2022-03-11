<template>
  <form class="container" v-on:submit.prevent="onSubmit">
    <h1>Cadastrar</h1>
    <input required Placeholder="Digite seu nome" v-model="user.name" />
    <input
      required
      Placeholder="Digite seu email"
      type="email"
      v-model="user.email"
    />
    <input
      required
      Placeholder="Digite sua senha"
      type="password"
      v-model="user.password"
    />
    <input
      required
      Placeholder="Confirme sua senha"
      type="password"
      v-model="user.confirmPassword"
    />
    <ButtonComponent children="Cadastrar" theme="dark" @click="register" />
    <p>Já possui uma conta? Clique no botão abaixo</p>
    <ButtonComponent
      children="Entrar"
      color="light"
      @click="$router.push('/login')"
    />
  </form>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
import api from "../services";

export default {
  name: "FormRegisterComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    register() {
      api
        .post("/register", this.user)
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          console.log(error);
          if (
            this.user.name === null ||
            this.user.email === null ||
            this.user.password === null ||
            this.user.confirmPassword === null
          ) {
            return;
          }
          this.$store.commit(
            "timerTost",
            "Email em uso, tente novamente com outro email"
          );
        });
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 95%;
  max-width: 350px;
  height: 500px;
  background-color: var(--white);
  padding: 40px 20px;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
input {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding-left: 10px;
  border: 1px solid var(--border);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
p {
  font-size: 12px;
}
</style>
