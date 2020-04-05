<template>
  <div class="loading2" :ref="ref">
    <div
      class="wrapper"
      :style="{
        '--color': color,
        '--width': lineWidth + 'px',
        '--halfHeight': halfHeight + 'px',
        '--lrMargin': lrMargin + 'px',
        '--raduis': radius + 'px',
        '--total': totalSec + 's'
      }"
    >
      <div
        v-for="index in lineCount"
        :key="index"
        class="item"
        :style="{
          '--time': (index - 1) * time + 's',
          transform: 'translateY(' + halfHeight + 'px)'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import initWH from '../../mixin/initWH'
export default {
  data() {
    return {
      ref: 'loading2',
      halfHeight: 0,
      lrMargin: 0,
      radius: 0,
      time: 0
    }
  },
  props: {
    color: {
      type: String,
      default: '#ffb549'
    },
    lineWidth: {
      type: Number,
      default: 15
    },
    lineCount: {
      type: Number,
      default: 5
    },
    totalSec: {
      type: Number,
      default: 2
    }
  },
  mounted() {
    const { width, height, lineCount, lineWidth, totalSec } = this
    this.halfHeight = height / 2
    this.lrMargin = (width - lineCount * lineWidth) / (lineCount * 2)
    this.radius = lineWidth / 2
    this.time = totalSec / 2 / lineCount
  },
  mixins: [initWH]
}
</script>

<style lang="less" scoped>
.loading2 {
  .wrapper {
    height: 100%;
    width: 100%;
    font-size: 0;
    .item {
      width: var(--width);
      height: 0px;
      display: inline-block;
      margin: 0 var(--lrMargin);
      position: relative;
    }
    .item::before {
      content: '';
      height: var(--halfHeight);
      width: var(--width);
      position: absolute;
      bottom: 0;
      left: 0;
      border-top-left-radius: var(--raduis);
      border-top-right-radius: var(--raduis);
      background-color: var(--color);
      animation: loading2 var(--total) infinite var(--time);
    }
    .item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: var(--halfHeight);
      width: var(--width);
      border-bottom-left-radius: var(--raduis);
      border-bottom-right-radius: var(--raduis);
      background-color: var(--color);
      animation: loading2 var(--total) infinite var(--time);
    }
    @keyframes loading2 {
      0% {
        height: calc(var(halfHeight));
      }
      50% {
        height: 5px;
      }
      100% {
        height: calc(var(halfHeight));
      }
    }
  }
}
</style>
