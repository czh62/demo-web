<template>
  <div class="page-wrapper flex-vertical">
    <div class="app-container fill">
      <el-row>
        <el-col :span="24">
          <el-text style="font-size: 2em">公告</el-text>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in noticeData" :key="item">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<style>
.app-container {
  text-align: center;
}

.el-row {
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 20px;
  margin: 30px;
  text-align: center;
}
.el-carousel__item p {
  color: #475669;
  opacity: 0.75;
  line-height: 20px;
  margin-inline: 50px;
  text-indent:2em;
  text-align: left;
}

.el-carousel__item:nth-child(2n) {
  background-color: var(--el-color-info-light-5);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: var(--el-color-info-light-7);
}
</style>


<script setup>
defineOptions({ name: 'PageHome' })

const noticeData = ref([{
  title: '公告1',
  content: '这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容这是公告1的内容'
}, {
  title: '公告2',
  content: '这是公告2的内容'
}])
</script>
