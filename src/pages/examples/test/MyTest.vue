<script setup name="TestPage">
  const props = defineProps({ test: { type: String, default: () => "" } })
  // vue3 中 script 中必须有内容 name才能生效
  console.log("I am test", props)
</script>

<template>
  <v-container>
    <v-btn color="success" rounded="xl"> 我是一只住 </v-btn>
    <v-sheet :dark="true" :elevation="5" color="orange lighten-2" class="text-center">
      你是一个住
      <p v-for="x in 10" :key="x">{{ x }}</p>
    </v-sheet>
  </v-container>
</template>
