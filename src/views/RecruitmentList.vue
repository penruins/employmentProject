<template>
  <div>

    <h2>招聘信息管理</h2>
    <el-table
      :data="tableData2"
      border
      style="width: 100%">
      <el-table-column
        fixed prop="id" label="招聘信息id" width="100">
      </el-table-column>
      <el-table-column
        fixed prop="company" label="公司名称" width="270">
      </el-table-column>
      <el-table-column
        fixed prop="jobName" label="职位名称" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="count" label="职位数量" width="100">
      </el-table-column>
      <el-table-column
        fixed prop="salary" label="薪资" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="educationBackground" label="学历" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="jobType" label="工作类型" width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
<!--          <el-button-->
<!--            @click="edit(scope.row)" type="primary" size="small">-->
<!--            查看更多-->
<!--          </el-button>-->
<!--          <el-button-->
<!--            @click="deleteUser(scope.row)" type="danger" size="small">-->
<!--            删除-->
<!--          </el-button><br>-->
          <el-button
            @click="addRoutes1(scope.row.id)" type="primary" size="small">
            修改
          </el-button>
          <el-button
            @click="deleteUser(scope.row)" type="danger" size="small">
            删除
          </el-button><br>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="size"
      :total="total"
      @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      page(currentPage) {
        const _this = this
        axios.get('http://localhost:8080/recruitment/recruitments/'+currentPage+'/10',{headers:{}}).then(function(resp) {
          console.log(resp)
          _this.tableData2 = resp.data.data.records
          _this.total = resp.data.data.total
          _this.size = resp.data.data.size
        })
      },
      addRoutes1(id) {
        this.$router.push(
          {
            path: '/contentUpdate',
            query: {
              id: id
            }
          }
        )
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
