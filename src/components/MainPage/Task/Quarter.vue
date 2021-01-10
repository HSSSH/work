<style lang="scss" scoped>
table{
  width: 100%;
  thead{
    color: #909399;
    font-weight: 500;
  }
  tr{
    background-color: #FFF;
  }
  th,td{
    padding: 12px 0;
    padding-left: 10px;
    padding-right: 10px;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #EBEEF5;
    a{
      cursor: pointer;
    }
  }
}
.search-part{
  padding: 5px 15px;
  .add-user{
    float: right;
  }
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
.center-text{
  text-align: center;
}
</style>
<template>
<div>
  <table>
    <thead>
            <tr>
                <th>计划名</th>
                <th>部门</th>
                <th>参与成员</th>
                <th>截止月份</th>
                <th>简要说明</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in planeList" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.depart}}</td>
              <td>{{item.member}}</td>
              <td>{{item.end}}</td>
              <td>{{item.brief}}</td>
              <td>
                <a>修改</a>
                &nbsp;&nbsp;
                <a>删除</a>
                &nbsp;&nbsp;
                <a>完成</a>
              </td>
            </tr>
        </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'Quarter',
  components: {
  },
  data () {
      return {
        planeList:[{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '1',
          brief: '网页线上测试',
        },{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '2',
          brief: '网页线上测试',
        },{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '2',
          brief: '网页线上测试',
        },{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '3',
          brief: '网页线上测试',
        },{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '3',
          brief: '网页线上测试',
        },{
          name: '线上测试功能',
          depart: '开发',
          member: 'HZH',
          end: '3',
          brief: '网页线上测试',
        }],
      }
  },
  created() {
  },
  methods: {
  }
}
</script>