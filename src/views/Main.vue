<template>
  <div class="about">
    <el-row>
      <el-col :span="8">
        <div>
          <h1>语言分类</h1>
          <el-button style="padding: 10px">英语</el-button>
          <el-button style="padding: 10px">日语</el-button>
          <el-button style="padding: 10px">法语</el-button>
          <el-button style="padding: 10px">俄语</el-button>
          <div style="padding: 3px"></div>
          <el-button style="padding: 10px">韩语</el-button>
          <el-button style="padding: 10px">葡语</el-button>
          <el-button style="padding: 10px">西语</el-button>
          <el-button style="padding: 10px">德语</el-button>
          <div style="padding: 3px"></div>
          <el-button style="padding: 10px">泰语</el-button>
          <el-button style="padding: 10px">越语</el-button>
          <el-button style="padding: 10px">印尼语</el-button>
          <el-button style="padding: 10px">德语</el-button>
          <div style="padding: 3px"></div>
          <div style="padding: 6px"></div>
          <el-image
            style="width: fit-content; height: 100px"
            src="http://static.jobeast.com/pc/images/bg_comAD_map_C.jpg"
            :fit="fit"></el-image>
          <div style="padding: 3px"></div>
          <el-image
            style="width: fit-content; height: 100px"
            src="http://static.jobeast.com/pc/images/bg_comAD_map_C.jpg"
            :fit="fit"></el-image>
          <div style="padding: 3px"></div>
          <el-image
            style="width: fit-content; height: 100px"
            src="http://static.jobeast.com/pc/images/bg_comAD_map_C.jpg"
            :fit="fit"></el-image>
        </div>
      </el-col>
      <el-col :span="16" style="padding: 23px">
        <div>
          <el-tabs @tab-click="handleClick" active-name="first">
            <el-tab-pane label="急聘职位" name="first">
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
              </el-table>

            </el-tab-pane>
            <el-tab-pane label="高薪职位" name="second">
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="最新职位" name="third">
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="最新单位" name="fourth">
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="information"
                  label=""
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="24" style="padding: 50px; border: #e0e0e0;">
        <template>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="information"
              label="推荐招聘"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.information}}</a>
              </template>
            </el-table-column>
          </el-table>
        </template>
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
            url: 'https://www.baidu.com',
          },
          {
            information: '上海东蒙机械工程设备有限公司',
            url: 'https://www.baidu.com',
          },
          {
            information: '深圳市酷看文化传播有限公司',
            url: 'https://www.baidu.com',
          },
          {
            information: '山东德仁四方人才发展集团有限',
            url: 'https://www.baidu.com',
          },
          {
            information: '铜陵市铜瑞劳务有限公司',
            url: 'https://www.baidu.com',
          },
          {
            information: '上海东蒙机械工程设备有限公司',
            url: 'https://www.baidu.com',
          },
          {
            information: '深圳市酷看文化传播有限公司',
            url: 'https://www.baidu.com',
          },
          {
            information: '山东德仁四方人才发展集团有限',
            url: 'https://www.baidu.com',
          }
        ],
        id: '',
        total: null,
        size: null,
        tableData2: []
      }
    },
    methods: {
      page(currentPage) {
        const _this = this
        axios.get('http://localhost:8080/recruitment/recruitments/'+currentPage+'/10',{headers:{}}).then(function(resp) {
          console.log(resp)
          _this.tableData2 = resp.data.data.records
          _this.total = resp.data.data.total
          _this.size = resp.data.data.size
        })
      }
    },
    created() {
      this.page(1)
      console.log(this.tableData2)
    },
  }
</script>
