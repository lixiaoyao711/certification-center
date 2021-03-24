<template>
  <div>
    <!-- 面包屑导航 -->
    <Breadcrumb :BreadcrumbList="BreadcrumbList" />
    <el-card>
      <!-- 搜索框 -->
      <SearchBar :btnName="addUser" />
      <!-- 表格 -->
      <el-table :data="userInfoList" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="用户名" prop="userName"></el-table-column>
        <el-table-column label="昵称" prop="displayName"></el-table-column>
        <el-table-column label="所属机构" prop="organization.name"></el-table-column>
        <el-table-column label="角色" prop="role">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.role == 1" type="danger">系统管理员</el-tag>
            <el-tag v-if="scope.row.role == 2" type="warning">单位管理员</el-tag>
            <el-tag v-if="scope.row.role == 4">普通用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="170">
          <template slot-scope="scope">
            <!-- 下拉菜单 -->
            <el-dropdown placement="bottom-start">
              <el-button class="action-bar" type="primary" size="mini">
                编辑
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="userInfo">修改信息</el-dropdown-item>
                <el-dropdown-item command="password">修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import Breadcrumb from 'components/common/Breadcrumb.vue';
import SearchBar from 'components/common/SearchBar.vue';
export default {
  name: 'UserInfo',
  //数据
  data() {
    return {
      BreadcrumbList: ['用户管理', '用户信息管理'],
      addUser: '添加用户',
      userInfoList: [
        {
          userName: '张三',
          displayName: '法外狂徒',
          organization: {
            name: '西湖新基建'
          },
          role: 1
        },
        {
          userName: '李四',
          displayName: '葵花点穴手',
          organization: {
            name: '西湖新基建'
          },
          role: 2
        },
        {
          userName: '王五',
          displayName: '王麻子',
          organization: {
            name: '西湖新基建'
          },
          role: 4
        }
      ]
    };
  },
  //组件传值
  props: {},
  //方法
  methods: {},
  //计算属性
  computed: {},
  //注册组件
  components: {
    Breadcrumb,
    SearchBar
  },
  //创建前
  beforeCreate() {},
  //创建完成
  created() {},
  //挂载前
  beforeMount() {},
  //挂载完成
  mounted() {},
  //更新前
  beforeUpdate() {},
  //更新完成
  updated() {},
  //销毁前
  beforeDestroy() {},
  //销毁完成
  destoryed() {},
  //监听
  watch: {}
};
</script>
<style lang="less" scoped></style>
