<template>
  
  <div>
        <div  class="app-container">
        <!--顶部Header区域-->
      <mt-header fixed title="黑马程序猿"></mt-header>
        <!--中部路由router-view区域-->
        <!--底部Tabbar区域-->
        <h1>这是APP组件</h1>
      </div>
      
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索 </span>
			</a>
		</nav>
  </div>
</template>
<script>

</script>
<style scoped>
.app-container{
  padding-top: 40px;
}

</style>>
  
