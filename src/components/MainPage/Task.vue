<style lang="scss" scoped>
.task{
  display: flex;
  position: relative;
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
    line-height: 60px;
    padding: 0 15px;
    border-bottom: solid 1px #DEE0E3;
    text-align: right;
    p{
      font-size: 16px;
    }
  }
  .content-panel{
    height: calc(100% - 60px);
  }
  .operation{
    margin-top: 10px;
    padding: 15px;
    text-align: center;
    *{
      width: 100%;
      margin: 5px 0;
    }
  }
  .current-p{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px 15px;
  }
}
.el-select1{
  width: 110px;
}
</style>
<template>
<div class="task">
  <div class="tool-panel">
    <span>&nbsp;&nbsp;&nbsp;&nbsp;计划类型： </span>
    <el-select v-model="timeValue" placeholder="请选择" class="el-select1">
      <el-option v-for="item in timeOption" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <div class="operation" v-if="timeValue == 'year'">
      <el-button type="primary">新增年度计划</el-button>
    </div>
    <div class="operation" v-if="timeValue == 'quarter'">
      <el-date-picker
        v-model="monthRange"
        type="monthrange"
        range-separator=""
        start-placeholder="开始月"
        end-placeholder="结束月">
      </el-date-picker>
      <el-button type="primary">新增季度计划</el-button>
    </div>
    <div class="current-p">
      <span>当前成员：XXX</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" icon="el-icon-edit" circle @click="personChange = true;"></el-button>
    </div>
  </div>
  <div class="task-panel">
    <div class="tool-bar">
      <p>
        <label>年度总目标：XXXXXXXX</label>
      </p>
    </div>
    <div class="content-panel">
      <Year v-if="timeValue == 'year'"></Year>
      <Quarter v-if="timeValue == 'quarter'"></Quarter>
      <Month v-if="timeValue == 'month'"></Month>
    </div>
  </div>
  <el-dialog
      class="dialog-style"
      title="切换成员"
      :visible.sync="personChange"
      width="500px">
      <div>
        <el-input
          placeholder="输入关键字查找"
          v-model="filterText">
        </el-input>
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree">
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="personChange = false">取 消</el-button>
        <el-button type="primary" @click="personChange = false">确 定</el-button>
      </span>
    </el-dialog>
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
      timeValue: 'year',
      monthRange: '',
      personChange: false,

      filterText: '',
      data: [{
        label: '爻象',
        children: [{
          label: '部门1',
          children: [{
            label: '人员1'
          }, {
            label: '人员2'
          }, {
            label: '人员3'
          }, {
            label: '人员4'
          }, {
            label: '人员5'
          }]
        },{
          label: '部门2',
          children: [{
            label: '人员1'
          }, {
            label: '人员12'
          }]
        },{
          label: '部门3',
          children: [{
            label: '人员1'
          }, {
            label: '人员2'
          }, {
            label: '人员3'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
	  }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>
