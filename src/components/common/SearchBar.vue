<template>
  <el-card>
    <el-row>
      <el-col :span="6" class="search-col">
        <!-- 搜索功能需要每次搜索的时候将page重置为1 -->
        <el-input v-model="query" @input="searchData" placeholder="请输入内容" class="input-with-select" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button v-if="btnName" type="primary" @click="btnAddInfo">{{ btnName }}</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  name: 'SearchBar',
  //数据
  data() {
    return {
      query: ''
    };
  },
  //组件传值
  props: {
    btnName: {
      type: String,
      default: ''
    }
  },
  //方法
  methods: {
    btnAddInfo() {
      this.$emit('btnAddInfo');
    },
    searchData() {
      this.$emit('searchData');
    }
  },
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
<style lang="less" scoped>
.search-col {
  margin-right: 10px;
}
</style>
