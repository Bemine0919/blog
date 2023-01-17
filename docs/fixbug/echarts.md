## vue3 中 tooltips 不生效

vue3 使用 options api 将 chart 实例作为响应式数据了，导致的 bug

```js
data() {
  this.chart = null  //此处进行初始化
  return {
    ....
  }
}

```

## echarts 去掉 x,y 轴线、分割线、刻度线、数值间隔

```js
yAxis / xAxis: {
  type: 'value',

  minInterval: 1,   //数值间隔
  splitLine: {
    show: false, //分割线
  },
  axisLine: {
    show: false, // 坐标轴线和刻度线
  },
  axisTick: {
    show: false,  //axxisLine为true时 单独设置刻度线显隐
  },
},
```
## 当切回页面时，echarts图表不显示
在有Echarts的页面，利用销毁组件的钩子
```js
 destoryed() {
  this.chart.clear()      //清空实例
  this.chart.dispose()    //销毁实例
 }
 unmounted() {
  this.chart.clear()
  this.chart.dispose()
 }

  mounted() {
    // 清空_echarts_instance_属性值，重新赋值
    let dom = document.getElementById('container')
    dom.removeAttribute("_echarts_instance_");
    this.chart = echarts.init(dom)
    window.addEventListener('resize', () => {
      this.chart.resize()
    })
},
```
## echarts图表上方显示数字，为0不显示
```js
series: [
  {
    name: '红(Ⅰ级响应)',
    type: 'bar',
    data: [18203, 23489, 29034, 104970],
    itemStyle: {
      normal: {
        barBorderRadius: [6, 6, 0, 0],    //圆角
        label: {
          show: true,
          position: 'top', //位置
          textStyle: {     //数字字体大小、颜色
            fontSize: 20,
            color: 'black'
          },
          formatter:function(val){
            if(val.value == 0){
              return ""
            }
          },
        }
      }
    },
  }
]
```