<template>
<!-- 头部导航 -->
    <div class="module">
<!-- 导航栏 -->
   <div class="nav">
   <img src="../assets/img/home.png" class="nav-img">
   <span >欢迎来到消防技术装备协议采购平台!</span>
   <span>请  </span>
   <span ><a href="javascript:;" class="red">登录</a></span>
   <ul class="nav-ul" > <li  v-for="item in navList"class="nav-ul-li">{{item.name}}</li> </ul>
 </div> 
<!--  头部导航栏结束 -->
<!-- 大盒子 -->
    <div class="box">
<!--     头部搜索框 -->
    <div  style="background:#ffffff;">
    <div class="content" >
    <div class="content-search"  >
    <div class="top">
  <!--   logo -->
      <div class="logo" >
       <img src="../assets/img/logo.png">
      </div>
      <div class="search" >
        <input type="text" class="input-text">
        <img src="../assets/img/search-2.png">
        <ul class="search-ul"> <li  v-for="item in searchList">{{item.name}}</li></ul>
      </div>
         <div class="cart" @click="handleCart">
       <img src="../assets/img/right.png">
      </div>
      </div>
      <div class="bottom">
        <div class="bottom-sort">
          <span>全部商品分类</span>
        </div>
    </div>
    </div>
</div>
 </div>
<!--  购物列表 -->
 <div class="sort-list">
   <div class="content">
    <p class="content-text">全部分类 > 灭火器材 > 灭火类</p>
    <div class="sort-top">
      <div class="caigou">
      <div class="box-left">采购目录 :</div>
      <div class="box-right">
        <span>纸质文具及办公用品(13727)</span>
        <span>纸其他办公消耗用品及类似物品(13727)</span>
      </div>
      </div>
      <div class="caigou">
      <div class="box-left">商品类目 :</div>
      <div class="box-right">
        <span>硬面笔记本及其他(13727)</span>
        <span>纸其他办公消耗用品及类似物品(13727)</span>
      </div>
      </div>
      <div class="caigou" style="border-bottom:0px solid #bdbdbd;position:relative;">
      <div class="box-left">品牌 :</div>
      <div class="box-right">
      <div class="brandMask" v-if="showMask">
              <span class="brand-span" v-for="item in brandList">{{item.brandName}}  </span>
       </div>
        <span>江荆</span>
        <span>神龙</span>
            <img src="../assets/hello/多选.png" height="26" width="57" class="ms">
             <span class="gd">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" >
      </div>
      </div>
    </div>
     <div class="brand-price">
            <p class="brand-p">排序 :</p>
            <div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed">
            <span class="brand-price-span">销量</span>
            <img :src="upImg" height="12" width="8" >
            </div>
            <div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg">
            <span class="brand-price-span">销量</span>
            <img :src="downImg" height="12" width="8" >
            </div>
            <div class="search-price">
              <span>价格</span>
              <input type="text" name="" class="price-input">
              -
                <input type="text" name="" class="price-input">
                <img src="../assets/hello/搜索.png" class="price-img">
            </div>
            <div class="search-price-btn">
               <img src="../assets/hello/矩形-36-拷贝-2.png" >
               <img :src="listImg" class="search-price-btn-img" @mouseenter="handleHover" @mouseleave="handleLeave">
            </div>
            </div>
            <div class="sortList">
              <ul class="sortList-ul">
                <li class="sortList-ul-li">
                  <img src="../assets/hello/灭火器.png" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;20</p>
                   <span class="brand-grid-span">已销售&nbsp;: &nbsp;20</span>
                   <div class="grid-txt">
                     这是一个测试测试时测绘师 的hi是的还是还是和是否hi得得得得
                   </div>
                </li>
                      <li class="sortList-ul-li">
                  <img src="../assets/hello/灭火器.png" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;20</p>
                   <span class="brand-grid-span">已销售&nbsp;: &nbsp;20</span>
                   <div class="grid-txt">
                     这是一个测试测试时测绘师 的hi是的还是还是和是否hi得得得得
                   </div>
                </li>
                       <li class="sortList-ul-li">
                  <img src="../assets/hello/灭火器.png" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;20</p>
                   <span class="brand-grid-span">已销售&nbsp;: &nbsp;20</span>
                   <div class="grid-txt">
                     这是一个测试测试时测绘师 的hi是的还是还是和是否hi得得得得
                   </div>
                </li>
                        <li class="sortList-ul-li">
                  <img src="../assets/hello/灭火器.png" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;20</p>
                   <span class="brand-grid-span">已销售&nbsp;: &nbsp;20</span>
                   <div class="grid-txt">
                     这是一个测试测试时测绘师 的hi是的还是还是和是否hi得得得得
                   </div>
                </li>
                    <li class="sortList-ul-li">
                  <img src="../assets/hello/灭火器.png" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;20</p>
                   <span class="brand-grid-span">已销售&nbsp;: &nbsp;20</span>
                   <div class="grid-txt">
                     这是一个测试测试时测绘师 的hi是的还是还是和是否hi得得得得
                   </div>
                </li>
              </ul>
              <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
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
              listImg:require('../assets/hello/矩形-36-拷贝-5_49.png'),
              upImg:require('../assets/hello/形状-10-拷贝-2.png'),
              downImg:require('../assets/hello/形状-10-拷贝.png'),
               isActive:false,
               isAc:false,
                  brandList:[{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},],
              showMask:false,
             searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
                 navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
                 cartList:[{companyName:"杭州某某公司",infoList:[{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},],},
                 {companyName:"杭州某某公司",infoList:[{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},],},
                 ],
            }
        },
        created: function(){
            //this.$router.push('/module/work/update');
        },
        methods: {
           changeImg(){
              if(this.isAc==true){
                this.isAc=false;
                this.downImg=require('../assets/hello/形状-10-拷贝.png');
              }else
              {
                this.isAc=true;
                 this.downImg=require('../assets/hello/形状-10-拷贝_11.png');
              }
            },
           handleCart(){
         this.$router.push({ path: 'cart'});
         },
           changeRed(){
              if( this.isActive==true){
                   this.isActive=false;
                   this.upImg=require('../assets/hello/形状-10-拷贝-2.png');
              }else{
                  this.isActive=true;
                   this.upImg=require('../assets/hello/形状-10.png');
              }
            },
            handleHover(){
              this.listImg=require('../assets/hello/矩形-36-拷贝-5.png');
            },
            handleLeave(){
            this.listImg=require('../assets/hello/矩形-36-拷贝-5_49.png');
            },
            multiSelect(){
              if(this.showMask==false){
                this.showMask=true;
              }else
              {
                this.showMask=false;
              }    
            },
        }
    }
