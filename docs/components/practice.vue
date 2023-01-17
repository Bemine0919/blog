<template>
  <div @dblclick="handleDbclick">嘻嘻呵呵</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const handleDbclick = () => console.log(123)
</script>

<style scoped lang="less"></style>
