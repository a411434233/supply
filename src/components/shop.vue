<template>
<!-- 头部导航 -->
    <div class="module">
<!--  头部导航栏结束 -->
 <div class="box">
     <div class="content-box">
     <img src="../assets/supply/logo.png" height="48" width="196" class="box-logo">
     <div class="content-middle" >
      <a href=" http://duanhui.qianchengwl.cn" target="_blank"><img src="../assets/supply/right.png" class="fan"></a>
      <button @click="handleBack" class="btn-top">返回上一页</button>
     </div>
     </div>
      </div>
<!-- 大盒子 -->
<!--  购物列表 -->
 <div class="sort-list" style="padding-top:30px;">
   <div class="content">
    <p class="content-text">供应商店铺信息</p>
    <div class="sort-top">
      <div class="caigou">
      <div class="box-left">店铺名称 :</div>
      <div class="box-right">
        <span style="margin-left:34px;">{{shopName}}</span>
      </div>
      </div>
      <div class="caigou" style="border-bottom:1px solid #bdbdbd;position:relative;">
      <div class="box-left">商品分类 :</div>
       <div class="brandMask" v-if="showType">
       <span  v-for="(item,index) in catList2" @click="handleGet(CC2=index)" :class="{add:CC2==index}" style="line-height:40px;cursor:pointer;margin-right:20px;font-size:12px;">{{item.catName}}</span >
       </div>
      <div class="box-right" style="overflow:hidden;">
            <span  v-for="(item,index) in catList1"  @click="handleGet1(CC1=index)"  :class="{add:CC1==index}" style="line-height:40px;cursor:pointer;margin-right:20px;">{{item.catName}}</span>
             <span class="gd" style="float:right;padding-right:35px;">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiType" >
      </div>
      </div>
      <div class="caigou" style="border-bottom:0px solid #bdbdbd;position:relative;">
      <div class="box-left">品牌 :</div>
       <div class="brandMask" v-if="showMask">
       <span   v-for="(item,index) in brandList2" @click="getChange(BB2=index)" style="line-height:40px;cursor:pointer;margin-right:20px;font-size:12px;" :class="{add:BB2==index}">{{item.brandName}}</span>
       </div>
      <div class="box-right" style="overflow:hidden;">
               <span c  v-for="(item,index) in brandList1" @click="getChange1(BB1=index)" style="line-height:40px;cursor:pointer;margin-right:20px;" :class="{add:BB1==index}">{{item.brandName}}</span>
             <span class="gd" style="float:right;padding-right:35px;">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" >
      </div>
      </div>
    </div>
     <div class="brand-price">
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
              <ul class="sortList-ul" style="max-height:2025px;overflow:hidden;">
                <li class="sortList-ul-li" v-for="(item,index) in name" @click="changDetail(item.productID)">
                  <img :src="item.titleImage" height="212" width="212">
                   <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
                   <div class="grid-txt">
                   {{item.name}}
                   </div>
                </li>
              </ul>
        <div class="page">
                <div class="fenye" style="width:540px;margin-left:-100px;border:0px solid red;">
      <div>
      <span class="ziti" v-html="'共有'+Sum+'条记录'"></span>
      </div>
      <div class="anniu" v-show='dqy>1' @click="prin">上一页</div>
      <ul class="fenylan">
        <li @click="dangqian(index+1)" v-for="(val,index) in zongy" :class="{yebiaod:index==dqy-1,}" v-show="index==dqy-2||index==dqy-1||index==dqy" class="yebiao">{{val+1}}</li>
      </ul>
      <div @click="next" class="anniu">下一页&nbsp;</div>
      <span style="font-size:16px;line-height:29px;"> &nbsp;到第&nbsp;</span>
      <input type="text" v-model="msgs" class="shuruk" />
      <span style="font-size:16px;line-height:29px;">&nbsp;页&nbsp;</span>
      <div @click="bolck" class="anniu">确定</div>
    </div>
    <!--分页结束-->
    <transition name='bounce'>
      <div class="aaaa" v-show="com">
        {{msgname}}
      </div>
    </transition>
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
              BB1:-1,
              BB2:-1,
              CC2:-1,
              CC1:-1,
               workInfo:{
                    name: "", 
                    status: "", 
                    uncheckProduct: "", 
                    checkSuccessProduct: "", 
                    checkFailProduct: ""
                },
                price:[],
                brandList1:[],
               brandList2:[],
               catList1:[],
               catList2:[],
              catID:'',
              brandID:'',
              productList:[],
              catList:[],
              showType:false,
              shopName:'',
              sellerID:'',
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
                msgs:0,
                Sum: 0,
               msgs: 0,
             msgname: '',
             com: false,
            zongy: []
            }
        },
        created: function(){
          this.getWork();
           this.getInfo();
          this.sellerID=this.$route.query.sellerID;
        },
        methods: {
                   getWork(){
             this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
                function(response){
                    var data=response.body;
                    console.log(response)
                    if(data.code==1){
                       this.status=data.content.data.status;
                       this.workInfo=data.content.data;
                    }
                    // console.log(this.status);
                },
                );
            },
            handleBack(){
              window.history.go(-1);
            },
               handleLoginOut(){
              var that = this;
              this.$http.post(store.state.config.apiUrlRoot + "admin/user/logout").then(
                function(response){
               var data=response.body;
                that.$message({
                        message: data.msg,
                        type: 'success'
                    });
                    window.location.href='http://duanhui.qianchengwl.cn/#/login';
                },
                function(erro){
                  console.log(erro);
                }
                );
          },
       dangqian(index) {
        this.dqy = index
        this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
      },
                bolck() {
        this.dqy = this.msgs
        if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[0-9]/g) == -1) {
          this.msgname = "超出范围,或者输入不正确 ,请重新输入!"
          this.com = true
          setTimeout(() => {
            this.com = false
          }, 1300)
          this.msgs = 0
          this.dqy = 1
        } else {
          this.dqy = this.msgs
          this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
        }
      },
      prin() {
        this.dqy--
          if(this.dqy < 1) {
            this.dqy = 1
            this.name = this.data.slice(0, this.datasize)
          } else {
            this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
          }
      },
      next() {
        this.dqy++
          if(this.dqy * this.datasize > this.data.length) {
            this.msgname = "已经是最后一页了"
            this.com = true
            setTimeout(() => {
              this.com = false
            }, 1200)
            this.dqy = Math.ceil(this.data.length / this.datasize)
            var sum = this.data.length % this.datasize
            this.name = this.data.slice(this.data.length - sum, this.data.length)
            if(this.dqy <= 0) {
              this.dqy = 1
            }
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
            this.BB1=-1;
            this.BB2=-1;
            this.getProductList();
          },
           handleGet1(index){
            this.catID=this.catList1[index].catID;
            this.brandID="";
            this.BB1=-1;
            this.BB2=-1;
            this.getProductList();
          },
          getChange(index){
            this.catID="";
              this.brandID=this.brandList2[index].brandID;
             this.getProductList();
          },
           getChange1(index){
            this.catID="";
              this.brandID=this.brandList1[index].brandID;
             this.getProductList();
          },
          getData(){
              this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop",{sellerID:this.sellerID,catID:this.catID,brandID:this.brandID}).then(
                function(response){
                  var data=response.body;
                  if(data.code==1){
                 this.shopName=data.content.shopName;
                  this.brandList=data.content.brandList;
                  this.catList=data.content.catList;
              if(this.brandList.length>9){
                  this.brandList1=this.brandList.slice(0,9);
                  this.brandList2=this.brandList.slice(9,this.brandList.length);
                 }else{
                  this.brandList1=this.brandList;
                  this.brandList2=[];
                 }
                  if(this.catList.length>9){
                  this.catList1=this.catList.slice(0,9);
                  this.catList2=this.catList.slice(9,this.catList.length);
                 }else{
                  this.catList1=this.catList;
                  this.catList2=[];
                 }
                  // this.productList=data.content.productList;
                  this.data=data.content.productList;
                 this.msg=this.name.length;
                 this.msg=this.data.length;
                this.name = this.data.slice(0, this.datasize);
                this.Sum=this.data.length;
            this.zongy = []
            for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
            this.zongy.push(n)
            }
                  }else{
                    this.name=[];
                  }
                
                },
                function(erro){
                  console.log(erro);
                }
                );
          },
          getProductList(){
              this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop",{sellerID:this.sellerID,catID:this.catID,brandID:this.brandID}).then(
                function(response){
                  var data=response.body;
                  this.data=data.content.productList;
                 this.msg=this.data.length;
                this.name = this.data.slice(0, this.datasize);
                this.Sum=this.data.length;
            this.zongy = []
          for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
            this.zongy.push(n)
          }
                },
                function(erro){
                  console.log(erro);
                }
                );  
          },
           getInfo: function(){
              var that = this;
              this.$http.post(store.state.config.apiUrlRoot + "admin/user/getSellerMsg").then(
                function(response){
                var data = response.body;
                this.sellerID=data.content.userInfo.sellerID;
                this. getData();
                },
                function(erro){}
              );
        },
        changDetail(id){
        window.open('http://duanhui.qianchengwl.cn/#/detail/?wd=' + id);
        },
         changeFan(){
          window.location.href='http://duanhui.qianchengwl.cn';
        },
        changeShop(){
        this.$router.push({ path: 'shop'}); 
        },
             changeImg() {
        if(this.isAc == true) {
          this.isAc = false;
          this.downImg = require('../assets/hello/形状-10-拷贝.png');
        } else {
          this.isAc = true;
          this.isActive=false;
          this.downImg = require('../assets/hello/形状-10-拷贝_11.png');
         this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
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
          this.downImg = require('../assets/hello/形状-10-拷贝.png');
        }
        this.status=1;
        this.searchPrice();
      },
        // pai(){
        //         this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice',{price:[],status:this.status,sellerID:this.sellerID,catID:this.catID,brandID:this.brandID}).then(function(response){
        //             var data=response.body;
        //             if(data.code=1){
        //               this.name=data.content.productList;
        //             }
        //            },
        //             function(erro){
        //               console.log(erro);
        //             });
        //   },
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
                   this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice',{price:arr3,status:this.status,sellerID:this.sellerID,catID:this.catID,brandID:this.brandID}).then(function(response){
                    var data=response.body;
                    if(data.code=1){
                         this.data=data.content.productList;
                         this.msg=this.data.length;
                         this.name = this.data.slice(0, this.datasize);
                         this.Sum=this.data.length;
                         this.zongy = []
                          for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
                            this.zongy.push(n)
                          }
                    }
                   },
                    function(erro){});
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
.add
{
  font-weight: bold;
  color: #c8996b !important;
}
.btn-top
{
  height: 31px;
  width: 100px;
  vertical-align: middle;
  margin-top: -20px;
  /*margin-left: -500px;*/
  background: #ffffff;
  border: none;
  border: 1px  solid #bdbdbd;
  cursor: pointer;
  padding-top: 0px;
}
.brand-button
{
  display: inline-block;
  height: 38px;
  font-size: 10px;
  padding: 5px;
  margin-left: 30px;
  border: none;
  background: #ffffff;
  cursor: pointer;
  margin-top: 2px;
}
.page
{
  margin-top: 20px;
  width: 600px;
  height: 60px;
  padding-right: 120px;
  float: right;
  font-size: 14px;
 /* border: 1px solid #bdbdbd;*/
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
   width: 100px;
   float: left;
}
.sortList-ul-li
{
  width: 212px;
  height: 308px;
  box-shadow: 1px 1px 1px 1px #cccccc;
  background: #ffffff;
  margin-right: 6px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}
.sortList-ul
{
  width: 100%;
  list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
/*   padding-left: 2%;*/
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
  padding-left:28px;
  padding-right: 20px;
  position: absolute;
  width: 1030px;
  background:#ffffff;
  left: 120px;
  /*top: 46px;*/
  top:43px;
/*  border:1px solid #dcdcdc;
  border-top:0px solid #dcdcdc;*/
/*  border:1px solid red;*/
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
  font-size: 16px;
}
.sort-list
{
    width: 100%;
    max-height: 2300px;
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
    height:2500px;
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
