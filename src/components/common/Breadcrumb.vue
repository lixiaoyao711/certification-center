<template>
  <!-- 面包屑导航 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in BreadcrumbList" :key="index">{{ item }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'Breadcrumb',
  //数据
  data() {
    return {};
  },
  //组件传值
  props: {
    BreadcrumbList: {
      type: Array
    }
  },
  //方法
  methods: {},
  //计算属性
  computed: {},
  //注册组件
  components: {},
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
