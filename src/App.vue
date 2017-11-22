<template>
  <div id="app">
    <s-identify :identifyCode="identifyCode"></s-identify>
    <button @click="refreshCode">看不清，换一张验证码</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      identifyCodes: '1234567890',
      identifyCode: ''
    }
  },
  methods: {
    // 生成一个随机数
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, l)]
      }
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  }
}
</script>
