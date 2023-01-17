<template>
  <h1>{{ name }}</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const name = ref('呼呼喝喝')
onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped lang="less"></style>
