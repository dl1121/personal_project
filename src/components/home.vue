<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/mainlogo.png" />
        <span>物业后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#515a6e"
          text-color="#fff"
          
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            
              <el-menu-item index="1-3">选项3</el-menu-item>
           
            
              <el-menu-item index="1-4">选项4</el-menu-item>
             
            
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">楼盘信息管理</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">住户信息管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">投诉项目管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    //登出功能实现
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #515a6e;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 35px;
  color: #eaedf1;
  > div {
    display: flex;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #515a6e;
  }
}
.el-aside {
  background-color: #515a6e;
}
.el-main {
  background-color: #eaedf1;
}
</style>