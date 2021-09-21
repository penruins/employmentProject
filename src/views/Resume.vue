<template>
  <div>
    <el-divider/>
    <h1>个人简历</h1>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="130px" class="demo-ruleForm" size="mini"
      style="padding-top: 50px;padding-left: 100px;padding-right: 100px">
      <h2>基本信息</h2>
      <el-row>
        <el-col span="6">
          <el-form-item label="姓名">
            <el-input v-model="dengmiQueryForm.mimian"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="电话号码">
            <el-input v-model="dengmiQueryForm.mimu"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="邮箱">
            <el-input v-model="dengmiQueryForm.mige"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="出生日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="dengmiQueryForm.midi"></el-date-picker>
<!--            <el-input v-model="dengmiQueryForm.midi"></el-input>-->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="毕业时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="dengmiQueryForm.midi"></el-date-picker>
<!--            <el-input v-model="dengmiQueryForm.zuozhe"></el-input>-->
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="国家/地区">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="籍贯">
            <el-input v-model="dengmiQueryForm.midi"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="证件类型">
            <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="证件号码">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="期望月薪">
            <el-input v-model="dengmiQueryForm.midi"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="期望年薪">
            <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="政治面貌">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-col span="6">
        <el-form-item label="民族">
          <el-input v-model="dengmiQueryForm.midi"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="6">
        <el-form-item label="资格证书">
          <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="6">
        <el-form-item label="爱好特长">
          <el-input v-model="dengmiQueryForm.midiLength"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="6">
        <el-form-item label="紧急联系人姓名">
          <el-input v-model="dengmiQueryForm.midiLength"></el-input>
        </el-form-item>
      </el-col>
      <el-row>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="紧急联系人电话">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="英语等级">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="英语登记成绩">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="QQ">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="微信">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="现居住地">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="意向工作地">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="邮寄地址">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <el-form-item label="是否接受海外工作">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="6">
          <el-form-item label="招聘信息来源">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider/>
      <h2>教育背景</h2>
      <el-row>
        <el-col span="8">
          <el-form-item label="学校名称">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学校所在地">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学号">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="专业排名">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="院系名称">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="专业名称">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="学历">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学习形式">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="学位">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="研究方向">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="实验室">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="研究方向">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="论文发表等级">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="导师">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider/>
      <h2>实践活动</h2>
      <el-form-item label="实践活动" prop="desc">
        <el-input type="textarea" v-model="dengmiQueryForm.midiLength"></el-input>
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
              recruitment: [],
              dengmiQueryForm: {
                mimian:'',
                mimu:'',
                mige:'',
                midi:'',
                zuozhe:'',
                midiLength:''
              }
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
          }
        },
      created() {
        this.getParams()
        this.getRecruitment()
      },
    }
</script>
