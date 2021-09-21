<template>
  <div id="app">
    <el-row >
      <el-col :span="8">
        <h2 style="font-size: 30px">招聘网站</h2>
      </el-col>
      <el-col :span="13" style="padding-top: 30px">
        <div>
          <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
        </div>
      </el-col>
      <el-col :span="3" style="padding-top: 30px">
        <div>
          <el-button type="primary">搜索</el-button>
        </div>
      </el-col>
    </el-row>

<!--    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--      <el-menu-item index="1">处理中心</el-menu-item>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">我的工作台</template>-->
<!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
<!--      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
<!--      <el-menu-item index="/login">消息中心</el-menu-item>-->
<!--    </el-menu>-->

<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
