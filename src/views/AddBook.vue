
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="书名" prop="name" style="width:40%">
    <el-input v-model="ruleForm.name" placeholder="请输入书名"></el-input>
  </el-form-item>
  <el-form-item label="作者" prop="author" style="width:40%">
    <el-input v-model="ruleForm.author" placeholder="请输入作者"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    name: 'addbook',
    data() {
      return {
        ruleForm: {
          name: '',
          author:''
        },
        rules: {
          name: [
            { required: true, message: '请输入书名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请选择作者', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this;
            this.$axios.put('https://mobile-ms.uat.homecreditcfc.cn/mock/610919c15a76d800278617ab/book/update').then(function(resp) {
                _this.$alert('添加成功', '消息', {
                  confirmButtonText: '确定',
                  callback: action => {
                    _this.$router.push('/searchbook')
                  }
                });
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    // mounted () {
    //   window.document.title = '添加图书'
    // }
  }
</script>

<style>

</style>
