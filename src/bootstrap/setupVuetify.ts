// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { App } from "vue"
// Vuetify
import { createVuetify } from "vuetify"

/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ "webfontloader")

  webFontLoader.load({
    google: {
      families: ["Roboto:100,300,400,500,700,900&display=swap"],
    },
  })
}
const VuetifyInstance = createVuetify({})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export async function setupVuetify(app: App) {
  loadFonts()
  app.use(VuetifyInstance)
}
