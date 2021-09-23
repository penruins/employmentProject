<template>
  <div>
    <div class="block" style="padding-top: 100px;padding-left: 200px;padding-right: 200px">

      <el-timeline>
        <el-timeline-item v-for="recruitment in tableData2" placement="top" style="text-align: left">
          <el-card>
            <h4>{{recruitment.company}}</h4>
            <a :href="getUrl(recruitment.id)" target="_blank">{{recruitment.jobName}}</a> &nbsp&nbsp&nbsp&nbsp&nbsp
            <i class="el-icon-top-right"></i> 薪资 {{recruitment.salary}}&nbsp&nbsp&nbsp&nbsp&nbsp
            <i class="el-icon-top-right"></i> 招聘人数 {{recruitment.count}}&nbsp&nbsp&nbsp&nbsp&nbsp<br><br>
            <el-tag effect="plain" style="margin-right: 8px" v-for="tag in recruitment.tags">{{tag}}</el-tag>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      page(currentPage) {
        const _this = this
        axios.get('http://localhost:8080/recruitment/recruitments/'+currentPage+'/10',{headers:{}}).then(function(resp) {
          _this.tableData2 = resp.data.data.records
          console.log(_this.tableData2)
          _this.total = resp.data.data.total
          _this.size = resp.data.data.size
        })
      },
      addRoutes1(id) {
        this.$router.push(
          {
            path: '/content',
            query: {
              id: id
            }
          }
        )
      },
      getUrl(id) {
        return '/content?id=' + id;
      },
      returnToMainPage() {
        this.$router.push('/')
      }
    },
    created() {
      this.page(1)
    },
    data() {
      return {
        id: '',
        total: null,
        size: null,
        tableData2: []
      }
    }
  }
</script>
