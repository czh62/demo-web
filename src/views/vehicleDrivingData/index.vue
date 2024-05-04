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
            <el-table-column fixed prop="engineStatus" label="发动机状态" min-width="120" />
            <el-table-column prop="brakeStatus" label="刹车状态" min-width="200" />
            <el-table-column prop="tirePressure" label="轮胎压力" min-width="60" />
            <el-table-column prop="mileageDriven" label="行驶里程数" min-width="200" />
            <el-table-column prop="faultInformation" label="故障与警告信息" min-width="120" />
            <el-table-column prop="pedalUsage" label="踏板使用程度" min-width="120" />
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

defineOptions({ name: 'vehicleDrivingData' })
const tableData = ref([])
const count = ref(100)
const loading = ref(false)

const fetchData = () => {
  loading.value = true
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
}

fetchData()
</script>

<style>
.el-row {
  margin-top: 20px;
}
</style>
