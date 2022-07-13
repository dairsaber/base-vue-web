<script lang="ts" setup>
  import { ref } from "vue"
  import MainContent from "./MainContent.vue"

  const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-system-bar>something</v-system-bar>
    <v-app-bar dense app flat>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer />

      <v-btn variant="text" icon="mdi-magnify" />

      <v-btn variant="text" icon="mdi-filter" />

      <v-btn variant="text" icon="mdi-dots-vertical" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app> TODO something </v-navigation-drawer>

    <v-main class="tw-h-screen">
      <MainContent />
    </v-main>
    <v-footer color="" app>
      <!-- -->
      这是footer
    </v-footer>
  </v-app>
</template>

<style lang="less" scoped></style>
