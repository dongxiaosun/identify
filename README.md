# identify(生成验证码图片)

> This is a digital graphic verification code written in canvas
> 这是一个vue的插件，使用canvas来生成图形验证码


## Attributes

| 参数                  |     说明                          |   类型    |   默认值  |
| --------              | :-----:                          | :----:    |  :----:   |
| identifyCode          |   需要展示的验证码                |  string   |   1234    |
| fontSizeMin           |  字体大小，最小值                 |  number   |   16      |
| fontSizeMax           |  字体大小，最大值                 |  number   |   40      |
| backgroundColorMin    |  背景颜色色值最小值，最小为0       |  number   |   180     |
| backgroundColorMax    |  背景颜色色值最大值，最大为255     |  number   |   240     |
| colorMin              |  字体颜色色值最小值，最小为0       |  number   |   50      |
| colorMax              |  字体颜色色值最大值，最大为255     |  number   |   160     |
| lineColorMin          |  干扰线颜色色值最小值，最小为0     |  number   |   40      |
| lineColorMax          |  干扰线颜色色值最大值，最大为255   |  number   |   180     |
| dotColorMin           |  干扰点颜色色值最小值，最小为0     |  number   |   0       |
| dotColorMax           |  干扰点颜色色值最大值，最大为255   |  number   |   255     |
| contentWidth          |  画布大小，最小值                 |  number   |   160     |
| contentHeight         |  画布大小，最大值                 |  number   |   40      |

## Demo
```
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


```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

npm test
```