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
          <span>协议采购分类</span>
        </div>
        <div class="bottom-text">
        <span>供货协议</span>
        <hr class="h">
        </div>
    </div>
    </div>
</div>
 </div>
<!-- 搜索框结束 -->
<!--  商品分类 -->
   <div class="content-sort">
     <div class="content" >
       <div class="sort-left" >
         <ul class="sort-ul">
          <li class="sort-ul-li" v-for="(item,index) in  sortList">
         <div class="close">
          <img :src="openImg"  @click="openDiv(index)"  v-if="!item.showImg">
          <img :src="closeImg"  @click="closeDiv(index)" v-if="item.showImg">
          <span>&nbsp;{{item.sortName}}</span>
          </div>
          <div class="open" v-if="item.showImg">
         <p v-for="ss in item.contentList">{{ss.name}}</p>
        </div>
         </li>
         </ul>
       </div>
       <div class="sort-right" >
           <div class="sort-right-title">全部分类 > {{sortName}}</div>
           <div class="brand">
           <div class="brandMask" v-if="showMask">
              <span class="brand-span" v-for="item in brandList">{{item.brandName}}  (  {{item.num}}  )</span>
           </div>
           <p class="brand-p">品牌:</p>
           <div class="brand-content">
           <span class="brand-span" v-for="item in brandList">{{item.brandName}}  (  {{item.num}}  )</span>
           </div>
             <img src="../assets/hello/多选.png" height="26" width="57" class="ms">
             <span class="gd">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" >
           </div>
            <div class="brand-price">
            <p class="brand-p">品牌:</p>
            <div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed">
            <span class="brand-price-span">协议价</span>
            <img :src="upImg" height="12" width="8" >
            </div>
            <div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg">
            <span class="brand-price-span">协议价</span>
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
               <img src="../assets/hello/矩形-36-拷贝-2.png" v-bind:class="{white: list}"  @click="changeList">
               <img src="../assets/hello/矩形-36-拷贝-5_49.png" v-bind:class="{white: grid}" @click="changeGrid">
            </div>
            </div>
         <!--    列表 -->
            <div class="brand-list" v-if="list" >
              <div class="brand-list-top">
               <p class="brand-p" style="width:200px;">商品名称</p>
              <span class="brand-list-top-span" v-for="item in proList">{{item.name}}</span>
              </div>
              <div class="brand-list-bottom" >
                 <ul class="brand-list-bottom-ul">
                   <li v-for="item in  proContent">
                  <p class="brand-list-bottom-txt">{{item.proName}}</p>
                 <span class="brand-list-top-span" v-for="ss in item.proList">{{ss.name}}</span>
                   </li>
                 </ul>
              </div>
            </div>
       <!--      图文 -->
       <div class="brand-grid" v-if="grid">
         <ul class="brand-grid-ul">
          <li class="flex-item"  v-for="item in  gridlist">
           <img :src="item.img">
           <div class="brand-grid-ul-txt">
             <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
             <p class="brand-grid-content">{{item.det}}</p>
           </div>
           <div class="brand-grid-btn">
             <p class="brand-grid-btn-p"><span class="red">{{item.sh}}</span>
           </br>市场价</p>
             <p class="brand-grid-btn-p"><span class="red">{{item.you}}</span>
           </br>优惠率</p>
              <p class="brand-grid-btn-p" style="border-right:0px solid red;"><span class="red">{{item.num}}</span>
           </br>已销售</p>
             </div>
          </li>
      </ul>
       </div>
       <!-- 按钮区 -->
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
<!--        供货协议结束 -->
<!--        大盒子结束 -->
 </div>
