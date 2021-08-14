
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="id" prop="id" style="width:40%">
    <el-input v-model="ruleForm.id" :readonly="true"></el-input>
  </el-form-item>
  <el-form-item label="书名" prop="name" style="width:40%">
    <el-input v-model="ruleForm.name" placeholder="请输入书名"></el-input>
  </el-form-item>
  <el-form-item label="作者" prop="author" style="width:40%">
    <el-input v-model="ruleForm.author" placeholder="请输入作者"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    name: 'modification',
    data() {
      return {
        ruleForm: {
          id:'',
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
            this.$alert('修改成功', '消息', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$router.push('/searchbook')
                  }
                });
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
    created () {
        const _this = this;
        this.$axios.post('https://mobile-ms.uat.homecreditcfc.cn/mock/610919c15a76d800278617ab/book/savepost',this.$route.query.id).then(function(resp) {
            _this.ruleForm.id = _this.$route.query.id;
            _this.ruleForm.name = _this.$route.query.name;
            _this.ruleForm.author = _this.$route.query.author;
        })
    },
    // mounted () {
    //   window.document.title = '修改图书'
    // }
  }
</script>

<style>

</style>
