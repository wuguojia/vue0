import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/News/NewsList.vue'
var router = new VueRouter({
  routes:[
    {
      path:'/',redirect:'/home'
    },
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
   {path:'/home/newsList',component:NewsList}
  ],
  linkActiveClass:'mui-active'
})
export default router