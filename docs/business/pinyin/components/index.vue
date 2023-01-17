<template>
  <div class="search">
    <el-input
      v-model="text"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input"
    />
    <el-button @click="addPinYin" class="btn">添加拼音</el-button>
  </div>

  <div v-show="isClick" class="py-card">
    <div v-for="(item, index) in splitTextArr" :key="item" class="line">
      <div v-for="(single, i) in item" :key="single" class="single">
        <p id="text">{{ splitPyArr[index].split(' ')[i] }}</p>
        <p id="phoneticize">{{ single }}</p>
      </div>
      <!-- <ruby>
        <span id="text">{{ item }}</span
        ><rp>(</rp><rt id="phoneticize">{{ splitPyArr[index] }}</rt
        ><rp>)</rp>
      </ruby> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { pinyin } from 'pinyin-pro'
const lineNumber = 27
const text = ref('')
const isClick = ref(false)
const splitTextArr = ref([])
const splitPyArr = ref([])
const addPinYin = () => {
  // if (splitTextArr.value.length > 0) return
  splitTextArr.value = []
  splitPyArr.value = []
  for (let i = 0; i < text.value.length; i += lineNumber) {
    splitTextArr.value.push(text.value.slice(i, lineNumber + i))
    splitPyArr.value.push(pinyin(text.value.slice(i, lineNumber + i)))
  }
  isClick.value = true
}
</script>

<style scoped lang="less">
.search {
  display: flex;
  .btn {
    margin-left: 20px;
  }
}
.py-card {
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  margin-top: 20px;
  .line {
    display: flex;
    flex-wrap: wrap;
    .single {
      text-align: center;
      margin-right: 5px;
      p {
        margin: 0;
        padding: 0;
      }
    }
  }
  #text {
    font-size: 12px;
  }
  #phoneticize {
    font-size: 12px;
  }
}
</style>
