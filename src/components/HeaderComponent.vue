<template>
  <div class="container">
    <div class="main">
      <div>
        <router-link to="/"><p>Home</p></router-link>
      </div>
      <div class="loginRegister" v-if="!$store.state.logged">
        <router-link to="/Hits"><p>Sites mais visitados</p></router-link>
        <router-link to="/login"><p>Entrar</p></router-link>
        <router-link to="/register"><p>Cadastrar</p></router-link>
      </div>
      <div class="loginRegister" v-else>
        <router-link to="/Hits"><p>Sites mais visitados</p></router-link>
        <router-link to="/dashboard"><p>Painel de controle</p></router-link>
        <router-link @click="clear" to="/"><p>Sair</p></router-link>
      </div>
      <div class="icon">
        <font-awesome-icon icon="bars" v-if="show" @click="change" />
        <font-awesome-icon icon="xmark" v-else @click="change" />
      </div>
    </div>
    <div v-if="!show">
      <div class="hamburguer" v-if="!$store.state.logged">
        <router-link to="/Hits"><p>Sites mais visitados</p></router-link>
        <router-link to="/login"><p>Entrar</p></router-link>
        <router-link to="/register"><p>Cadastrar</p></router-link>
      </div>
      <div class="hamburguer" v-else>
        <router-link to="/Hits"><p>Sites mais visitados</p></router-link>
        <router-link to="/dashboard"><p>Painel de controle</p></router-link>
        <router-link @click="clear" to="/"><p>Sair</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    clear() {
      localStorage.clear();
      this.$store.commit("changeLogged", false);
    },
    change() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  background: linear-gradient(
    160deg,
    var(--lightBlue) 0%,
    var(--darkBlue) 100%
  );
  height: 50px;
  display: flex;
  justify-content: center;
}
.main {
  width: 95%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.loginRegister {
  display: flex;
  gap: 20px;
}
a {
  color: var(--white);
}
p {
  font-weight: 500;
  font-size: 16px;
}
svg {
  font-size: 24px;
  color: var(--white);
}
.loginRegister {
  display: none;
}

.hamburguer {
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100vw;
  top: 50px;
  right: 0;
  flex-direction: column;
  height: 300px;
  z-index: 1;
  background: linear-gradient(68deg, var(--lightBlue) 0%, var(--darkBlue) 100%);
}
.icon {
  display: flex;
}
@media (min-width: 500px) {
  .loginRegister {
    display: flex;
  }
  .hamburguer {
    display: none;
  }
  .icon {
    display: none;
  }
}
</style>
