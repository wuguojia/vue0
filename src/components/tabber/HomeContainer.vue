<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../img/menu1.png" >
		                    <div class="mui-media-body">新闻资讯</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                     <img src="../../img/menu2.png" >
		                    <div class="mui-media-body">图片分享</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu3.png" >
		                    <div class="mui-media-body">商品购买</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu4.png" >
		                    <div class="mui-media-body">留言反馈</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu5.png" >
		                    <div class="mui-media-body">视频专区</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../img/menu6.png" >
		                    <div class="mui-media-body">联系我们</div></router-link ></li>
		            
		        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created(){
        this.getLunBoTu()
    },
    methods:{
        getLunBoTu(){
            // this.$http.get('./img/12.img').then(result=>{
            //     if(result.body.status==0){
            //         this.lunbotuList=result.body.message
            //     }else{
            //         Toast('失败')
            //     }
            // })
        }
    }
}
</script>
<style lang='scss'scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: green;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border:0;
        img{
        width: 60px;
        height: 60px;
            }
        .mui-media-body{
            font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
    
</style>