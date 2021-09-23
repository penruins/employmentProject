<template>
  <div>
    <el-divider/>
    <h1>简历投递</h1>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="130px" class="demo-ruleForm" size="mini"
      style="padding-top: 50px;padding-left: 100px;padding-right: 100px">
      <h2>基本信息</h2>
      <el-row>
        <el-col span="12">
          <el-form-item label="投递公司">
            <el-input v-model="company" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="投递岗位">
            <el-input v-model="jobName" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="姓名">
            <el-input v-model="resume.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="电话号码">
            <el-input v-model="resume.telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="邮箱">
            <el-input v-model="resume.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="国家/地区">
            <el-input v-model="resume.nation"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="证件号码">
            <el-input v-model="resume.cardNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="期望月薪">
            <el-input v-model="resume.expectMonthSalary"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="期望年薪">
            <el-input v-model="resume.expectYearSalary"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="政治面貌">
            <el-input v-model="resume.politicsPerspective"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-col span="6">
        <el-form-item label="民族">
          <el-input v-model="resume.minzu"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="6">
        <el-form-item label="QQ">
          <el-input v-model="resume.qq"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="6">
        <el-form-item label="微信">
          <el-input v-model="resume.wechat"></el-input>
        </el-form-item>
      </el-col>
      <el-row>
      </el-row>
      <el-row>
        <el-col span="12">
          <el-form-item label="现居住地">
            <el-input v-model="resume.nowLocation"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item label="邮寄地址">
            <el-input v-model="resume.mailLocation"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
      </el-row>
      <el-divider/>
      <h2>教育背景</h2>
      <el-row>
        <el-col span="8">
          <el-form-item label="学校名称">
            <el-input v-model="resume.school"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="院系名称">
            <el-input v-model="resume.schoolCampusName"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="专业名称">
            <el-input v-model="resume.schoolCareerName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="学习形式">
            <el-input v-model="resume.learningKind"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学位">
            <el-input v-model="resume.educationBackground"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider/>
      <h2>能力描述</h2>
      <el-form-item label="能力描述" prop="desc">
        <el-input type="textarea" v-model="resume.description"></el-input>
      </el-form-item>
      <el-row>
        <el-col>
          <el-button type="primary" @click="submitForm" icon="">提交简历</el-button>
        </el-col>
      </el-row>
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
              company: '',
              jobName: '',
              recruitment: [],
              resume: {
                name: '',
                telephone: '',
                qq: '',
                wechat: '',
                email: '',
                cardNumber: '',
                nation:'',
                minzu: '',
                politicsPerspective: '',
                expectMonthSalary: '',
                expectYearSalary:'',
                expectWorkLocation:'',
                birthday:'',
                graduateDate:'',
                nowLocation:'',
                mailLocation:'',
                school:'',
                schoolCampusName:'',
                schoolCareerName:'',
                educationBackground:'',
                learningKind:'',
                description:''
              }
            }
        },
        methods: {
          submitForm() {

          },
          getResume() {
            const _this = this
            axios.get('http://localhost:8080/resume/recruitment/'+_this.id,{headers:{}}).then(function(resp) {
              console.log(resp)
              _this.recruitment = resp.data.data
              console.log(_this.recruitment)
            })
          },
          getParams() {
            this.company = this.$route.query.company
            this.jobName = this.$route.query.jobName
            console.log(this.company);
            console.log(this.jobName);
          }
        },
      created() {
        this.getParams()
        // this.getRecruitment()
      },
    }
</script>
