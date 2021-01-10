<style lang="scss" scoped>
.depart{
  display: flex;
  .search-tree{
    width: 300px;
    padding: 15px;
    border-right: solid 1px #DEE0E3;
  }
  .depart-content{
    width: calc(100% - 300px);
    padding: 0 20px;
  }
}
</style>
<template>
<div class="depart">
  <div class="search-tree"> 
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
  <div class="depart-content">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="姓名" name="1">
        <div>人员XX</div>
      </el-collapse-item>
      <el-collapse-item title="部门" name="2">
        <div>XXXX部门</div>
      </el-collapse-item>
      <el-collapse-item title="简介" name="3">
        <p>
          在校期间遵守校纪校规，尊敬老师，吃苦耐劳，先后被评为“优秀团员”，“优秀班干”，“优秀团干”，“三好学生”等一系列的光荣称号。在思想上积极要求进步，早就向党组织递交了入党申请书，并定时参加双学小组学习。担任班级团支书期间，工作勤勤恳恳，尽心尽力，在生活中乐于助人，团结同学，主动帮助其他有困难的同学。
        </p>
        <br/>
        <p>
          在学习上认真刻苦，上课专心听讲，认真完成老师布置的各项作业，成绩名列班级前茅，在专业知识学习上努力认真。
在专业技术方面，虚心地向学校的各位老师学习，加强技能训练，经常参加校、系组织的各项活动，在校组织的雕刻比赛中获得一等奖、系水果拼盘比赛获得二等奖，在07年江苏省中等职业学校学生技能比赛中，冷拼和热炒分别获得第二名的好成绩，并获得高级工的荣誉称号，且有幸代表江苏省参加中国职业学校技能比赛。
        </p>
      </el-collapse-item>
      <el-collapse-item title="联系方式" name="4">
        <div>手机：111111111111</div>
        <div>邮箱：wwwwwwwwwwwwwwwwwwwwwww</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>
</template>

<script>
export default {
  name: 'Department',
  components: {
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
    },
    handleChange(val) {
    }
  },

  data() {
    return {
      activeNames: ['1','2','3','4'],
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
    };
  }
}
</script>
