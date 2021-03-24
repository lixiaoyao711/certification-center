<template>
  <div>
    <!-- 面包屑导航 -->
    <Breadcrumb :BreadcrumbList="BreadcrumbList" />
    <el-card>
      <!-- 搜索框 -->
      <SearchBar :btnName="addInfo" />
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
      BreadcrumbList: ['用户管理', '中心默认角色管理'],
      addInfo: '新增默认角色'
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