</div>
</template>
<script>
// import store from '../store.js'
// import Hello from './components/Hello.vue'
    export default {
        name: 'module',
      //      components: {
      //      "hello":Hello,
      // },
        data: function (){
            return {
              list:true,
              grid:false,
              gridlist:[{img:require('../assets/hello/灭火器.png'),price:'20.00',det:"利生 灭火器的繁华随后岁到回复随后的风度师傅是的恢复湿地恢复dedwewdewdwde",sh:"18.00",you:"56%",num:'300'},{img:require('../assets/hello/灭火器.png'),price:'20.00',det:"利生 灭火器的繁华随后岁到回复随后的风度师傅是的恢复湿地恢复dedwewdewdwde",sh:"18.00",you:"56%",num:'300'},{img:require('../assets/hello/灭火器.png'),price:'20.00',det:"利生 灭火器的繁华随后岁到回复随后的风度师傅是的恢复湿地恢复dedwewdewdwde",sh:"18.00",you:"56%",num:'300'},{img:require('../assets/hello/灭火器.png'),price:'20.00',det:"利生 灭火器的繁华随后岁到回复随后的风度师傅是的恢复湿地恢复dedwewdewdwde",sh:"18.00",you:"56%",num:'300'},],
              proContent:[  {proName:'huihihiuhiuhiuhuihsdsdsdsdsdsdsddedededededededededeededededdededededsdasdasdasadsdasasdasda',
                  proList:[{name:'商品目录'},{name:'品牌'},{name:'型号'},{name:'市场价'},{name:'协议单价'},{name:'优惠率'},{name:'累计成交量'},],
              },],
              proList:[{name:'商品目录'},{name:'品牌'},{name:'型号'},{name:'市场价'},{name:'协议单价'},{name:'优惠率'},{name:'累计成交量'},],
              isActive:false,
              isAc:false,
              upImg:require('../assets/hello/形状-10-拷贝-2.png'),
              downImg:require('../assets/hello/形状-10-拷贝.png'),
              showMask:false,
                 brandList:[{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},{brandName:'某某品牌',num:8},],
                  sortName:'灭火器',
                  closeImg:require('../assets/hello/形状-5.png'),
                  openImg:require('../assets/hello/形状-6.png'),
                  navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
                 searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
                 sortList:[
                 {
                    showImg:false,
                    sortName:"灭火器材",
                    contentList:[{name:"灭弧器"}, {name:"灭弧器"},{name:"灭弧器"},{name:"灭弧器"}, ],
                 },
                   {
                     showImg:false,
                    sortName:"huh火器材",
                    contentList:[{name:"11111"}, {name:"灭弧器"},{name:"灭弧器"},{name:"灭弧器"}, ],
                 },
                  {
                     showImg:false,
                    sortName:"huh火器材",
                    contentList:[{name:"11111"}, {name:"灭弧器"},{name:"灭弧器"},{name:"灭弧器"}, ],
                 },
                 ],
               }
        },
        created: function(){
            //this.$router.push('/module/work/update');
        },
        methods: {
            handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
          changeList(){
           this.grid=false;
            this.list=true;
            console.log(1111);
          },
          changeGrid(){
            this.list=false;
            this.grid=true;
            console.log(222);
          },
            openDiv(index){
               this.sortList[index].showImg=true;
            },
             closeDiv(index){
                   this.sortList[index].showImg=false;
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
            multiSelect(){
              if(this.showMask==false){
                this.showMask=true;
              }else
              {
                this.showMask=false;
              }    
            },
        },
       
    }
</script>
<style scoped>
.flex-item {
   margin-right: 9px;
   margin-bottom: 9px;
}
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
.white
{
  background: #ffffff;
}
.module
{
  /*  width: 100%;*/
    max-width: 1920px;
     background: #f0f0f0;
    height:1500px;
}
.page
{
  margin-top: 20px;
  width: 410px;
  height: 65px;
  float: right;
  padding-left:240px;
}
.brand-grid-btn-p
{
  width: 76px;
  height:50px;
  margin-top: 0px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  float: left;
   border:1px solid #bdbdbd;
  border-left:0 solid #bdbdbd;
  border-bottom:0 solid #bdbdbd;
}
.brand-grid-ul-txt
{
  width: 200px;
  height: 75px;
}
.brand-grid-btn
{
  height: 50px;
  width: 230px;
  margin-left: -10px;
  margin-top: 10px;
}
.brand-grid-content
{
  height: 40px;
  line-height: 20px;
  width: 200px;
  font-size: 14px;
  font-family: bold;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.brand-list,.brand-grid
{
  width: 100%;
}
.brand-list-top
{
 padding-left:20px;
  width: 942px;
  height: 43px;
  border:1px solid #bdbdbd;
}
.brand-list-top-span
{
  height:43px;
  line-height: 43px;
  margin-left: 62px;
}
.brand-grid-ul-p
{
  font-weight: bolder;
  font-size: 18px;
  color:red;
  margin-top: 0px;
}
.brand-list-bottom
{
  width: 100%;
  height:200px;
}
.brand-list-bottom-ul
{
  width:964px;
}
.brand-grid-ul
{
  width: 100%;
   list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding-left: 0px;
}
.brand-grid-ul li
{
  width: 220px;
  height: 353px;
  padding-left: 10px;
  padding-top: 10px;
   border:1px solid #bdbdbd;
   background: #ffffff;
   float: left;

}
.brand-list-bottom-ul li
{
  border:1px solid #bdbdbd;
  height: 60px;
  line-height: 60px;
  border-top: 0px solid #bdbdbd;
 background:#ffffff;
}
.brand-list-bottom-txt
{
    height: 60px;
    line-height:60px;
    float: left;
    margin-top: 0px;
    width:200px;
    padding-left:20px;
    overflow:hidden;
    text-overflow:ellipsis; 
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
/*商品分类*/
.search-price-btn
{
  width:200px;
  height: 44px;
  float: right;
}
.search-price-btn img
{
  cursor: pointer;
}
.price-input
{
  width: 55px;
  height: 23px;
}
.xie
{
  width: 78px;
  height: 100%;
  margin-left: 50px;
  text-align: center;
  float: left;
  cursor: pointer;
}
/*右侧*/
.brandMask
{
  padding-left:40px;
  padding-right: 60px;
  position: absolute;
  width: 860px;
  background:#ffffff;
  left: 0px;
  top: 44px;
  border:1px solid #dcdcdc;
  border-top:0px solid #dcdcdc;
/*  border:1px solid red;*/
 z-index: 200;
}
.brand-price
{
    width: 942px;
    height: 44px;
    margin-bottom: 12px;
    line-height: 44px;
    padding-left:20px;
    background: #f0f0f0;
    border:1px solid #dcdcdc;
    margin-bottom:12px;
}
.brandImg
{
  position: absolute;
  top:12px;
  right: 15px;
  cursor: pointer;
}
.ms
{
  vertical-align: middle;
  margin-left: 20px;
}
.gd
{
  line-height: 44px;
  margin-left: 30px;
}
.brand
{
    width: 942px;
    height: 44px;
    margin-bottom: 12px;
    background: #ffffff;
    line-height: 44px;
    padding-left:20px;
    border:1px solid #dcdcdc;
    position: relative;
}
.brand-p
{
    height: 40px;
    line-height:44px;
    float: left;
    margin-top: 0px;
}
.brand-content
{
    float:left;
    width: 740px;
    height: 100%;
    overflow:hidden;
}
.brand-span
{
    margin-left:42px;
}
.sort-right-title
{
    height:50px;
    line-height: 50px;
    width: 964px;
    letter-spacing:0.5px;
}
.sort-right
{
   /* width: 964px;*/
    height: 100%;
    float:left;
    margin-left: 21px;
    margin-top: 0px;
    font-size:12px;
    color:#333333;
    width: 964px;
}
.content-sort
{
    width: 100%;
    height: 1300px;
    border-top:1px solid #fe4d3c;
}
.open
{
  width: 162px;
  margin-left:-30px;
  padding-left: 48px;
  margin-top:0px;
  line-height: 20px;
}
.open p
{
    height: 32px;
    line-height: 32px;
    margin-top: 0px;
}
.sort-left
{
  width: 210px;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
/*  height: 494px;*/
  float: left;
/*  margin-left:-357px;*/
}
.sort-ul
{
  width:169px;
  font-size: 14px;
  color:#333333;
  margin:0;
  height: 100%;
  font-family: "MicrosoftYahei-Bold";
}
.sort-ul-li
{
  width: 185px;
  display: block;
  float: left;
  text-align: left;
  padding-left:25px;
  border-bottom:1px solid #dcdcdc;
}
.sort-ul-li:last-child
{
    border-bottom: 0px solid #dcdcdc;
}
.close
{
    font-weight: bold;
    height: 40px;
    line-height: 40px;
}
.close img
{
    cursor: pointer;
}
.content
{
    width: 1200px;
    margin: 0 auto;
    height: 100%;
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
height: 34px;
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
