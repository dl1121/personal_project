<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 列表卡片 -->
    <el-card>
      <!-- serch -->

      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户数据列表 -->
      <el-table :data="userlist" style="width: 100%" border stripe>
        <el-table-column prop="guid" label="序号" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="tel" label="电话" width="200"></el-table-column>
        <el-table-column prop="address" label="地址" width="400"></el-table-column>
        <el-table-column prop="status" label="状态" width="200"></el-table-column>

        <!-- 新增用户弹出表单 -->

        <el-dialog
          class="editForm"
          title="新增"
          :visible.sync="dialogVisible"
          width="30%"
          append-to-body
        >
          <el-form :model="editForm">
            <el-input
              class="formInput"
              prefix-icon="el-icon-thumb"
              placeholder="请输入序号"
              v-model="editForm.guid"
            ></el-input>

            <el-input
              class="formInput"
              prefix-icon="el-icon-user-solid"
              placeholder="请输入姓名"
              v-model="editForm.name"
            ></el-input>
            <el-input
              class="formInput"
              prefix-icon="el-icon-message"
              placeholder="请输入邮件地址"
              v-model="editForm.email"
            ></el-input>
            <el-input
              class="formInput"
              prefix-icon="el-icon-phone-outline"
              placeholder="请输入联系方式"
              v-model="editForm.tel"
            ></el-input>
            <el-input
              class="formInput"
              prefix-icon="el-icon-office-building"
              placeholder="请输入联系地址"
              v-model="editForm.address"
            ></el-input>
            <el-select class="formInput" v-model="editForm.status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="OkdialogVisible('editForm')">确 定</el-button>
          </span>
        </el-dialog>

        <!-- 修改用户对话框 -->

        <el-dialog title="修改用户" :visible.sync="editdialogVisible" width="30%" append-to-body>
          <el-form :model="userlist" ref="userlist" label-width="70px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="this.userlist.name" disabled></el-input>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="editdialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editdialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

        <!-- 用户操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit()">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="info">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--  
      <!-- 分页区域 
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
      -->
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //修改用户对话框
      editdialogVisible: false,
      // value1: "",
      //对话框
      dialogVisible: false,

      //获取用户列表参数对象
      queryInfo: {
        query: "",
        //当前页
        pagenum: "1",
        //当前页显示数据数
        pagesize: "2"
      },
      options: [
        {
          value: "启用",
          label: "启用"
        },
        {
          value: "禁用",
          label: "禁用"
        }
      ],

      userlist: [],
      total: 0,
      editForm: {
        guid: "",
        name: "",
        email: "",
        status: "",
        tel: "",
        address: "",
        status: ""
      }
      // tableData: []
    };
  },
  //   created() {
  //     this.getUserList();
  //   },
  methods: {
    //删除功能实现
    handleDelete: function(index) {
      this.userlist.splice(index, 1);
    },

    // //监听pagesize
    // handleSizeChange:function(newSize){
    //     //console.log(newSize)
    //     this.queryInfo.pagesize = newSize
    //     this.tableData()
    // },
    // //页码值改变事件
    // handleCurrentChange(newPage){
    //     console.log(newPage)
    // },

    //弹出框确定新增
    OkdialogVisible() {
      this.userlist.push({
        guid: this.editForm.guid,
        name: this.editForm.name,
        email: this.editForm.email,
        status: this.editForm.status,
        tel: this.editForm.tel,
        address: this.editForm.address,
        status: this.editForm.status
      });
      this.editForm = {};
      this.dialogVisible = false;
    },

    //用户数据列表的修改
    handleEdit() {
        this.$router.push({path:'/err404'})
    }
  },

  //获取用户数据列表
  created() {
    //  var vm = this
    this.$axios.get("/user/userlist").then(res => {
      // vm.userlist = resp.data.userlist
      this.userlist = res.data.data;
      // console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
.el-row {
  padding-bottom: 15px;
}
.formInput {
  margin: 5px;
  width: 220px;
}
</style>