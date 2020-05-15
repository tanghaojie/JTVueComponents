<template>
  <div id="app" class="app">
    <loading1
      style="width: 150px; height: 120px; background-color: blue;"
      class="m-30"
    />
    <loading2
      style="width: 150px; height: 120px;"
      class="m-30"
    />
  </div>
</template>

<script>
import loading1 from './components/loading/loading1.vue'
import loading2 from './components/loading/loading2.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    loading1,
    loading2
  }
}
</script>

<style>
.m-30 {
  margin: 30px;
}
.inner {
  margin: 0 auto;
  width: 100%;
  height: 0;
  padding-top: 100%;
  border: 1px solid black;
  border-radius: 50%;
}
.container {
  width: 300px;
  height: 200px;
  background-color: #fff;
  display: flex;
}
.app {
  width: 100%;
  height: 100%;
  background-color: white;
}

body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
