//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import { Header,Swipe, SwipeItem} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm=new Vue({
  el:'#app',
  data:{
    selected:''
  },
  render:c=>c(app),
  router
})