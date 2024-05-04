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
            <el-table-column fixed prop="carNumber" label="车牌号" min-width="120" />
            <el-table-column prop="auditState" label="审核" min-width="120" />
            <el-table-column prop="vehicleIdentifyNumber" label="车架号" min-width="200" />
            <el-table-column prop="licensePlateColor" label="车牌颜色" min-width="120" />
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
          <el-form-item label="车牌号">
            <el-input v-model="form.carNumber" />
          </el-form-item>
        <el-form-item label="车架号">
            <el-input v-model="form.vehicleIdentifyNumber" />
          </el-form-item>
        <el-form-item label="车牌颜色">
            <el-input v-model="form.licensePlateColor" />
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

defineOptions({ name: 'vehicleManagement' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)
const showAdd = ref(false)
const addDialogVisible = ref(false)
const form = ref({
  carNumber: '',
  vehicleIdentifyNumber: '',
  licensePlateColor: ''
})

const handleClose = (done) => {
  addDialogVisible.value = false
  form.value = {
    carNumber: '',
    vehicleIdentifyNumber: '',
    licensePlateColor: ''
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
      name: 'vehicleManagement'
    }
  }).then(response => {
    showAdd.value = response.data
    request({
      url: 'api/vehicleList',
      method: 'post'
    }).then(response => {
      tableData.value = response.data
      count.value = tableData.value.length
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
