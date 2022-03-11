<template>
  <div class="container">
    <h1>Encurte seu URL</h1>
    <div class="main">
      <input placeholder="Digite sua URL aqui..." v-model="oldUrl" />
      <button @click.prevent="postUrl" class="search">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
    </div>
    <div class="main">
      <a :class="newUrl && 'white'" :href="newUrl" target="_blank">{{
        newUrl
      }}</a>
      <button v-if="newUrl" @click="copy">
        <font-awesome-icon icon="copy" />
      </button>
    </div>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "SearchComponent",
  components: {},

  data() {
    return {
      oldUrl: "",
      newUrl: "",
      myId: localStorage.getItem("@delc:id"),
      error: "",
    };
  },
  methods: {
    postUrl() {
      api
        .post("/", {
          url: this.oldUrl,
          id_user: this.myId,
        })
        .then((response) => {
          this.newUrl = response.data.url;
          if (response.status === 201 && this.myId !== null) {
            this.$store.commit("timerTost", "URL adicionada em sua conta");
          }
        })
        .catch(() => {
          this.$store.commit("timerTost", "Formato do URL incorreto");
        });
    },
    copy() {
      navigator.clipboard.writeText(this.newUrl);
      this.$store.commit(
        "timerTost",
        "Texto copiado para área de transferência!"
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px auto;
  width: 90%;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
input {
  width: 80%;
  max-width: 500px;
  height: 40px;
  border-radius: 20px;
  padding-left: 10px;
  border: 1px solid var(--border);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
  background-color: var(--darkBlue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
a {
  width: 80%;
  max-width: 500px;
  border-radius: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--white);
}
.white {
  background: linear-gradient(53deg, var(--lightBlue) 0%, var(--darkBlue) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--white);
}
</style>
