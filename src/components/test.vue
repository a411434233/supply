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
        <div class="bottom-text">
        <span>供货协议</span>
        <hr class="h">
        </div>
    </div>
    </div>
</div>
 </div>
<!--  购物列表 -->
 <div class="cart-list">
     <div class="content">
    <p class="cart-p">提示&nbsp;:&nbsp;请在此步骤与供应商沟通会修改协议供货价!</p>
     <div class="cart-list-content">
         <div class="cart-list-top">
             <p class="proInfo">商品信息</p>
            <p class="proOther">协议单价 ( 元 ) </p>
            <p class="proOther">数量 </p>
            <p class="proOther">小计 ( 元 )  </p>
            <p class="proOther">操作</p>
         </div>
         <div class="cart-list-detail" v-for="item in cartList">
         <div class="detail-top">
             <input class="in" type="checkbox" name="icon">
             <p >{{item.companyName}}</p>
         </div>
         <ul class="detail-top-ul" v-for="ss in item.infoList">
            <li >
                 <div class="left">
                     <input class="in" type="checkbox" name="icon">
                     <img src="../assets/hello/cart.png" height="100" width="100">
                     <div class="left-txt">
                     <p >{{ss.proName}}</p>
                      <p style="line-height:20px;">规格: {{ss.size}}</p>
                   </div>
             </div>
                    <div  class="danjia"><span class="danjia-span">{{ss.price}}</span></div>
                    <div  class="danjia">
                        <button > - </button>
                        <span class="danjia-span-txt">1</span>
                        <button>+</button>
                    </div>
                    <div  class="danjia"><span class="danjia-span bred">{{ss.total}}</div>
                    <div  class="cao">
                    <span>进行议价</span></br>
                      <span>删除</span>
                    </div>
                 </li>
             </ul>
         </div>
     </div>
 </div>
 </div>
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
        }
    }
</script>
<style scoped> 
.cart-list-detail
{
    width: 100%;
}
.cao span
{
    font-size: 16px;
    cursor: pointer;
    height: 30px;
    line-height: 90px;
    display: block;
}
.cao span:hover
{
    color:#fe4d3c;
}
.danjia-span-txt
{
    width: 55px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    margin-top: 57px;
}
.danjia  button
{
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border:1px solid #e5e5e5;
    cursor: pointer;
}
.danjia,.cao
{
    width: 190px;
    height: 137px;
    float: left;
}
.danjia-span
{
    line-height: 137px;
}
.left-txt
{
    /*line-height: 68px;*/
    width: 240px;
    height: 137px;
    float: left;
    color: #333333;
}
.left-txt p
{
    line-height: 40px;
    width: 250px;
}
.detail-top-ul
{
     width: 100%;
   /* border:1px solid red;*/
    margin-top: 0px;
    padding-left: 0px;
    background: #ffffff;
    margin-top: 0px;
}
.bred
{
    color:#fe4d3c;
    font-weight: bolder;
}
.left
{
     position: relative;
     width: 440px;
     height: 137px;
     float: left;
}
.detail-top-ul li
{
    display: block;
    border-bottom:1px solid #e5e5e5;
    width: 100%;
    height: 137px;
}
.left img
{
width: 100px;
 margin-left: 70px;
 vertical-align: middle;
 margin-top: 14px;
 margin-right:25px;
 border:1px solid #000;
 float: left;
}
.detail-top
{
    height: 48px;
    border-bottom:1px solid #e5e5e5;
    position: relative;
}
.detail-top p
{
    height: 48px;
    margin-top: 0px;
    color:#333333;
    margin-left: 70px;
}
.in
{
    position: absolute;
    width: 20px;
    height: 20px;
     top: 13px;
    left: 2px;
    margin-left: 25px;
    opacity: 0.8;
}
.cart-list
{
    width: 100%;
    height: 1300px;
    border-top:1px solid#fe4d3c;
}
.cart-p
{
    color: #fe4d3c;
    letter-spacing: 0.5px;
    font-size: 16px;
    line-height: 45px;
}
.cart-list-content
{
   width: 100%;
   background: #ffffff;
}
.cart-list-top
{
   height: 46px;
   width: 1200px;
    background: #fe4d3c;
    color: #ffffff;
    font-size: 16px;
    line-height: 46px;
}
.proInfo
{
  padding-left: 50px;
  width: 390px;
  float: left;
  height: 46px;
  margin-top: 0px;
}
.proOther
{
    width: 190px;
    height: 46px;
    float: left;
     margin-top: 0px;
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
