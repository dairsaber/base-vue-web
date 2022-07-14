<script lang="ts" setup>
  import { ref } from "vue"
  import MainContent from "./MainContent.vue"
  import { useTheme } from "vuetify"

  const drawer = ref(false)

  const theme = useTheme()

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
  }
</script>

<template>
  <v-app>
    <v-system-bar>something</v-system-bar>

    <v-app-bar density="compact" app>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title>My files</v-toolbar-title>
      <v-spacer />
      <v-btn variant="text" icon="mdi-magnify" />
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app> TODO something </v-navigation-drawer>

    <v-main class="tw-h-screen">
      <MainContent />
    </v-main>
    <v-footer class="!tw-p-0" app>
      <!-- 状态栏 -->
      <v-layout style="height: 24px">
        <v-system-bar color="primary">
          <v-icon icon="mdi-message" class="mr-2" />
          <span>10 unread messages</span>
          <v-spacer />
          <v-icon icon="mdi-wifi-strength-4" class="ml-2" />
          <v-icon icon="mdi-signal-cellular-outline" class="ml-2" />
          <v-icon icon="mdi-battery" class="ml-2" />
          <span class="ml-2">08:30</span>
        </v-system-bar>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style lang="less" scoped></style>
