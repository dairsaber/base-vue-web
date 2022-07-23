<script lang="ts" setup name="MyIcon">
  import { Icon } from "@iconify/vue"
  import { computed } from "vue"
  type BasicProps = {
    icon: string
    size?: number | string
    spin?: boolean
  }
  const props = withDefaults(defineProps<BasicProps>(), { size: 16, spin: false })

  const getIconClass = computed(() => {
    if (props.spin !== false) {
      return "_spin"
    }
    return ""
  })
</script>

<template>
  <Icon class="_myicon" :class="getIconClass" :icon="icon" :height="size" />
</template>

<style lang="less" scoped>
  ._myicon {
    &._spin {
      animation: loadingCircle 1s infinite linear;
    }
  }

  @keyframes loadingCircle {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
