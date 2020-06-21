<template>
  <div>
      <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {

    methods:{
        //登出功能实现
       logout(){
           window.sessionStorage.clear();
           this.$router.push('/login');
       } 
        
    }
}
</script>

<style lang="less" scoped>

</style>