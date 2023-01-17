## 电子签名

### 依赖插件
npm i vue-esign -S
可自定义高度, 宽高大于父容器则自适应大小
### api
this.$refs.signRef.generate() 签名生成图片的base64地址
this.$refs.signRef.reset() 清空画布
### 使用
```js
<template>
   <vue-esign ref="signRef" :width="1000" :height="1000"></vue-esign>
</template>
<script>
import vueEsign from 'vue-esign'
export default ({
  name: 'DetailPage',
  components: {
    vueEsign
  },
  methods: {

  }
})
</script>
```