<template>
  <div class="page-wrapper flex-vertical">
    <div class="app-container fill">
      <el-row>
        <el-col :span="2" :offset="21">
          <el-button
            style="float: right"
            type="primary"
            @click="addDialogVisible = true"
            v-if="showAdd">添加
          </el-button>
        </el-col>
      </el-row>
      <el-row v-loading="loading">
        <el-col :span="24">
          <el-table :data="tableData" style="width: 100%">
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
          />
        </el-col>
      </el-row>
      <el-dialog
        v-model="addDialogVisible"
        title="添加"
        width="500" center
        :before-close="handleClose"
      >
        <el-form :model="form" label-width="auto">
          <el-form-item label="用户名">
            <el-input v-model="form.userName" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item label="用户角色">
            <el-select v-model="form.userType" placeholder="请选择">
              <el-option label="管理员" value="ADMIN" />
              <el-option label="车辆制造商" value="VEHICLE_MANUFACTURER" />
              <el-option label="汽车经销商" value="VEHICLE_DEALER" />
              <el-option label="车主用户" value="VEHICLE_OWNER" />
            </el-select>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="addDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleAdd">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import request from '@/utils/request'
import { ElMessageBox } from 'element-plus'

defineOptions({ name: 'userManagement' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)
const showAdd = ref(false)
const addDialogVisible = ref(false)
const form = ref({
  userName: '',
  password: '',
  userType: '',
  email: '',
  phone: ''
})

const handleClose = (done) => {
  addDialogVisible.value = false
  form.value = {
    userName: '',
    password: '',
    userType: '',
    email: '',
    phone: ''
  }
  done()
}

const handleAdd = () => {
  ElMessageBox.confirm('功能暂未开放，请联系管理员。')
    .then(() => {
    })
    .catch(() => {
    })
}

const fetchData = () => {
  loading.value = true
  request({
    url: 'api/permissionCheck',
    method: 'post',
    contentType: 'application/json',
    data: {
      name: 'userManagement'
    }
  }).then(response => {
    showAdd.value = response.data
    request({
      url: 'api/userList',
      method: 'post'
    }).then(response => {
      tableData.value = response.data.userList
      count.value = response.data.userCount
    }).catch(error => {

    }).finally(() => {
      loading.value = false
    })
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
