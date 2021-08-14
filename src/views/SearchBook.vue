
<template>
  <div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Id"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Author"
      prop="author">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size="6"
      :current-page="cur"
      @current-change="pageChange"
      :total="12">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'searchbook',
    data() {
      return {
        tableData: [{
          id: '0',
          name: '向左',
          author: '王啊'
        }],
        search: '',
        cur:0
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({
          path:'/modi',
          query: {
            id:row.id,
            name:row.name,
            author:row.author
          }
        })
      },
      handleDelete(index, row) {
        const _this = this;
        this.$axios.delete('https://mobile-ms.uat.homecreditcfc.cn/mock/610919c15a76d800278617ab/book/delete').then(function(resp) {
          window.location.reload();
        })
      },
      pageChange(cur) {
        const _this = this;
        this.$axios.get('https://mobile-ms.uat.homecreditcfc.cn/mock/610919c15a76d800278617ab/book/findAll/'+cur+'/6').then(function(resp) {
          _this.tableData = resp.data.data
      })
      }
    },
    created () {
      const _this = this;
      this.$axios.get('https://mobile-ms.uat.homecreditcfc.cn/mock/610919c15a76d800278617ab/book/findAll/1/6').then(function(resp) {
        _this.tableData = resp.data.data
      })
    },
    // mounted () {
    //   window.document.title = '查询图书'
    // }
  }
</script>

<style>

</style>
