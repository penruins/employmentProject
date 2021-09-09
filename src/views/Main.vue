<template>
  <div class="about">
    <el-row>
      <el-col :span="8">
        <div>
          <h1>推荐招聘</h1>
          <template>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="information"
                label="推荐招聘">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-col>

      <el-col :span="8">
        <div>
          <h1>This is an about page</h1>
        </div>
      </el-col>

      <el-col :span="8">
        <div>
          <h1>This is an about page</h1>
        </div>
      </el-col>

    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            information: '铜陵市铜瑞劳务有限公司',
          },
          {
            information: '上海东蒙机械工程设备有限公司',
          },
          {
            information: '深圳市酷看文化传播有限公司',
          },
          {
            information: '山东德仁四方人才发展集团有限',
          },
          {
            information: '铜陵市铜瑞劳务有限公司',
          },
          {
            information: '上海东蒙机械工程设备有限公司',
          },
          {
            information: '深圳市酷看文化传播有限公司',
          },
          {
            information: '山东德仁四方人才发展集团有限',
          }
        ]
      }
    }
  }
</script>
