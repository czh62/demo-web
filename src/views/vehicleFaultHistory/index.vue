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
            <el-table-column prop="terminalNumber" label="终端号" min-width="120" />
            <el-table-column prop="date" label="接收时间" min-width="120" />
            <el-table-column prop="obdProtocol" label="OBD诊断协议" min-width="120" />
            <el-table-column prop="vehicleIdentificationNumber" label="车辆识别码" min-width="120" />
            <el-table-column prop="totalFaultCode" label="故障码总数" min-width="120" />
            <el-table-column prop="validFaultCodeList" label="有效故障码列表" min-width="120" />
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
        <el-form-item label="终端号">
            <el-input v-model="form.terminalNumber" />
          </el-form-item>
        <el-form-item label="接收时间">
            <el-input v-model="form.date" />
          </el-form-item>
        <el-form-item label="OBD诊断协议">
            <el-input v-model="form.obdProtocol" />
          </el-form-item>
        <el-form-item label="车辆识别码">
            <el-input v-model="form.vehicleIdentificationNumber" />
          </el-form-item>
        <el-form-item label="故障码总数">
            <el-input v-model="form.totalFaultCode" />
          </el-form-item>
        <el-form-item label="有效故障码列表">
            <el-input v-model="form.validFaultCodeList" />
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

defineOptions({ name: 'vehicleFaultHistory' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)
const showAdd = ref(false)
const addDialogVisible = ref(false)
const form = ref({
  carNumber: '',
  terminalNumber: '',
  date: '',
  obdProtocol: '',
  vehicleIdentificationNumber: '',
  totalFaultCode: '',
  validFaultCodeList: ''
})

const handleClose = (done) => {
  addDialogVisible.value = false
  form.value = {
    carNumber: '',
    terminalNumber: '',
    date: '',
    obdProtocol: '',
    vehicleIdentificationNumber: '',
    totalFaultCode: '',
    validFaultCodeList: ''
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
      name: 'vehicleFaultHistory'
    }
  }).then(response => {
    showAdd.value = response.data
    request({
      url: 'api/vehicleFaultList',
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
