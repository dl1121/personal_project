<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/mainlogo.png" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="iscollapse? '64px' : '200px'">
        <div class="tog-btn" @click="togolist">|||</div>
        <el-menu
          :unique-opened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#515a6e"
          text-color="#fff"
          :collapse="iscollapse"
          :collapse-transition="false"
          :router="true"
        >
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级 -->
            <el-menu-item
              :index=" '/'+ subItem.path+''"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //侧边菜单栏列表
      menulist: [],
      //二级菜单栏图标
      iconsObj: {
        "125": "iconfont icon-users",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao"
      },
      iscollapse: false
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    //登出功能实现
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      // console.log(res);
    },
    //菜单折叠功能
    togolist() {
      this.iscollapse = !this.iscollapse;
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
  //优化菜单边框
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 12px;
}
.tog-btn {
  background-color: #708090;
  font-size: 10px;
  line-height: 24px;
  color: #eee;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>