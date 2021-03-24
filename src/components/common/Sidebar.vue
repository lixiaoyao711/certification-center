<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index" :class="threeItem.icon">{{
                  threeItem.title
                }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  data() {
    return {
      collapse: false,

      // -----------------items为一级菜单subs为二级菜单-----------------------
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'index',
          title: '系统首页'
        },
        {
          icon: 'iconfont icon-yonghuguanli',
          index: '2',
          title: '用户管理',
          subs: [
            {
              // icon: 'iconfont icon-leibi',
              index: 'organization',
              title: '组织架构管理'
            },
            {
              icon: '',
              index: 'userInfo',
              title: '用户信息管理'
            },
            {
              icon: '',
              index: 'defaultroleinfo',
              title: '中心默认角色管理'
            }
          ]
        },
        {
          icon: 'iconfont icon-yunyingyongquanxianguanli',
          index: '3',
          title: '应用管理',
          subs: [
            {
              icon: '',
              index: 'categoryinfo',
              title: '类别管理'
            },
            {
              icon: '',
              index: 'accessinfo',
              title: '接入管理'
            },
            {
              icon: '',
              index: 'customroleinfo',
              title: '自定义角色管理'
            }
          ]
        },
        {
          icon: 'iconfont icon-quanxian',
          index: '4',
          title: '权限管理',
          subs: [
            {
              icon: '',
              index: 'orgauthority',
              title: '组织部门权限'
            },
            {
              icon: '',
              index: 'roleauthority',
              title: '角色权限'
            },
            {
              icon: '',
              index: 'userauthority',
              title: '用户权限'
            },
            {
              icon: '',
              index: 'appauthority',
              title: '应用权限'
            }
          ]
        },
        {
          icon: 'iconfont icon-xitongguanli',
          index: '5',
          title: '系统管理',
          subs: [
            {
              icon: '',
              index: 'dictionaryinfo',
              title: '字典管理'
            },
            {
              icon: '',
              index: 'loginfo',
              title: '日志管理'
            }
          ]
        },
        {
          icon: 'iconfont icon-jiekou',
          index: '6',
          title: '暴露接口',
          subs: [
            {
              icon: '',
              index: 'oauth2.0',
              title: 'oauth2.0'
            },
            {
              icon: '',
              index: 'mobileauthority',
              title: '应用权限相关'
            },
            {
              icon: '',
              index: 'appgetdata',
              title: '应用数据相关'
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 205px;
}
.sidebar > ul {
  height: 100%;
}
</style>
