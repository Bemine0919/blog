## ts定义ref
``` js
<script setup lang='ts'>
import ReBar from '/@/components/reBar'
const videoRef = ref<InstanceType<typeof ReBar>>(null)
<script />
```

## 同一父组件引入多个echarts图表时resize失效 
原因：因为多个子组件都调用了window.onresize方法，但只有最后一个图表生效
解决：在父组件中调用所有子组件的resize方法, 子组件要将方法暴露出去
``` js
// 父组件
const videoRef = ref<InstanceType<typeof ReBar>>(null)
const parkRef = ref<InstanceType<typeof ReBar>>(null)
const environmentRef = ref<InstanceType<typeof ReBar>>(null)
const accessRef = ref<InstanceType<typeof ReBar>>(null)
const meetingRef = ref<InstanceType<typeof ReBar>>(null)
const patrolRef = ref<InstanceType<typeof ReBar>>(null)
onMounted(() => {
  // 多个子组件内调用window.onresize, 只会对最后一个图表生效
  // 所以需要在父组件内调用所有子组件内图表的resize方法
  window.onresize = () => {
    videoRef.value.resizeChart()
    parkRef.value.resizeChart()
    environmentRef.value.resizeChart()
    accessRef.value.resizeChart()
    meetingRef.value.resizeChart()
    patrolRef.value.resizeChart()
  }
})

// 子组件
const resizeChart = (): void => {
  echartInstance.resize()
}
defineExpose({
  resizeChart
})
```

