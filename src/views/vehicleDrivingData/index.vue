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
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column fixed prop="engineStatus" label="发动机状态" min-width="120" />
            <el-table-column prop="brakeStatus" label="刹车状态" min-width="120" />
            <el-table-column prop="tirePressure" label="轮胎压力" min-width="120" />
            <el-table-column prop="mileageDriven" label="行驶里程数" min-width="120" />
            <el-table-column prop="faultInformation" label="故障与警告信息" min-width="120" />
            <el-table-column prop="pedalUsage" label="踏板使用程度" min-width="120" />
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
          <el-form-item label="发动机状态">
            <el-input v-model="form.engineStatus" />
          </el-form-item>
         <el-form-item label="刹车状态">
            <el-input v-model="form.brakeStatus" />
          </el-form-item>
         <el-form-item label="轮胎压力">
            <el-input v-model="form.tirePressure" />
          </el-form-item>
         <el-form-item label="行驶里程数">
            <el-input v-model="form.mileageDriven" />
          </el-form-item>
         <el-form-item label="故障与警告信息">
            <el-input v-model="form.faultInformation" />
          </el-form-item>
         <el-form-item label="踏板使用程度">
            <el-input v-model="form.pedalUsage" />
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

defineOptions({ name: 'vehicleDrivingData' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)
const showAdd = ref(false)
const addDialogVisible = ref(false)
const form = ref({
  engineStatus: '',
  brakeStatus: '',
  tirePressure: '',
  mileageDriven: '',
  faultInformation: '',
  pedalUsage: ''
})

const handleClose = (done) => {
  addDialogVisible.value = false
  form.value = {
    engineStatus: '',
    brakeStatus: '',
    tirePressure: '',
    mileageDriven: '',
    faultInformation: '',
    pedalUsage: ''
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
      name: 'vehicleDrivingData'
    }
  }).then(response => {
    showAdd.value = response.data
    request({
      url: 'api/vehicleDrivingDataList',
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
