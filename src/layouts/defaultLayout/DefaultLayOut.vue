<script lang="ts" setup>
  import MainContent from "./MainContent.vue"
</script>

<template>
  <v-layout>
    <v-navigation-drawer color="grey-darken-2" permanent />
    <v-app-bar color="grey-lighten-2" />
    <v-main>
      <MainContent />
    </v-main>
  </v-layout>
</template>

<style lang="less" scoped></style>
