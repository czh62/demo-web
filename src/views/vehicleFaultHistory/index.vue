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
            <el-table-column fixed prop="carNumber" label="车牌号" min-width="120" />
            <el-table-column prop="terminalNumber" label="终端号" min-width="200" />
            <el-table-column prop="date" label="接收时间" min-width="60" />
            <el-table-column prop="OBDProtocol" label="OBD诊断协议" min-width="200" />
            <el-table-column prop="vehicleIdentificationNumber" label="车辆识别码" min-width="120" />
            <el-table-column prop="totalFaultCode" label="故障码总数" min-width="120" />
            <el-table-column prop="validFaultCodeList" label="有效故障码列表" min-width="120" />
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

defineOptions({ name: 'vehicleFaultHistory' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)

const fetchData = () => {
  loading.value = true
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
}

fetchData()
</script>

<style>
.el-row {
  margin-top: 20px;
}
</style>
