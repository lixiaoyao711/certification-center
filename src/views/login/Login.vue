<template>
  <div class="login-wrap" id="login-wrap">
    <canvas id="demo-canvas"></canvas>
    <div class="ms-login">
      <div class="ms-title">统一认证中心登录</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="userName">
          <el-input v-model="param.userName" placeholder="请输入用户名">
            <i slot="prepend" class="el-icon-lx-people"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="param.password"
            show-password
            @keyup.enter.native="submitForm()"
          >
            <i slot="prepend" class="el-icon-lx-lock"></i>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 请填写正确的用户名和密码</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import '../../assets/js/login/rAF';
import '../../assets/js/login/EasePack.min.js';
import { bgLogin } from '../../assets/js/login/demo-1';
export default {
  name: 'Login',
  data() {
    return {
      param: {
        userName: 'admin',
        password: '123123'
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success('登录成功');
          localStorage.setItem('ms_username', this.param.userName);
          this.$router.push('/Index');
        } else {
          this.$message.error('请输入账号和密码');
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted() {
    bgLogin();
  }
};
</script>

<style scoped>
@import '../../assets/css/login/demo.css';
@import '../../assets/css/login/component.css';
@import '../../assets/css/login/normalize.css';
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login/login.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
