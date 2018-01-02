<template>
    <!-- 左侧导航 -->
    <div class="module">
    <div class="main-content-box">
        <p class="jigou">装修风格</p>
        <ul style="display: flex;width: 100%;height: 40px;border: solid 1px #e5e5e5;align-items: center;margin-bottom:30px;">
        	<li class="add" :class="{add2:imgshow==1}" @click="imgshow=1">1</li>
        	<li class="add" :class="{add2:imgshow==2}" @click="imgshow=2">2</li>
        </ul>
        <ul>
        	<li style=" width: 100%;" v-show="imgshow==1">
        			<img width="100%;" src="../../assets/dpzx/1.png"/>
        			<div style="text-align: center;display: flex;justify-content: center;align-items: center;margin-top:30px;">
                              <img src="../../assets/web/保存.png" height="53" width="260" style="cursor:pointer;" @click="save(2)">
        			</div>
        	</li>
        	<li style=" width: 100%;"  v-show="imgshow==2">
        			<img width="100%;" src="../../assets/dpzx/2.png"/>
        			<div style="text-align: center;display: flex;justify-content: center;align-items: center;margin-top:30px;">
                        <img src="../../assets/web/保存.png" height="53" width="260"  style="cursor:pointer;" @click="save(2)">
        			</div>
        	</li>
        		
       	</ul>
       	<transition name='bounce'>
					<div v-show="zhaob.c" style="z-index: 100px;text-align: center;" class="aaaa">
						<h3>{{msgname}}</h3>
					</div>
		</transition>
    </div>
    </div>

</template>
<script>
   import store from '../../store.js'
   import "../../assets/css/test.css"
  import kf from "../../components/nav.vue"
    export default {
        name: 'module',
        data: function (){
            return {
            	zhaob:{
            		c:false
            	},
              sellerID:'',
            	msgname:'',
            	imgshow:1,
              showBig:true,
                topList:['全部消息','未读消息','已读消息'],
                infoList:[],
                showDiv:false,
                showShang:false,
                showJiao:false,
                active:false,
                showInfo:false,
                showBg:0,
                logo:require('../../assets/supply/我的---副本_复制.png'),
                headerFixed : true

            }
        },
       components: {
               kf 
        },
        created: function(){
         this.getData()
        },
        methods: {
          save(savenum){
          
          	
              this.$http.post(store.state.config.apiUrlRoot + "admin/seller/decorateTheStore",{
              	 "template": savenum
              }).then((data)=>{
					this.msgname=data.body.msg
						this.zhaob.c=true
					setTimeout(()=>{
						this.zhaob.c=false
					},2000)
              })
          	

          },
             showMask(){
                this.showInfo=! this.showInfo;
            },
              changeIndex(index){
          this.showBg=index;
         },
        getData: function(){
              var that = this;
              this.$http.post(store.state.config.apiUrlRoot + "admin/user/getSellerMsg").then(
                function(response){
                var data = response.body;
                this.infoList=data.content.userInfo;
                this.sellerID=data.content.userInfo.sellerID;
                  if(data.content.userInfo.logo.length>0){
                          this.logo=data.content.userInfo.logo;
                      }
                console.log(data);
                },
                function(erro){}
              );
        },
        }
    }
</script>
<style scoped>
	.add2{
		color:#c8996b ;
	}
	.add{
		width: 80px;
		height: 30px;
		border: solid 1px #e5e5e5;
		text-align: center;
		font-weight: bold;
		line-height: 30px;
		cursor: pointer;
		background:#e5e5e5;
		margin:0 5px ; 
			}
.bigImg
{
  position: absolute;
  top: -80px;
  left: -690px;
}
.contact
{
    height: 59px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 59px;
}
.jigou-left-txt
{
    font-size: 16px;
    color: #757575;
    line-height: 50px;
    /*height: 50px;*/
}
.jigou
{
height: 59px;
line-height: 59px;
font-size: 18px;
padding-left: 25px;
border-bottom: 1px solid #e5e5e5;
}
.jigou-left
{
    padding-top: 20px;
    padding-left:25px;
    width: 600px;
    height: 870px;
    float: left;
}
.jigou-right
{
width: 236px;
height: 236px;
padding-right: 25px;
float: right;
margin-top: 20px;
position: relative;
}
.main-right
{
 margin-top: 20px;
  width: 975px;
  height: 950px;
  float: left;
  margin-left: 13px;  
  background:#ffffff;
}

</style>