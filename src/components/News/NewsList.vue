<template>
    <div>
      <!-- <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" :v-for='item in newList' :key='item.id'>
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
				
			</ul> -->

    </div>
</template>
<script>
 import {Toast} from 'mint-ui';
export default{
   
    data(){
        return {
            newList:[]
        }
    },
    created(){
        this.GetNewsList()
    },
    methods:{
        GetNewsList(){
            this.$http.get('').then(result=>{
                if(result.body.status===0) {
                    this.newList=result.body.message;
                    Toast('成功')
                }else{
                    Toast('失败')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h4{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color :#226aaf;
            display: flex;
            justify-content: space-between;//设置两端对齐
        }
    }
}
</style>