</script>
<style scoped> 
.page
{
  margin-top: 20px;
  width: 410px;
  height: 65px;
  float: right;
  padding-left:240px;
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
  margin-top: 0px;
   width: 100px;
   float: left;
}
.sortList-ul-li
{
  width: 212px;
  height: 308px;
  border:1px solid #bdbdbd;
  background: #ffffff;
  margin-right: 6px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
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
    width: 1180px;
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
  padding-left:20px;
  padding-right: 20px;
  position: absolute;
  width: 1038px;
  background:#ffffff;
  left: -1px;
  top: 46px;
/*  border:1px solid #dcdcdc;
  border-top:0px solid #dcdcdc;*/
/*  border:1px solid red;*/
border:1px solid #bdbdbd;
border-top: 0px solid #bdbdbd;
 z-index: 200;
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
.box-right  span
{
  font-size: 12px;
  color:#333333;
  line-height: 42px;
  margin-right: 30px;
}
.box-right
{
  width: 1049px;
  height: 42px;
  background: #ffffff;
  float: left;
  padding-left: 30px;
  position: relative;
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
  font-size: 12px;
}
.sort-list
{
    width: 100%;
    height: 1300px;
    border-top:1px solid#fe4d3c;
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
    height:1500px;
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
  top:0px;
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
    height: 100%;
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
margin-top: 80px;
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
  margin-top: 10px;
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
  width:211px;
  height: 100%;
  background-color: red;
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
