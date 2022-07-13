<script setup lang="ts">
  import { DefineComponent, shallowRef } from "vue"
  import componentGroups from "@/pages/examples"

  const currentSelectKey = shallowRef<DefineComponent>(
    componentGroups[0]?.components?.[0].component,
  )

  function handleSelected(key: DefineComponent) {
    currentSelectKey.value = key
  }
</script>

<template>
  <v-sheet class="tw-relative tw-w-full tw-h-full">
    <component :is="currentSelectKey" />
    <div class="tw-absolute tw-right-0 tw-top-0 tw-w-48 tw-p-4">
      <div class="tw-flex tw-flex-col">
        <template v-for="(group, index) in componentGroups" :key="group.group">
          <section>{{ index + 1 }}.{{ group.group }}</section>

          <v-btn
            v-for="item in group.components"
            :key="item.label"
            :class="{ selected: item.component === currentSelectKey }"
            class="button"
            @click="handleSelected(item.component)"
          >
            {{ item.label }}
          </v-btn>
        </template>
      </div>
    </div>
  </v-sheet>
</template>
