import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/index',
          component: () => import('views/home/Index.vue'),
          meta: { title: '系统首页' }
        },
        // --------------------用户管理---------------------
        {
          path: '/organization',
          component: () => import('views/home/user-info/Organization.vue'),
          meta: { title: '组织架构管理' }
        },
        {
          path: '/userinfo',
          component: () => import('views/home/user-info/UserInfo.vue'),
          meta: { title: '用户信息管理' }
        },
        {
          path: '/defaultroleinfo',
          component: () => import('views/home/user-info/DefaultRoleInfo.vue'),
          meta: { title: '中心默认角色管理' }
        },
        // ----------------------应用管理---------------------------
        {
          path: '/categoryinfo',
          component: () => import('views/home/app-info/CategoryInfo.vue'),
          meta: { title: '类别管理' }
        },
        {
          path: '/accessinfo',
          component: () => import('views/home/app-info/AccessInfo.vue'),
          meta: { title: '接入管理' }
        },
        {
          path: '/customroleinfo',
          component: () => import('views/home/app-info/CustomRoleInfo.vue'),
          meta: { title: '自定义角色管理' }
        },
        // -------------------------权限管理------------------------
        {
          path: '/orgauthority',
          component: () => import('views/home/authority-info/OrgAuthority.vue'),
          meta: { title: '组织部门权限 ' }
        },
        {
          path: '/roleauthority',
          component: () => import('views/home/authority-info/RoleAuthority.vue'),
          meta: { title: '角色权限' }
        },
        {
          path: '/userauthority',
          component: () => import('views/home/authority-info/UserAuthority.vue'),
          meta: { title: '用户权限' }
        },
        {
          path: '/appauthority',
          component: () => import('views/home/authority-info/AppAuthority.vue'),
          meta: { title: '应用权限' }
        },
        // ----------------------------系统管理------------------------------
        {
          path: '/dictionaryinfo',
          component: () => import('views/home/system-info/DictionaryInfo.vue'),
          meta: { title: '字典管理' }
        },
        {
          path: '/loginfo',
          component: () => import('views/home/system-info/LogInfo.vue'),
          meta: { title: '日志管理' }
        },
        // -----------------------------暴露接口------------------------
        {
          path: '/oauth2.0',
          component: () => import('views/home/exposed-api/Oauth2.0.vue'),
          meta: { title: 'oauth2.0' }
        },
        {
          path: '/mobileauthority',
          component: () => import('views/home/exposed-api/AppAuthority.vue'),
          meta: { title: '应用权限相关' }
        },
        {
          path: '/appgetdata',
          component: () => import('views/home/exposed-api/AppGetData.vue'),
          meta: { title: '应用数据相关' }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue'),
      meta: { title: '登录' }
    }
  ]
});
