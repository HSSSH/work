<style lang="scss" scoped>
.home-page{
}
</style>
<template>
<div class="home-page">
  <!-- <child @click.native="ccc"></child>
  <a href="http://www.baidu.com" @click.prevent="ccc">xxx</a>
  <div id="obj1" v-on:click.capture="doc">obj1
    <div id="obj2" v-on:click.capture="doc">obj2
        <div id="obj3" v-on:click="doc">obj3
            <div id="obj4" v-on:click="doc">obj4</div>
        </div>
    </div>
  </div> -->
  <!-- <child>
    <template slot-scope="xxxx">
      <p><h1>{{xxxx.a}}</h1></p>
    </template>
  </child> -->
  <!-- <component :is="'child2'"></component> -->
  <!-- <transition>
    <p v-if="show">hello</p>
  </transition>
  <button @click="show = !show">显示隐藏</button> -->
</div>
</template>

<script>
import Vue from 'vue';
import {yo} from 'mypackage_hzh';
// Vue.component('child',{
//   data(){
//     return {
//       list:['3',5,6,89,357,3452,2352,235]
//     }
//   },
//   template:`<div>
//               <slot v-for="item in list" :a=item></slot>
//             </div>`
// })
// Vue.component('child2',{
//   data(){
//     return {
//     }
//   },
//   template:`<div>神神道道</div>`
// })

export default {
  name: 'UserTest',
  components: {
  },
  data () {
      return {
        // show: true
      }
  },
  created() {
    // let x = {};
    // let y = Object.create(x);
    // let f = Object.getPrototypeOf(y) === y.__proto__;

    // let c = [] instanceof Array;
  },
  methods: {
    // doc(){
    //   console.log(event.currentTarget.id)
    // }
  }
}
</script>