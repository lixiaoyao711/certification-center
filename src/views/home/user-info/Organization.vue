<template>
  <div>
    <!-- 面包屑导航 -->
    <Breadcrumb :BreadcrumbList="BreadcrumbList" />
    <el-card>
      <!-- 搜索框 -->
      <SearchBar :btnName="addOrg" />
      <!-- 树结构控件 -->
      <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
        >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <button class="append" size="mini" @click="append(data)">
              +
            </button>
            <button size="mini" @click="remove(node, data)">
              -
            </button>
          </span>
        </span>
      </el-tree>
    </el-card>
  </div>
</template>
<script>
let id = 1000;
import Breadcrumb from 'components/common/Breadcrumb.vue';
import SearchBar from 'components/common/SearchBar.vue';
export default {
  name: 'Organization',
  //数据
  data() {
    return {
      BreadcrumbList: ['用户管理', '组织架构管理'],
      addOrg: '添加组织架构',
      data: [
        {
          id: 1,
          label: '一级部门',
          children: [
            {
              id: 4,
              label: '二级部门1',
              children: [
                {
                  id: 9,
                  label: '三级部门1'
                },
                {
                  id: 10,
                  label: '三级部门2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级部门2',
          children: [
            {
              id: 5,
              label: '二级部门1'
            },
            {
              id: 6,
              label: '二级部门2'
            }
          ]
        },
        {
          id: 3,
          label: '一级部门3',
          children: [
            {
              id: 7,
              label: '二级部门1'
            },
            {
              id: 8,
              label: '二级部门2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  //组件传值
  props: {},
  //方法
  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
      console.log(data);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
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
<style lang="less" scoped>
.append {
  margin-right: 10px;
}
</style>
