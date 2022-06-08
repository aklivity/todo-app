import {createApp, ref} from "vue"
import App from "./App.vue"
import { createRouter } from "./router";
import {createAuth0} from "@auth0/auth0-vue";
import "highlight.js/styles/github.css";
import hljs from "vue3-highlightjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { domain, clientId as client_id } from "../auth_config.json";

const app = createApp(App);
library.add(faLink, faUser, faPowerOff);

createApp(App)
    .use(hljs)
    .use(createRouter(app))
    .use(createAuth0({
        domain,
        client_id,
        redirect_uri: window.location.origin,
        audience:"https://localhost:9090/tasks",
        scope:"read:tasks write:tasks"
    }))
    .provide("$error", ref(null))
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

