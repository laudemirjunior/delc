import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faMagnifyingGlass,
  faTrashCan,
  faBars,
  faHandPointUp,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faXmark,
  faMagnifyingGlass,
  faTrashCan,
  faBars,
  faHandPointUp,
  faCopy
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
