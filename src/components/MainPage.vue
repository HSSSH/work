<style lang="scss" scoped>
.main-page{
  height: 100%;
  display: flex;
}
.left-menu{
  width: 60px;
  background-image: linear-gradient(185deg,#536080,#2e374d);
  text-align: center;
  .head{
    width: 40px;
    height: 40px;
    background: #3C76FC;
    border: solid 2px #f8f9fa;
    border-radius: 50%;
    margin: 30px auto;
    color:#f8f9fa;
    p{
      height: 100%;
      line-height: 36px;
    }
  }
  ul{
    li{
      cursor: pointer;
      .route-menu{
        display: inline-block;
        width: 100%;
        height: 100%;
        img{
          margin: 15px auto;
          width: 25px;
          opacity: 0.5;
        }
        &:hover,&.router-link-active{
          background: #3C76FC;
          img{
            opacity: 1;
          }
        }
      }
    }
  }
}
.right-content{
  width: calc(100% - 60px);
}
</style>
<template>
<div class="main-page">
  <div class="left-menu">
    <div class="head"> 
      <p>头像</p>
    </div>
    <ul>
      <li v-for="item in list" :key="item.name">
        <router-link class="route-menu" :to="item.link">
          <img :src="item.src">
        </router-link>
      </li>
    </ul>
  </div>
  <router-view class="right-content"></router-view>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
  },
  data () {
    return {
      list:[{
        name: '待办',
        src: require('@/images/icon/todo.png'),
        link: '/app/mainPage/todo'
      },{
        name: '任务',
        src: require('@/images/icon/task.png'),
        link: '/app/mainPage/task'
      },{
        name: '人员',
        src: require('@/images/icon/person.png'),
        link: '/app/mainPage/department'
      }]
	  }
  },
  methods: {
  }
}
</script>
