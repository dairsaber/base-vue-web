import { createApp } from "vue"
import "./styles/index.scss"

import App from "./App.vue"
import { setupRouter } from "@/router"
import { setupVuetify } from "@/bootstrap"

async function bootstrap() {
  const app = createApp(App)
  // 初始化vuetify
  await setupVuetify(app)

  // 初始化路由
  setupRouter(app)

  app.mount("#app")
}

bootstrap()
