<template>
<!-- 头部导航 -->
    <div class="module">
<!--  头部导航栏结束 -->
  <div class="top" style="border:1px solid #ffffff;height:40px;display: flex;">
      <div class="" style="margin-left: 300px">
  		<img src="../assets/web/right.png" style="cursor: pointer;" @click="backgo"/>
      	<img src="../assets/img/home.png" />
      	<span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
        <router-link to="/login" v-if="showlogin">请登录</router-link>
        <span style="color:#ffffff;" v-if="!showlogin">{{msgInfo}}</span>
      </div>
      <div class="col-lg-offset-2 col-lg-3 text-center" style="margin-left:380px;">
       <a href="/" class="a_href">服务与培训</a>
        <a href="/" class="a_href">首页</a>
        <a href="http://duanhui.qianchengwl.cn/#/register" class="a_href">商家入驻</a>
        <a href="/" class="a_href">帮助中心</a>
      </div>
    </div>
 <!--    导航栏结束 -->
    <div class="row" style="padding-top: 20px; height: 130px;background:#ffffff;margin-top:-10px;" >

  <div class="col-lg-offset-2 col-sm-offset-0 col-xs-offset-0 col-lg-2 col-xs-2 col-sm-2 "> <router-link to="/"><img src="../assets/login/indexlogo.png" ></router-link>
  </div>
      <div style="padding: 0; margin-left: 70px; margin-top: 12px;" class="col-xs-2 col-sm-2 col-lg-2">
        <input type="text" style="height: 40px;border: solid 1px #C8996B;border-bottom-right-radius: 0;border-top-right-radius: 0;" class="form-control">
      </div>
      <div style="padding: 0;margin-top: 12px;" class="col-lg-1 col-xs-1 col-sm-1">
        <button style="background: #C8996B; height: 40px; position: initial;border-bottom-left-radius: 0;border-top-left-radius: 0;color: white;font-size: 14px;" class="btn btn-sm">搜索</button>
      </div>
      <div style="margin-top: 11px;">
        <img @click="loding" style="margin-left: 5%;cursor: pointer;" src="../assets/img/协议供货.png" />
        <img @click="loding2" style="margin-left: 24px; cursor: pointer;" src="../assets/img/用户中心.png" />
      </div>
      </div>
<!-- 大盒子 -->
<div class="box">
<!--     头部搜索框 -->
    <div  style="background:#ffffff;">
    <div class="content" >
      <div class="bottom">
        <div class="bottom-sort">
          <span>店铺信息</span>
        </div>
    </div>
</div>
 </div>
<!--  购物列表 -->
<div>

