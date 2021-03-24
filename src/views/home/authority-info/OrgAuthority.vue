<template>
  <div>
    <!-- 面包屑导航 -->
    <Breadcrumb :BreadcrumbList="BreadcrumbList" />
    <el-card>
      <!-- 搜索框 -->
      <SearchBar :btnName="addInfo" @btnAddInfo="btnAddInfo" @searchData="searchData" />
    </el-card>
  </div>
</template>
<script>
import Breadcrumb from 'components/common/Breadcrumb.vue';
import SearchBar from 'components/common/SearchBar.vue';
export default {
  name: 'DefaultRoleInfo',
  //数据
  data() {
    return {
      BreadcrumbList: ['权限管理', '部门权限管理'],
      addInfo: '新增部门权限'
    };
  },
  //组件传值
  props: {},
  //方法
  methods: {
    btnAddInfo() {
      console.log('我是组织机构组件的新增');
    },
    searchData() {
      console.log('我是组织机构组件的搜索');
    }
  },
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
