import { DefineComponent, defineAsyncComponent } from "vue"

type GroupItem = {
  group: string
  components: { label: string; component: DefineComponent }[]
}

type GroupItemConfig = {
  group: string
  components: Recordable<() => Promise<any>>
}

/** 页面配置 */
const config: GroupItemConfig[] = [
  {
    group: "Test",
    components: { TestPage: () => import("./test/MyTest.vue") },
  },
]

/** 解析配置 */
function resolveConfig(config: GroupItemConfig[]): GroupItem[] {
  const groups: GroupItem[] = []

  config.forEach((groupItem) => {
    const { group, components: componentConfigs } = groupItem
    const keys = Object.keys(componentConfigs)
    const components = keys.map((componentKey) => ({
      label: componentKey,
      component: defineAsyncComponent(componentConfigs[componentKey]),
    }))

    groups.push({ group, components })
  })

  return groups
}

const groups = resolveConfig(config)

export default groups
