import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import * as path from "path"

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // 添加支持setup语法糖扩展 标签中可以加入name属性
    vueSetupExtend(),
    vuetify({ autoImport: true }),
  ],
})
