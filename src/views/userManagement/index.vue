<template>
  <div class="page-wrapper flex-vertical">
    <div class="app-container fill">
      <el-row>
        <el-col :span="2" :offset="22">
          <el-button
            style="float: right"
            type="primary"
            @click="">Add
          </el-button>
        </el-col>
      </el-row>
      <el-row v-loading="loading">
        <el-col :span="24">
          <el-table :data="tableData" style="width: 100%" height="500">
            <el-table-column fixed prop="userName" label="用户名" min-width="120">
              <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                  <template #default>
                    <div>手机号: {{ scope.row.phone }}</div>
                    <div>邮箱: {{ scope.row.email }}</div>
                  </template>
                  <template #reference>
                    <el-text>{{ scope.row.userName }}</el-text>
                  </template>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column prop="userType" label="用户角色" min-width="120" />
            <el-table-column prop="phone" label="手机号" min-width="120" />
            <el-table-column prop="email" label="邮箱" min-width="120" />
          </el-table>
          <el-pagination
            style="justify-content: flex-end; margin-top: 20px"
            layout="prev, pager, next"
            :total="count"
            hide-on-single-page
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import request from '@/utils/request'

defineOptions({ name: 'userManagement' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)

const fetchData = () => {
  loading.value = true
  request({
    url: 'api/userList',
    method: 'post'
  }).then(response => {
    count.value = response.data.userCount
    tableData.value = response.data.userList
  }).catch(error => {

  }).finally(() => {
    loading.value = false
  })
}

fetchData()
</script>

<style>
.el-row {
  margin-top: 20px;
}
</style>
