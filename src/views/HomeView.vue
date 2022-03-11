<template>
  <div class="container">
    <div class="containerSearch">
      <SearchComponent />
    </div>
    <div class="main">
      <div class="image">
        <img src="../../src/assets/link.svg" />
      </div>
      <div class="text">
        <h1>Encurtador de URL</h1>
        <p>
          Encurtador de URL Delc é uma ferramenta poderosa para encurtar link.
          Use o nosso Encurtador de Link para diminuir uma URL longa e gerar um
          link curto. Se precisar de encurtador de url personalizado, acompanhar
          a análise e ter controle total sobre seus links. Crie sua conta agora
          no link abaixo e acesse nosso painel. Encurte links do Facebook,
          Instagram, Youtube & Whatsapp. Encurte o link que você quiser.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
  },
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  width: 95%;
  max-width: 1440px;
  gap: 50px;
  margin: auto;
  padding-bottom: 50px;
}
img {
  width: 100%;
  max-width: 400px;
}
.text {
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  max-width: 400px;
  text-align: left;
}

@media (max-width: 500px) {
  .main {
    flex-direction: column;
  }
  .text {
    width: 95%;
  }
}
</style>
