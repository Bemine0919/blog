::: tip
使用富文本 wangeditor 将内容导出为 word
:::

## 1.安装依赖

```js
  // 富文本
  npm i @wangeditor/editor -S
  npm i @wangeditor/editor-for-vue -S
  // 导出
  npm i file-saver -S
  npm i html-docx-js -S
```

## 2.使用

```js
<template>
  <div class="container">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>

</template>
<script>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import htmlDocx from 'html-docx-js/dist/html-docx'
import saveAs from 'file-saver'
export default {
  components: { Editor, Toolbar },
   data() {
    return {
      editor: null,
      html: '<p></p>',
      toolbarConfig: {},
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
    }
  },
  methods: {
    onCreated(editor) {
      // 一定要用 Object.seal() ，否则会报错
      this.editor = Object.seal(editor)
    },
    //将富文本中输入的文字下载到word中
    download() {
      let page = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"></head>
        <body>
        ${this.editor.getHtml()}
        </body>
      </html>`
      saveAs(
        htmlDocx.asBlob(page, {
          orientation: 'landscape', //跨域设置
        }),
        //文件名
        'text.doc'
      )
    }

  }
}
</script>


```

## 3.坑
若将编辑器组件放入dialog弹出框组件内，需要在关闭dialog时销毁组件，打开时重新创建，否则报错
### element-ui的弹出框
```js
<el-dialog :destroy-on-close="true"></el-dialog>
```
### 移动端如vant,其外包裹div v-if
```js
<div v-if="show">
  <van-dialog v-model:show="show" title="标题" show-cancel-button>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
  </van-dialog>
</div>
```