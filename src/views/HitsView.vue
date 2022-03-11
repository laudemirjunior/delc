<template>
  <div>
    <div class="container" v-if="newUrl.length !== 0">
      <h1>Os 100 sites mais visitados</h1>
      <table class="main">
        <tr>
          <th>Lugar</th>
          <th>Site</th>
          <th>Visitas</th>
        </tr>
        <tr v-for="(item, index) in newUrl" :key="item.url">
          <td>{{ index + 1 }}°</td>
          <td>
            <a :href="`${baseUrl}${item.code}`" target="_blank">{{
              isUrl(item.url)
            }}</a>
          </td>
          <td>{{ item.hits }}</td>
        </tr>
      </table>
    </div>
    <div class="image" v-else>
      <img src="../assets/search.svg" />
      <h3>Ainda não há URLs por aqui</h3>
    </div>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "HitsView",

  data() {
    return {
      baseUrl: "https://delc.herokuapp.com/",
      newUrl: [],
    };
  },
  methods: {
    getUrl() {
      api.get("/").then((response) => {
        this.newUrl = response.data;
      });
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
  margin: 20px auto;
}
img {
  width: 300px;
  margin-top: 200px;
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
tr:nth-child(even) {
  background-color: var(--border);
}
</style>
