<template>
  <div>
    <el-row style="padding-left: 100px;border: 1px #303133">
      <el-col :span="16" style=";padding: 50px; border: #e0e0e0; text-align: left; border: 1px #303133">
        <div style="border: 1px #303133">
          <el-row>
            <el-col :span="20">
              <font size="5px">{{recruitment.jobName}}</font><br>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" plain @click="addRoutes1">投递简历</el-button>
            </el-col>
          </el-row>
          {{recruitment.company}}
          <el-divider/>
          <i class="el-icon-edit"></i><font color="#ff7f50">月薪 {{recruitment.salary}}</font> &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>工作地点/{{recruitment.location}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>学历/{{recruitment.educationBackground}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>经验/{{recruitment.experienceYear}}年 <br>
          <div style="padding: 2px"/>
          <div style="padding: 2px"/>
          更新时间：2021-09-11 &nbsp&nbsp&nbsp&nbsp&nbsp
          142人浏览 <br>
          <div style="padding: 10px"/>
          <el-tag effect="plain" style="margin-right: 8px">五险</el-tag>
          <el-tag effect="plain" style="margin-right: 8px">带薪年假</el-tag>
          <el-tag effect="plain" style="margin-right: 8px">公积金</el-tag>
          <el-tag effect="plain" style="margin-right: 8px">出差补贴</el-tag>
          <el-tag effect="plain" style="margin-right: 8px">提供住宿</el-tag>
          <el-tag effect="plain" style="margin-right: 8px">交通补贴</el-tag>
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>基本信息<br>
          <div style="padding: 3px"/>
          <el-row>
            <el-col :span="8">第一外语：{{recruitment.firstLanguage}}</el-col>
            <el-col :span="8">工作性质：{{recruitment.jobType}}</el-col>
            <el-col :span="8">招聘人数：{{recruitment.count}}人</el-col>
          </el-row>
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>任职描述与任职要求<br>
          <div style="padding: 3px"/>
          法语专业毕业均可，有刚果（金）旷工工作经验者优先<br>
          <div style="padding: 3px"/>
          <font color="#ff7f50">温馨提醒：有意者请先在线投递简历，然后电话预约！</font>
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>联系方式<br>
          联系人： 刘女士（17356582393）<br>
          地址：刚果（金）卢本巴希
        </div>

      </el-col>
      <el-col :span="8" style="padding: 50px; border: #e0e0e0; text-align: left">
        <i class="el-icon-d-arrow-right"></i>职位发布企业<br>
        <div style="padding: 10px"/>
        <div style="text-align: center">
          {{recruitment.company}}
        </div>
        <div style="padding: 10px"/>
        性质：其他<br>
        类型：海外劳务/中介<br>
        网址：<br>
        地址：{{recruitment.location}}<br>
      </el-col>
    </el-row>
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
              recruitment: []
            }
        },
        methods: {
          getRecruitment() {
            const _this = this
            axios.get('http://localhost:8080/recruitment/recruitment/'+_this.id,{headers:{}}).then(function(resp) {
              console.log(resp)
              _this.recruitment = resp.data.data
              console.log(_this.recruitment)
            })
          },
          getParams() {
            this.id = this.$route.query.id
            console.log(this.id);
          },
          addRoutes1() {
            this.$router.push(
              {
                path: '/resume',
                query: {
                  company: this.recruitment.company,
                  jobName: this.recruitment.jobName
                }
              }
            )
          }
        },
      created() {
        this.getParams()
        this.getRecruitment()
      },
    }
</script>
