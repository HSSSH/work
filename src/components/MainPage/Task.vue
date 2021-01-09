<style lang="scss" scoped>
.task{
  display: flex;
  .tool-panel{
    width: 250px;
    padding: 15px;
    background-color: #F8F9FB;
  }
  .task-panel{
    width: calc(100% - 250px);
  }
  .tool-bar{
    height: 60px;
    border-bottom: solid 1px #DEE0E3;
  }
  .content-panel{
    height: calc(100% - 60px);
  }
}
</style>
<template>
<div class="task">
  <div class="tool-panel">
    <el-input v-model="person" placeholder="请输入内容"></el-input>
    <el-select v-model="timeValue" placeholder="请选择">
      <el-option v-for="item in timeOption" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <!-- <el-date-picker v-model="value3" type="year" placeholder="选择年">
    </el-date-picker> -->
  </div>
  <div class="task-panel">
    <div class="tool-bar">

    </div>
    <div class="content-panel">
      <Year v-if="timeValue == 'year'"></Year>
      <Quarter v-if="timeValue == 'quarter'"></Quarter>
      <Month v-if="timeValue == 'month'"></Month>
    </div>
  </div>
</div>
</template>

<script>
import Year from "@/components/MainPage/Task/Year";
import Quarter from "@/components/MainPage/Task/Quarter";
import Month from "@/components/MainPage/Task/Month";

export default {
  name: 'Task',
  components: {
    Year,
    Quarter,
    Month
  },
  data () {
    return {
      person: '',
      timeOption: [{
        value: 'year',
        label: '年度计划'
      }, {
        value: 'quarter',
        label: '季度计划'
      }, {
        value: 'month',
        label: '月计划'
      }],
      timeValue: 'year'
	  }
  },
  methods: {
  }
}
</script>
