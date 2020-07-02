<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>

      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
        :model="loginForm"
      >
        <!-- username -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <!-- button -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 双向数据绑定
      loginForm: {
        username: "dengli",
        password: "123456"
      },

      //表单验证
      loginFormRules: {
        //username
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],

        //password
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    //表单重置功能，调用resetFields方法
    reset() {
      //   console.log(this)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      //   this.$refs.loginFormRef.validate(async valid => {
      //     //   console.log(valid)
      //     if (!valid) return;
      //     const { data: res } = await this.$http.post("login", this.loginForm);
      //     if (res.meta.status !== 200) return this.$message.error("登录失败！");
      //     this.$message.success("登录成功！");

      //     //保存token值
      //     window.sessionStorage.setItem("token", res.data.token);

      //     this.$router.push("/home");
      //   });

      this.$axios.post("/user/login", this.loginForm).then(res => {
        var uname = res.data.data[0].username;
        var upass = res.data.data[0].password;
        if (
          res.data.status !== 200 ||
          this.loginForm.username !== uname ||
          this.loginForm.password !== upass
        )
          return this.$message({
            message: "登录失败！用户名或密码错误...",
            center: true,
            type: "error"
          });

        this.$message({
          message: "登录成功",
          center: true,
          type: "success"
        });
        //保存token值
        window.sessionStorage.setItem("token", res.data.token);

        this.$router.push("/home");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #515a6e;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>