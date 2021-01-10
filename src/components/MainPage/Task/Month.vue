<style lang="scss" scoped>
.day-cell{
  height: 100%;
}
.dialog-style{
  div{
    text-align: center;
    margin: 5px;
    /deep/ .el-input{
      display: inline-block;
      width: 200px;
    }
  }
}
</style>
<template>
<div>
  <el-calendar v-model="value">
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <div class="day-cell" @click="visibleChange = true;">
        <p>{{data.day.split('-')[2]}}</p>
        <p>出差</p>
      </div>
    </template>
  </el-calendar>
   <el-dialog
      class="dialog-style"
      title="修改计划"
      :visible.sync="visibleChange"
      width="500px">
      <div>
          <label>计划：</label>
          <el-input placeholder=""></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visibleChange = false">取 消</el-button>
        <el-button type="primary" @click="visibleChange = false">确 定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Month',
  components: {
  },
  data () {
    return {
      value: new Date(),
      visibleChange: false,
	  }
  },
  methods: {
    editTask(){

    }
  }
}
</script>