</div>
 <div class="sort-list" style="padding-top:30px;">
   <div class="content">
    <!-- <p class="content-text">准入商店铺信息</p> -->
    <div class="sort-top">
      <div class="caigou">
      <div class="box-left">店铺名称:</div>
      <div class="box-right">
        <span style="line-height:45px;">{{shopName}}</span>
      </div>
      </div>
      <div class="caigou" style="border-bottom:1px solid #bdbdbd;position:relative;">
      <div class="box-left">商品分类 :</div>
       <div class="brandMask" v-if="showType">
      <span   v-for="(item,index) in catList2" @click="handleGet(RR=index)" style="background:#ffffff;line-height:40px;cursor:pointer;margin-right:20px;" :class="{ft:RR==index}" >{{item.catName}}</span>
       </div>
      <div class="box-right" style="overflow:hidden;">
           <!--  <button class="brand-button"  v-for="(item,index) in catList1"  @click="handleGet1(index)" >{{item.catName}}</button> -->
              <span v-for="(item,index) in catList1" @click="handleGet1(ss=index)" :class="{ft:ss==index}" style="line-height:40px;cursor:pointer;margin-right:20px;">{{item.catName}}</span>
      </div>
      <span class="gd" style="float:right;" @click="multiType">更多</span>
      </div>
      <div class="caigou" style="border-bottom:0px solid #bdbdbd;position:relative;">
      <div class="box-left">品牌 :</div>
       <div class="brandMask" v-if="showMask">
      <span   v-for="(item,index) in brandList2" @click="getChange(BB2=index)" style="background:#ffffff;line-height:40px;margin-right:20px;cursor:pointer;" :class="{ft:BB2==index}">{{item.brandName}}</span>
       </div>
      <div class="box-right" style="overflow:hidden;">
            <span  v-for="(item,index) in brandList1" @click="getChange1(TT=index)" style="line-height:40px;margin-right:20px;cursor:pointer;" :class="{ft:TT==index}">{{item.brandName}}</span>
           <!--   <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" > -->
      </div>
        <span class="gd" style="float:right;" @click="multiSelect">更多</span>
      </div>
    </div>
     <div class="brand-price">
            <p class="brand-p">排序 :</p>
            <div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed">
                <span class="brand-price-span">价格高</span>
                <img :src="upImg" height="12" width="8">
              </div>
              <div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg">
                <span class="brand-price-span">价格低</span>
                <img :src="downImg" height="12" width="8">
              </div>
        <div class="search-price">
                <span>价格</span>
                <input type="text" name="" class="price-input" v-model="price[0]"> -
                <input type="text" name="" class="price-input" v-model="price[1]">
                <img src="../assets/hello/搜索.png" class="price-img" style="cursor:pointer;" @click="searchPrice">
              </div>
            <div class="search-price-btn">
            </div>
            </div>
            <div class="sortList">
              <ul class="sortList-ul" style="max-height:1960px;overflow:hidden;">
                 <span style="line-height:40px;padding-left:42px;font-weight:bold;color:#c8996b;font-size:16px;" v-if="this.msg==0">暂无数据......</span>
                <li class="sortList-ul-li" v-for="(item,index) in name" @click="changDetail(index)">
                  <img :src="item.titleImage" height="212" width="212">
                   <p class="brand-grid-ul-p" ><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
                   <div class="grid-txt">
                   {{item.name}}
                   </div>
                </li>
              </ul>
        <div class="page">
               <div style="margin-left: 30%;width:600px;"><span v-html="'共有'+msg+'条记录,当前第'+dqy+'页'"></span><button @click="prin" style="margin: 18px 8px;">上一页</button><button @click="next">下一页</button>到第<input v-model="msgs" style="width: 35px;" type="text" />页<button @click="bolck">确定</button></div>
       </div>
            </div>
     </div>
   </div>
 </div>
<!--  主要内容结束 -->
<!-- 搜索框结束 -->
<!--        大盒子结束 -->
 </div>
