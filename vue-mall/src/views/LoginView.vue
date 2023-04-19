<template>
  <div class="login-box">
    
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
<!-- 直接写到表单里面 -->
    <h2>后台管理系统</h2>
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <!--<el-form-item label="Confirm" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { login } from '../request/api'
const ruleFormRef = ref<FormInstance>()

// 将value的any定义为String
const checkUser = (rule: any, value: String, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }else if (value.length < 3 || value.length > 15){
    callback(new Error("用户名长度需要在3-15之间"))
  }else {
    callback()
  }
  // if (value.length >15 || value.length <3){
  //   return callback(new Error("username length should in 3 - 15"))
  // }
  // setTimeout(() => {
  //   if (!Number.isInteger(value)) {
  //     callback(new Error('Please input digits'))
  //   } else {
  //     if (value < 18) {
  //       callback(new Error('Age must be greater than 18'))
  //     } else {
  //       callback()
  //     }
  //   }
  // }, 1000)

}

const validatePass = (rule: any, value: String, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    // if (ruleForm.checkPass !== '') {
    //   if (!ruleFormRef.value) return
    //   ruleFormRef.value.validateField('checkPass', () => null)
    // }
    // 这里的回调函数一定要加上，不然一直在验证
    callback()
  }
}



// ts会默认
const ruleForm = reactive({
  password: '',
  // checkPass: '',
  username: ''
})

const rules = reactive<FormRules>({
  password: [{ validator: validatePass, trigger: 'blur' }],
  // checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  username: [{ validator: checkUser, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // console.log('submit!')
      // 验证通过，执行登录方法
      login(ruleForm).then((res) =>{
        console.log(res);
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.login-box {
  margin: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/bg2.jpg');
  padding: 1px;
  // 文本居中
  text-align: center;
  .demo-ruleForm {
    width: 400px;
    // 设置成200有问题
    margin: 100px auto;
    background-color: rgb(239, 242, 235);
    // 与上边框的距离
    padding: 40px;
    // 设置边角圆滑
    border-radius: 20px;

  }

  h2 {
   margin-bottom: 20px; 
    // padding: 20px;
  }
}
</style>
