<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="mb-3 display-2 font-weight-bold">Welcome to Vuetify 3 Beta</h1>

        <h4>Vite Preview</h4>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers, <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="mb-5 headline font-weight-bold">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="mx-3 subheading"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="mb-5 headline font-weight-bold">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="mx-3 subheading"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="mb-5 headline font-weight-bold">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="mx-3 subheading"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  // Logo
  import logo from "../assets/logo.svg"

  export default defineComponent({
    name: "HelloWorld",

    data() {
      return {
        ecosystem: [
          {
            text: "vuetify-loader",
            href: "https://github.com/vuetifyjs/vuetify-loader",
          },
          {
            text: "github",
            href: "https://github.com/vuetifyjs/vuetify",
          },
          {
            text: "awesome-vuetify",
            href: "https://github.com/vuetifyjs/awesome-vuetify",
          },
        ],
        importantLinks: [
          {
            text: "Chat",
            href: "https://community.vuetifyjs.com",
          },
          {
            text: "Made with Vuetify",
            href: "https://madewithvuejs.com/vuetify",
          },
          {
            text: "Twitter",
            href: "https://twitter.com/vuetifyjs",
          },
          {
            text: "Articles",
            href: "https://medium.com/vuetify",
          },
        ],
        logo,
        whatsNext: [
          {
            text: "Explore components",
            href: "https://vuetifyjs.com",
          },
          {
            text: "Roadmap",
            href: "https://vuetifyjs.com/en/introduction/roadmap/",
          },
          {
            text: "Frequently Asked Questions",
            href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
          },
        ],
      }
    },
  })
</script>
