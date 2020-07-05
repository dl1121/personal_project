<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/users' }">用户数据列表</el-breadcrumb-item>
      <el-breadcrumb-item>404页面</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <p>404 Not found...</p> -->
    <div class="box_404">
      <p>功能还没做...</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box_404 {
  text-align: center;
  color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}
</style>