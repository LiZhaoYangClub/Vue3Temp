<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup name="SvgIcon">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

interface SvgProps {
  name: string // 图标的名称 ==> 必传
  prefix?: string // 图标的前缀 ==> 非必传（默认为"icon"）
  // eslint-disable-next-line vue/require-default-prop
  iconStyle?: CSSProperties // 图标的样式 ==> 非必传
  size?: number
}

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
  prefix: 'icon',
  size: 16
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const iconStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
}
</style>
