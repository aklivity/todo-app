import { createApp } from "vue"
import App from "./App.vue"
import { createRouter } from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import { domain, clientId as client_id } from "../auth_config.json";

const app = createApp(App);

createApp(App)
  .use(createRouter(app))
  .use(
    createAuth0({
      domain,
      client_id,
      redirect_uri: window.location.origin,
      audience:"https://localhost:9090/tasks",
      scope:"read:tasks write:tasks"
    })
  )
  .mount('#app')
