export default {
  data() {
    return {
      dom: '',
      width: 0,
      height: 0
    }
  },
  methods: {
    initWH() {
      const { $refs, ref } = this
      const dom = (this.dom = $refs[ref])
      this.width = dom.clientWidth
      this.height = dom.clientHeight
    }
  },
  mounted() {
    const { initWH } = this
    initWH()
  }
}
