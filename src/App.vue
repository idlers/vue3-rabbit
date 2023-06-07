<template>
  <!-- 一级路由出口 -->
  <router-view></router-view>
  <el-button type="primary" class="test">I am Button</el-button>
  <div class="test">
    123
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>