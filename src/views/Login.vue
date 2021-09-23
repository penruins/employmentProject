<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
      style="padding-left: 500px; padding-right: 500px; padding-top: 200px">
      <el-form-item label="账号" >
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

    export default {
        name: 'Login',
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            login () {
                var _this = this
                // console.log(this.$store.state)
                // this.$axios
                //     .post('/api/api/v1/user/login', {
                //         username: this.loginForm.username,
                //         password: this.loginForm.password
                //     })
                //     .then(successResponse => {
                //         if (successResponse.data.data.isSuccess) {
                //             _this.$store.commit('login', _this.loginForm)
                //             alert('登录成功')
                //             this.$router.push('/writeArticle')
                //         }
                //     })
                //     .catch(failResponse => {
                //     })
                this.$router.push('/app')
            },
          submitForm() {
              if((this.loginForm.username == 'admin') && (this.loginForm.password == '123456')) {
                this.$router.push('/app2')
              }
          },
        }
    }
</script>