</div>
</template>
<script>
import store from '../store.js'
    export default {
        name: 'module',
        data: function (){
            return {
              TT:-1,
              BB2:-1,
              ss:-1,
              RR:-1,
              price:[],
              status:'',
              showlogin:true,
              msgInfo:'',
              pro:[{},{},{},{},{}],
              brandList1:[],
              brandList2:[],
              catID:'',
              brandID:'',
              productList:[],
              catList:[],
              catList1:[],
              catList2:[],
              showType:false,
              shopName:'',
              sellerID:'',
              a: ['服务与培训', '首页', '商家入驻', '帮助中心'],
               navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
               searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
              listImg:require('../assets/hello/矩形-36-拷贝-5_49.png'),
              upImg:require('../assets/hello/形状-10-拷贝-2.png'),
              downImg:require('../assets/hello/形状-10-拷贝.png'),
               isActive:false,
               isAc:false,
              brandList:[],
              showMask:false,
               data:[],
                 name: [],
                 msg: 0, //数量总数
                datasize: 30, //每页显示数据量(-1)
                dqy: 1, //页数
                msgs:0
            }
        },
        created: function(){
            this.getData();
            this.getWork();
            this.sellerID=this.$route.query.sellerID;
            // $(window).scrollTop(0);
        },
        methods: {
        	backgo(){
        		window.history.go(-1)
        	},
          pai(){
                this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice',{price:[],status:this.status,sellerID:this.$route.query.sellerID,catID:this.catID,brandID:this.brandID}).then(function(response){
                    var data=response.body;
                    if(data.code=1){
                      this.name=data.content.productList;
                    }
                   },
                    function(erro){
                      console.log(erro);
                    });
          },
            searchPrice(){
                   // if(this.price1){}
                   var arr3=[]
                   if(this.price.length>0){
                   var arr= Number(this.price[0]);
                   var arr1=Number(this.price[1]);
                   arr3=[arr,arr1];
                   }else{
                      arr3=[]
                   }
                   this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice',{price:arr3,status:"",sellerID:this.$route.query.sellerID,catID:this.catID,brandID:this.brandID}).then(function(response){
                    var data=response.body;
                    if(data.code=1){
                     this.data=data.content.productList;
                     this.name=data.content.productList;
                    this.msg=this.name.length;
                    }
                   },
                    function(erro){});
      },
          getWork(){
                  this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
                    function(response){
                      var data=response.body;
                      if(data.code==1){
                        this.msgInfo=data.content.data.name;
                        this.showlogin=false;
                      }else{
                              this.showlogin=true;  
                      }
                    },
                    );
      },
         loding(){
        this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
          function(response){
            var data=response.body;
            if(data.code==1){
                    if(data.content.data.roleID==5){
              window.location.href="http://duanhui.qianchengwl.cn/#/protocol";
              }else if(data.content.data.roleID==4){
                               window.location.href="http://duanhui.qianchengwl.cn/#/protocol";
              }else if(data.content.data.roleID==2){
                    window.location.href="http://duanhui.qianchengwl.cn/#/protocol";  
              }else{
                this.$message({
                      showClose: true,
                      message: '抱歉,你没有这个权限',
                      type: 'success'
                     });  
              }
            }else{
             this.$message({
                    showClose: true,
                    message: '请您先登录',
                    type: 'success'
                     });  
            }
          }
          );
      },
      loding2(){
        this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
          function(response){
            var data=response.body;
            if(data.code==1){
              if(data.content.data.roleID==5){
                   window.location.href="http://duanhui.qianchengwl.cn/zong/#/module";
              }else if(data.content.data.roleID==4){
                               window.location.href="http://duanhui.qianchengwl.cn/zhi/#/module";
              }else if(data.content.data.roleID==2){
                               window.location.href="http://duanhui.qianchengwl.cn/supply";
              }else if(data.content.data.roleID==1){
                                                                                             window.location.href="http://duanhui.qianchengwl.cn/admittance";
              }else{
                                window.location.href="http://duanhui.qianchengwl.cn/qiancheng";
              }
            }else{
             this.$message({
                    showClose: true,
                    message: '请您先登录',
                    type: 'success'
                   });  
            }
          }
          );
        // this.$router.push({ path: 'login'});
      },
        bolck() {
        this.dqy = this.msgs
        if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[0-9]*$/)) {
          alert("超出范围,或者输入不正确 ,请重新输入!")
          this.msgs = ""
          this.dqy = 1
        } else {
          this.dqy = this.msgs
          this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
        }
      },
      prin() {
        this.dqy--
          if(this.dqy <1) {
            this.dqy = 1
            this.name = this.data.slice(0, this.datasize)
          } else {
            this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
          }
      },
      next() {
        this.dqy++
          if(this.dqy * this.datasize > this.data.length) {
            this.dqy = Math.ceil(this.data.length / this.datasize)
            this.name = this.data.slice((this.dqy-1) * this.datasize, this.data.length)
          } else {
            this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
          }
      },
      on(el) {
        if(el == "show") {
          this.a = false
          this.data = this.one
          this.name = this.data.slice(0, this.datasize)
          this.msg = this.data.length

        } else {
          this.a = true
          this.data = this.two
          this.name = this.data.slice(0, this.datasize)
          this.msg = this.data.length
        }
      },
          handleGet(index){
            this.catID=this.catList2[index].catID;
            this.brandID="";
             this.TT=-1;
            this.BB=-1;
            this.getProductList();
            this.searchPrice();
          },
            handleGet1(index){
            this.catID=this.catList1[index].catID;
            this.brandID="";
            this.getProductList();
            this.searchPrice();
            this.TT=-1;
            this.BB=-1;
          },
          getChange(index){
              this.brandID=this.brandList2[index].brandID;
              this.catID="";
            this.getProductList();
             this.searchPrice();
          },
                  getChange1(index){
              this.brandID=this.brandList1[index].brandID;
              this.catID="";
            this.getProductList();
             this.searchPrice();
          },
          getData(){
              this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop",{sellerID:this.$route.query.sellerID}).then(
                function(response){
                  var data=response.body;
                  if(data.code==1){
                  this.shopName=data.content.shopName;
                  this.brandList=data.content.brandList;
                  if(this.brandList.length>9){
                  this.brandList1=this.brandList.slice(0,9);
                  this.brandList2=this.brandList.slice(9,this.brandList.length);
                  }else{
                      this.brandList1=this.brandList;
                      this.brandList2=[];
                  }
                  this.catList=data.content.catList;
                  if(this.catList.length>9){
                    this.catList1=this.catList.slice(0,9);
                    this.catList2=this.catList.slice(9,this.catList.length);
                  }
                  else{
                       this.catList1=this.catList;
                       this.catList2=[];
                  }
                  this.data=data.content.productList;
                  this.name=data.content.productList;
                 this.msg=this.name.length;
               }else{
                this.name=[];
                this.msg=0;
               }
               
                },
                function(erro){
                  console.log(erro);
                }
                );
          },
        changDetail(index){
        // window.open('http://duanhui.qianchengwl.cn/#/detail/?wd=' + this.productList[index].productID);
        this.$router.push({ path: 'detail', query: { productID: this.name[index].productID}});
        },
         changeFan(){
          window.location.href='http://duanhui.qianchengwl.cn';
        },
        changeShop(){
        this.$router.push({ path: 'shop'}); 
        },
        getProductList(){
            this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop",{sellerID:this.$route.query.sellerID,catID:this.catID,brandID:this.brandID}).then(
            function(response){
              var data=response.body;
               this.productList=data.content.productList;
                  this.brandList=data.content.brandList;
                  if(this.brandList.length>9){
                  this.brandList1=this.brandList.slice(0,9);
                  this.brandList2=this.brandList.slice(9,this.brandList.length);
                  }else{
                      this.brandList1=this.brandList;
                      this.brandList2=[];
                  }
                  // this.catList=data.content.catList;
                  // if(this.catList.length>9){
                  //   this.catList1=this.catList.slice(0,9);
                  //   this.catList2=this.catList.slice(9,this.catList.length);
                  // }
                  // else{
                  //      this.catList1=this.catList;
                  //      this.catList2=[];
                  // }
              this.data=data.content.productList;
              this.name=data.content.productList;
              this.msg=this.name.length;
            },
            function(erro){
              console.log(erro);
            },
            );
        },
          changeImg() {
        if(this.isAc == true) {
          this.isAc = false;
          this.downImg = require('../assets/hello/形状-10-拷贝.png');
        } else {
          this.isAc = true;
          this.isActive=false;
          this.downImg = require('../assets/hello/形状-10-拷贝_11.png');
        }
        this.status=2;
        this.searchPrice();
      },
           handleCart(){
         this.$router.push({ path: 'cart'});
         },
      changeRed() {
        if(this.isActive == true) {
          this.isActive = false;
          this.upImg = require('../assets/hello/形状-10-拷贝-2.png');

        } else {
          this.isActive = true;
          this.isAc=false;
          this.upImg = require('../assets/hello/形状-10.png');
        }
        this.status=1;
         this.searchPrice();

      },
            handleHover(){
              this.listImg=require('../assets/hello/矩形-36-拷贝-5.png');
            },
            handleLeave(){
            this.listImg=require('../assets/hello/矩形-36-拷贝-5_49.png');
            },
            multiSelect(){
              // if(this.showMask==false){
              //   this.showMask=true;
              // }else
              // {
              //   this.showMask=false;
              // }    
              this.showMask=!this.showMask;
            },
            multiType(){
                this.showType= !this.showType;
            },
        }
    }
