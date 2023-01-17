## vue3 中子组件拿到 prop 对象操作不到

### 使用 Object.keys()时报 undefined

通过 watch 监听该 prop，再进行数据处理

## this.$nextTick()失效

dom 的显隐控制操作在 this.$nextTick 之后，被自己蠢哭~~~

## 某段代码禁用 prittier 格式化

```js
js
// prettier-ignore

html
<!-- prettier-ignore-attribute -->
```

## vue中使用innerHTML
在innerHTML中想要添加方法
- 1.标签字符串得用原生写法onclick,不能直接写@click，不生效
- 2.想让原生方法生效，要在将方法挂载在window上,执行方法时调用methods中的方法
- 3.传递对象类型参数时，要使用JSON.stringify()转为字符串并将双引号替换为单引号
- 4.在methods中自动会parse对象，直接使用就可以

```js
created() {
  window.handleClick = (obj) => {
    this.handleClick(obj)
  }
},
methods: {
  useInnerHTML() {
    const params = {
      name: 'xxx',
      age: 99
    }
    let dom = document.querySelector('#dom')
    let jsonParams = JSON.stringify(params).replace(/\"/g,"'")
    dom.innerHTML = `
      <div onclick="handleClick(${jsonParams})">
        哈哈哈哈哈哈
      </div> 
    `
  },
  handleClick(params) {
    console.log(params)
  }
}


```
