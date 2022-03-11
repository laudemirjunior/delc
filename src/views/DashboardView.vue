<template>
  <div>
    <div v-if="myUrls.length !== 0">
      <h1>Meus links</h1>
      <table class="main">
        <tr>
          <th>Site</th>
          <th>Visitas</th>
          <th class="close">Excluir</th>
        </tr>
        <tr v-for="(item, index) in myUrls" :key="index">
          <td>
            <a :href="`${baseUrl}${item.code}`" target="_blank">{{
              isUrl(item.url)
            }}</a>
          </td>
          <td>
            {{ item.hits }}
          </td>
          <td>
            <div
              class="close"
              @click="deleteUrl(item.code, index)"
              data-cy="delete"
            >
              <font-awesome-icon icon="trash-can" />
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <img src="../assets/search.svg" />
      <h3>Ainda não há links encurtados em sua conta</h3>
    </div>
  </div>
</template>
<script>
import api from "../services";

export default {
  name: "HitsView",
  components: {},
  data() {
    return {
      baseUrl: "https://delc.herokuapp.com/",
      myUrls: [],
      myId: localStorage.getItem("@delc:id"),
      myToken: localStorage.getItem("@delc:token"),
    };
  },
  methods: {
    getUrl() {
      api.get(`/url/${this.myId}`).then((response) => {
        this.myUrls = response.data;
      });
    },
    deleteUrl(code, index) {
      api
        .delete(`/${code}/${this.myId}`, {
          headers: {
            Authorization: `Bearer ${this.myToken}`,
          },
        })
        .then((response) => {
          this.newUrl = response.data;
          this.myUrls.splice(index, 1);
          this.$store.commit("timerTost", "URL excluída com sucesso");
        })
        .catch(() => this.$store.commit("timerTost", "Erro ao excluir a URL"));
    },
    isUrl(item) {
      try {
        if (item.split(".")[0] === "www") return item.split(".")[1];
        if (item.split("//")[1].split(".")[0] === "www")
          return item.split(".")[1];
        if (item.split("//")[1].split(".")[0] !== "www")
          return item.split("//")[1].split(".")[0];
      } catch {
        return item;
      }
    },
  },
  created() {
    this.getUrl();
  },
};
</script>
<style scoped>
h1 {
  margin: 20px;
}
.main {
  max-width: 1440px;
  width: 95%;
  margin: auto;
}
img {
  width: 300px;
  margin-top: 200px;
}
h3 {
  margin: 20px 0;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
tr,
td,
th {
  border: 1px solid var(--gray);
  text-align: left;
  padding: 8px;
  white-space: pre-wrap;
}
svg {
  font-size: 18px;
  cursor: pointer;
}
tr:nth-child(even) {
  background-color: var(--border);
}
.close {
  width: 50px;
  text-align: center;
}
</style>