</script>
<style scoped> 
.ft {
    font-weight: bold;
    color:#c8996b !important;
  }
.gd
{
  font-size: 12px;
  float: left;
  padding-right: 10px;
  margin-top: 12px;
  cursor: pointer;
}
.top {
    width: 1920px;
    height: 36px;
    background-color: #333333;
    margin: 0 auto;
    line-height: 45px;
  }
  
  .top_1 {
    color: #d1d1d1;
  }
  
  .a_href {
 color: #d1d1d1;
    margin-right: 20px;
    text-decoration: none;
  }
    .active_ {
    cursor: pointer;
  }
  .active_1:hover{
      transition: all 1s linear; 
       transform: scale(1.1);  
  }
  li {
    list-style: none;
  }
  
  .content {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  
  .content-search {
    margin-top: 36px;
    clear: both;
    width: 100%;
    height: 173px;
  }
  
  .logoImg {
    width: 160px;
    margin-top: 45px;
    float: left;
  }
  
  .footer {
    width: 100%;
    height: 200px;
  }
  
  .footer-top {
    padding-top: 30px;
    width: 100%;
    height: 170px;
    background: #dbdbdb;
  }
  
  .footer-ul {
    /*border:1px solid red;*/
    float: left;
    width: 300px;
    margin-top: 0px;
  }
  
  .footer-ul p {
    color: #000;
    font-size: 16px;
    margin-bottom: 3px;
    text-align: center;
  }
  
  .footer-ul li {
    height: 22px;
    line-height: 22px;
    color: #333333;
    font-size: 16px;
    text-align: center;
  }
  
  .footer-bottom {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #cccccc;
  }
  
  .footer-bottom span {
    color: #333333;
    font-size: 15px;
    font-weight: bolder;
    display: block;
    float: left;
    margin-right: 55px;
  }
  

.brand-button
{
  display: inline-block;
  height: 38px;
  font-size: 10px;
  padding: 5px;
  margin-left: 30px;
  border: none;
  background: #f1f1f1;
  cursor: pointer;
  margin-top: 2px;
}
.page
{
  margin-top: 20px;
  width: 600px;
  height: 65px;
  padding-right: 60px;
  float: right;
  font-size: 14px;
}
.grid-txt
{
  width:100%;
  height:50px;
  clear: both;
  line-height: 50px;
  font-size: 14px;
  color: #333333;
  font-weight: bolder;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.brand-grid-span
{
  font-size: 14px;
  color: #333333;
  float: right;
}
.brand-grid-ul-p
{
  font-weight: bolder;
  font-size: 18px;
  color:red;
  margin-top: 10px;
   width: 200px;
   float: left;
}
.sortList-ul-li
{
  width: 232px;
  height: 308px;
  border:1px solid #bdbdbd;
  background: #ffffff;
  margin-right: 8px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-bottom: 20px;
}
.sortList-ul
{
  width: 100%;
  list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding-left: 0px;
}
.sortList
{
  width: 100%;
  margin-top: 22px;
}
.search-price-btn-img
{
  cursor: pointer;
}
.white
{
  background: #ffffff;
}
.search-price-btn
{
  width:158px;
  height: 44px;
  float: right;
}
.price-input
{
  width: 55px;
  height: 23px;
}
.price-img
{
  position: absolute;
  top:10px;
  left: 200px;
}
.search-price
{
  position: relative;
  margin-left: 30px;
  width: 400px;
  float: left;
}
.xie
{
  width: 78px;
  height: 100%;
  margin-left: 55px;
  text-align: center;
  float: left;
  cursor: pointer;
}
.brand-p
{
    height: 40px;
    line-height:44px;
    float: left;
    margin-top: 0px;
}
.brand-price
{
    width: 1200px;
    height: 46px;
    margin-bottom: 12px;
    line-height: 46px;
    padding-left:20px;
    border:1px solid #bdbdbd;
    margin-bottom:12px;
    font-size: 14px;
    color: #333333;
}
.brand-span
{
    margin-right:25px;
}
.brandMask
{
  padding-left:28px;
  padding-right: 20px;
  position: absolute;
  width: 1200px;
  background:#ffffff;
  left: 0px;
  top:43px;
border:1px solid #bdbdbd;
border-top: 0px solid #bdbdbd;
 z-index: 200;
 max-height: 88px;
 overflow-x: hidden;
 overflow-y: scroll;
}
.ms
{
  vertical-align: middle;
  margin-left: 780px;
  margin-right: 20px;
}
.brandImg
{
  position: absolute;
  top:12px;
  right: 15px;
  cursor: pointer;
}
/*.box-right  span
{
  font-size: 12px;
  color:#333333;
  line-height: 42px;
  margin-right: 30px;
}*/
.box-right
{
  width: 1049px;
  height: 40px;
/*  background: #ffffff;*/
  float: left;
/*  padding-left: 30px;*/
  position: relative;
  padding-left: 48px;
}
.caigou
{
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #bdbdbd;
}
.box-left
{
  width: 100px;
  height: 42px;
  border-right: 1px solid #bdbdbd;
  padding-left: 20px;
  font-size: 12px;
  color:#333333;
  line-height: 42px;
  float: left;
}
.sort-top
{
  width: 100%;
  height: 130px;
  margin-bottom: 15px;
  border:1px solid #bdbdbd;
}
.content-text
{
  height: 55px;
  line-height: 55px;
  color: #333333;
  font-size: 16px;
}
.sort-list
{
    width: 100%;
    height: 2200px;
  /*  border-top:1px solid#fe4d3c;*/
}

/*公共样式*/
ul,li
{
  list-style: none;
}
.red
{
    color:red;
}
a
{
    text-decoration: none;
}
.module
{
  /*  width: 100%;*/
    max-width: 1920px;
     background: #f1f1f1;
    height:2600px;
}
.nav  
{
    position: absolute;
    width:100%;
    height: 36px;
    background-color: #f2f2f2;
    top: 0px;
    left: 0px;
    line-height: 36px;
    font-family: "MicrosoftYaHei Bold";
    font-size: 12px;
    color:#808080;
}
.nav-img
{
  margin-left: 360px;
  vertical-align: middle;
  margin-right: 5px;
}
.red
{
  color:red;
}
.nav-ul
{
  position: absolute;
  height: 36px;
  line-height: 36px;
  display: block;
  float: right;
  right: 360px;
  top:-10px;
}
.nav-ul-li
{
  width: 65px;
  list-style: none;
  display: block;
  float: left;
  margin-left:47px;
}
.content
{
    width: 1200px;
    margin: 0 auto;
}
.content-search
{
  margin-top:36px;
  clear: both;
  width: 100%;
  height: 173px;
}
.top
{
  height: 120px;
  margin-bottom: 10px;
  claer:both;
}
.logo 
{
margin-top: 60px;
height:60px;
width: 321px;
text-align: left;
float: left;
margin-left: 312px;
}
.search
{
   float:left;
   margin-top:50px;
   margin-left: 321px;
   position: relative;
}
.input-text
{
height: 32px;
width: 416px;
outline:none;
border: 2px solid red;
}
.search img
{
position: absolute;
left:420px;
top:0px;
}
.search-ul
{
  height:20px;
  font-size: 12px;
  color: #808080;
  line-height: 20px;
}
.search-ul li
{
  list-style: none;
 display: block;
  float: left;
  margin-right: 2px;
/*  border:1px solid red;*/
}
.search-ul li:hover
{
  color:red;
  cursor: pointer;
}
.cart
{
 /* float: right;
  margin-top:50px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fffdfd;
  background: #fe4d3c;
  cursor: pointer;*/
   float: right;
  margin-top:50px;
  cursor: pointer;
}
.bottom
{
  clear: both;
  height: 43px;
  line-height: 43px;
}
.bottom-sort
{
  width:110px;
  height: 100%;
  background-color: #c8996b;
  float: left;
}
.bottom-sort span
{
  font-size: 16px;
  padding-left:20px;
  color: #ffffff;
  font-weight: bold;
}
.bottom-text
{
  margin-left: 45px;
  width:100px;
  float: left;
  color: red;
  font-weight: bold;
}
.h
{
  width: 60px;
  margin-left: 3px;
  height:3px;
  border:none;
  background-color: red;
  margin-top: -3px;
}
</style>
