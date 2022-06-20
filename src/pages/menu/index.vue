<template>
  <div class="page">
    <div class="page-con">
      <!-- {{$store.state.count}} -->
      <div class="page-con-menu">
        <el-menu
        :router="true"
          :default-active="activeIndex.val"
          class="el-menu-left"
          mode="vertical"
          @select="handleSelect"
        >
          <el-menu-item :index="0" :route="{path:'/home'}">首页</el-menu-item>
          <el-menu-item :index="1" :route="{path:'/customerManage'}">客户管理</el-menu-item>
        </el-menu>
      </div>
      <div class="page-con-con">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let activeIndex = reactive({val:0})
    function addActiveIndex() {
      activeIndex.val ++;
    }
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      addActiveIndex,
      handleSelect
    };
  }
}
</script>

<style scoped lang="scss">
.page{
  height: 100vh;
}
.page-con{
  display: flex;
  .page-con-menu{
    flex:1;
    height:100vh;
    .el-menu-left{
      height:100vh;
    }
  }
  .page-con-con{
    flex:4
  }
}

</style>
