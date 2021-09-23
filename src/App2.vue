<template>
  <div id="app">
    <el-menu default-active="/recruitmentList" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/recruitmentList">招聘广告管理</el-menu-item>
      <el-menu-item index="/resumeList">简历管理</el-menu-item>
<!--      <el-menu-item index="#">账号管理</el-menu-item>-->
    </el-menu>
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
