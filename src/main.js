//入口文件
import Vue from 'vue'
import app from './App.vue'
import { Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);

var vm=new Vue({
  el:'#app',
  data:{
    selected:''
  },
  render:c=>c(app)
})