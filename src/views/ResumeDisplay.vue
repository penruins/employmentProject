<template>
  <div>
    <el-row style="padding-left: 100px;border: 1px #303133">
      <el-col :span="16" style=";padding: 50px; border: #e0e0e0; text-align: left; border: 1px #303133">
        <div style="border: 1px #303133">
          <el-row>
            <el-col :span="20">
              <font size="5px">{{resume.name}}</font><br>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" plain>修改简历</el-button>
            </el-col>
          </el-row>
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>基本信息<br>
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i><font>电话号码: {{resume.telephone}}</font> &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>QQ: {{resume.qq}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>微信：{{resume.wechat}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>邮箱：{{resume.email}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>身份证号码：{{resume.cardNumber}} <br>
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>国籍：{{resume.nation}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>民族：{{resume.minzu}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>政治面貌：{{resume.politicsPerspective}} <br>
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>期望月薪：{{resume.expectMonthSalary}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>期望年薪：{{resume.expectYearSalary}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>期望工作地：{{resume.expectWorkLocation}} <br>
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>生日：{{resume.birthday}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <i class="el-icon-edit"></i>毕业时间：{{resume.graduateDate}} &nbsp&nbsp&nbsp&nbsp&nbsp
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>现居住地: {{resume.nowLocation}} <br/>
          <div style="padding: 10px"/>
          <i class="el-icon-edit"></i>邮件地址：{{resume.mailLocation}} &nbsp&nbsp&nbsp&nbsp&nbsp
<!--          更新时间：2021-09-11 &nbsp&nbsp&nbsp&nbsp&nbsp-->
<!--          142人浏览 <br>-->
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>教育背景<br>
          <div style="padding: 10px"/>
          <el-row>
            <el-col :span="8">毕业学校：{{resume.school}}</el-col>
            <el-col :span="8">学院名称：{{resume.schoolCampusName}}</el-col>
            <el-col :span="8">专业名称：{{resume.schoolCareerName}}</el-col>
          </el-row>
          <div style="padding: 10px"/>
          <el-row>
            <el-col :span="8">第一外语：{{}}</el-col>
            <el-col :span="8">最高学位：{{resume.educationBackground}}</el-col>
            <el-col :span="8">学习类型：{{resume.learningKind}}</el-col>
          </el-row>
          <el-divider/>
          <i class="el-icon-d-arrow-right"></i>能力描述<br>
          <div style="padding: 3px"/>
          {{resume.description}}
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>

    export default {
        name: 'Login',
        data () {
            return {
              id: '',
              resume: []
            }
        },
        methods: {
          getRecruitment() {
            const _this = this
            axios.get('http://localhost:8080/resume/resume/'+_this.id,{headers:{}}).then(function(resp) {
              console.log(resp)
              _this.resume = resp.data.data
              console.log(_this.resume)
            })
          },
          getParams() {
            this.id = this.$route.query.id
            console.log(this.id);
          }
        },
      created() {
        this.getParams()
        this.getRecruitment()
      },
    }
</script>
