<script lang="ts" setup name="IconTest">
  import Icon from "@/components/Icon"
</script>

<template>
  <div class="flex items-center justify-center w-full h-full text-5xl">
    <Icon icon="mdi:home" size="32" style="color: red" />
    <Icon icon="mdi:account" spin />
    <Icon icon="ant-design:account-book-filled" />
  </div>
</template>
