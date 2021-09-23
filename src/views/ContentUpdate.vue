<template>
  <div>
    <el-divider/>
    <h1>个人简历</h1>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="130px" class="demo-ruleForm" size="mini"
      style="padding-top: 50px;padding-left: 100px;padding-right: 100px">
      <h2>基本信息</h2>
      <el-row>
        <el-col span="8">
          <el-form-item label="id">
            <el-input v-model="recruitment.id"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="公司名称">
            <el-input v-model="recruitment.company"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="职位名称">
            <el-input v-model="recruitment.jobName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="薪资">
            <el-input v-model="recruitment.salary"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="工作地址">
            <el-input v-model="recruitment.location"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学历要求">
            <el-input v-model="recruitment.educationBackground"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="工作经验">
            <el-input v-model="recruitment.experienceYear"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="工作类型">
            <el-input v-model="recruitment.jobType"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="职位数量">
            <el-input v-model="recruitment.count"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="第一语言">
            <el-input v-model="recruitment.firstLanguage"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="16">
          <el-form-item label="标签">
            <el-input v-model="recruitment.tags"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="其他要求">
        <el-input type="textarea" v-model="recruitment.description"></el-input>
      </el-form-item>

      <el-button type="primary" @click="update" icon="">修改</el-button>
      <el-divider/>

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
                responseResult: [],
              id: '',
              recruitment: [],
            }
        },
        methods: {
          getRecruitment() {
            const _this = this
            axios.get('http://localhost:8080/recruitment/recruitment/'+_this.id,{headers:{}}).then(function(resp) {
              console.log(resp)
              _this.recruitment = resp.data.data
              _this.recruitment.tags = _this.recruitment.tags.join(" ")
              console.log(_this.recruitment)
            })
          },
          getParams() {
            this.id = this.$route.query.id
            console.log(this.id);
          },
          update() {
            const _this = this
            axios.put('http://localhost:8080/recruitment/recruitment/update/'+this.id,
              this.recruitment).then(function(resp) {
              console.log(resp.data.code == 0)
              if (resp.data.code == 0) {
                _this.$message('修改成功');
                _this.$router.push('/recruitmentList')
              } else {
                _this.$message('修改失败');
              }
            })
          },
        },
      created() {
        this.getParams()
        this.getRecruitment()
      },
    }
</script>
