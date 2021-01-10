<style lang="scss" scoped>
.todo{
  position: relative;
  .tool-bar{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    border-bottom: solid 1px #DEE0E3;
    text-align: right;
    p{
      font-size: 16px;
    }
  }
  ul{
    height: calc(100% - 70px);
    padding: 20px;
    overflow: auto;
    li{
      padding: 25px;
    }
  }
}
.card{
  width: 500px;
  p{
    padding: 10px 0;
    font-size: 16px;
  }
  div{
    text-align: right;
  }
}
</style>
<template>
<div class="todo">
  <div class="tool-bar">
    <p>
      <label>年度总目标：XXXXXXXX</label>
    </p>
  </div>
  <ul>
    <li v-for="(item,index) in list" :key="index" :style="{'border-top':index == 0?'none':'solid 1px #DEE0E3'}">
      <el-card class="card">
        <p>做完XXXXXXXXXXXXX</p>
        <span>截止时间：</span>2021-10-3
        <div>
          <el-button type="text" class="button">详情</el-button>
        </div>
      </el-card>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Todo',
  components: {
  },
  data () {
    return {
      list:[
        {},{},{},{},{}
      ],
      currentDate: new Date()
	  }
  },
  watch: {
  },
  methods: {
  }
}
</script>
