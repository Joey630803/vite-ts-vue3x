<template>
  <div class="page">
    <div class="page-con">
      我是首页
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
  .page-size{
    
  }
}
.page-con{
  
}

</style>
