<template>
  <form class="container" v-on:submit.prevent="onSubmit">
    <h1 @click="cl">Entrar</h1>
    <i class="fa-thin fa-0"></i>
    <input
      Placeholder="Digite seu email"
      type="email"
      name="email"
      v-model="user.email"
    />
    <input
      Placeholder="Digite sua senha"
      type="password"
      name="senha"
      v-model="user.password"
    />
    <ButtonComponent children="Entrar" theme="dark" @click="login" />
    <p>Não possui uma conta? Clique no botão abaixo</p>
    <ButtonComponent
      children="Cadastrar"
      color="light"
      @click="$router.push('/register')"
    />
  </form>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
import api from "../services";
export default {
  name: "FormLoginComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      user: { email: "", password: "" },
    };
  },
  methods: {
    login() {
      api
        .post("/login", this.user)
        .then((response) => {
          localStorage.setItem("@delc:token", response.data.token);
          localStorage.setItem("@delc:id", response.data.id);
        })
        .then(
          () => this.$router.push({ name: "dashboard" }),
          this.$store.commit("changeLogged", true)
        )
        .catch(() => {
          this.$store.commit("timerTost", "Email e/ou senha inválido(s)");
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
  height: 400px;
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
