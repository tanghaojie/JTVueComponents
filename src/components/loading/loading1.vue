<template>
  <div class="loading1" :ref="ref">
    <div
      class="loading"
      :style="{
        width: wh + 'px',
        height: wh + 'px'
      }"
    >
      <svg
        class="loading"
        width="100%"
        height="100%"
        :style="{
          stroke: color,
          'stroke-width': lineWidth,
          'stroke-dasharray': strokeDasharray
        }"
      >
        <circle :cx="center" :cy="center" :r="radius" />
      </svg>
    </div>
  </div>
</template>

<script>
import initWH from '../../mixin/initWH'
export default {
  data() {
    return {
      ref: 'loading1',
      wh: 0,
      center: 0,
      radius: 0,
      strokeDasharray: 0
    }
  },
  props: {
    color: {
      type: String,
      default: '#ffb549'
    },
    lineWidth: {
      type: Number,
      default: 10
    },
    lineCount: {
      type: Number,
      default: 2
    }
  },
  mounted() {
    const { width, height, lineWidth, lineCount } = this
    this.wh = width < height ? width : height
    this.center = this.wh / 2
    this.radius = (this.wh - lineWidth) / 2
    this.strokeDasharray = (Math.PI * this.radius) / lineCount
  },
  mixins: [initWH]
}
</script>

<style lang="less" scoped>
.loading1 {
  text-align: center;
  stroke-linecap: round;
  fill: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .loading {
    animation: loading1-rotate 3s infinite 0s;
    @keyframes loading1-rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
