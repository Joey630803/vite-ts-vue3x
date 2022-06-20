<template>
  <div class="page">
    <div class="con">
      <el-form :model="formData" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { reactive } from 'vue'

  import type { FormInstance, FormRules } from 'element-plus'

  import { doLogin } from "@/api/pageRequest/doLogin";

  import {useRouter} from 'vue-router'

  const router = useRouter();

  const goHome = ()=>{
    router.push('/menu')
  }

  const formData = reactive({
    name: '',
    password: ''
  })

  defineProps<{ msg: string }>()

  const count = ref(0)

  const onSubmit = async() => {
    let loginParam = {
      name: formData.name,
      password: formData.password,
    };
    console.log('loginParam----',loginParam)
    goHome()
    // doLogin(loginParam).then((res:Object) => {
    //   console.log("doLogin----res", res);
    //   // if (res.data.err == 0) {
    //   // }
    // })
  }
</script>

<style scoped lang="scss">
.page{
  // border:1px solid green;
  height: 100vh;
  position: relative;
}
.con{
  // border:1px solid red;
  position: absolute;
  width:40rem;
  height:30rem;
  top:50%;
  left:50%;
  margin-top:-15rem;
  margin-left:-20rem;
}
</style>
