<template>
    <!-- 头部导航 -->
    <div class="module">
<!-- 导航栏 -->
   <div class="nav">
   <img src="../assets/img/home.png" class="nav-img">
   <span >欢迎来到消防技术装备协议采购平台!</span>
   <span>请  </span>
   <span ><a href="javascript:;" class="red" @click="handleLogin">登录</a></span>
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
       <img src="../assets/login/indexlogo.png" height="60" width="248">
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
<!-- 头部搜索框结束 -->
<!--  商品分类 -->
   <div class="content-sort" >
     <div class="content"  style="position:relative; border:" >
       <div class="sort-left">
         <ul class="sort-ul" >
           <li v-for="(item,index) in infoList.catList"   @click="test(index)"  >{{item.catName}}
           <div class="sort-img">
           <span></span><img src="../assets/img/right-拷贝.png">
           </div>
            <div class="sort-content-mask" v-if=" showSort" > 
           <div class="sort-detail"> 
              <span class="sort-detail-span" v-for="(ss,index) in  DetailList" @click="handleAll(index)">{{ss.catName}}</span>
             </div> 
          </div> 

           </li>
         </ul>
       </div>
       <div class="pic" >
         <!-- 轮播图 -->
         <div class="lun">
        <!--  <img src="../assets/img/lunbo.png"> -->
          <div class="swiper-box">
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item" style="background:pink;"><img src="../assets/img/lunbo.png" height="474" width="740"></div>
        <div class="rd-swipe-item" style="background:gray;"><img src="../assets/img/lunbo2.png" height="474" width="740"></div>
      </rd-swipe>
    </div>
         </div>
       </div>
       <div class="sort-right" >
       <div class="sort-right-top" >
        <div class="my">
          <img src="../assets/img/我的---副本_复制.png">
          <span class="my-txt">Hi! 上午好</span>
        </div>
        <div class="my-login">
          <input type="button" value="协议供货" class="my-btn" @click="handlePro">
          <input type="button" value="用户中心" class="my-btn">
        </div>
         </div>
        <div class="notice">
          <ul class="notice-ul">
            <li  v-for="(item,index) in noticeList"  @mouseenter="enter(index)"  @mouseleave="leaveNotice">{{item.name}}
            </li>
          </ul>
          <ul class="notice-content">
            <li v-for="ss in contentList">{{ss.name}}</li>
          </ul>
        </div>
       <!-- 下部分 -->
       <div class="sort-right-bottom" >
         <ul class="sort-right-bottom-ul">
           <li><img src="../assets/img/zheng.png"></li>
            <li><img src="../assets/img/qian.png"></li>
            <li><img src="../assets/img/shou.png"></li>
            <li><img src="../assets/img/shuang.png"></li>
         </ul>
         <div class="sort-right-bottom-txt">
          <p>服务热线: 004-223-1258</p>
          </div>
       </div>
       </div>
     </div>
   </div>
<!--    轮播部分结束 -->
<!--   热销供应商 -->
  <div class="content-hot" >
  <div class="content-top">
 <span class="content-left"></span><p>热销产品</p><span class="content-right"></span>
  </div>
    <div class="content ovx">
      <div class="content-hot-show"  >
        <ul class="content-hot-show-ul" >
          <li v-for="item in infoList.hotProductList">
          <div class="show-pic">
          <div class="pic-img" style="float:left;" v-for="ss in  item.titleImage">
          <img :src="ss.img" style="width:160px;height:160px;">
          <!--   <img src="../assets/img/maozi.png"> -->
              <div class="maskImg">
              <p>{{ss.name}}</p>
              <p class="price"><i class="fa fa-cny"></i>&nbsp;{{ss.price}}</p>
            </div>
          </div>
          </div>
          <div class="show-shop" >
             <div class="show-hr"></div> 
            <div class="hidden">
              <div class="mask" ></div>
              <p></p>
              <p>评价信息: 供货 <i class="fa fa-arrow-up red"></i> 服务 85   <i class="fa fa-arrow-up red"></i> 价格 79  <i class="fa fa-arrow-up red"></i> 质量 90  <i class="fa fa-arrow-up red"></i></p>
            </div>
            <div class="shop-info">
            <div class="shop-logo"><img :src="item.logo" style="width:80px;height:80px;"></div>
            <div class="info-detail">
              <p>{{item.sellerName}}</p>
              <img src="../assets/img/entershop.png" >
            </div>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
 <!--   热销供应结束   -->
 <!-- 精选市场 -->
  <div class="content-select">
  <div class="content-top">
    <span class="content-left"></span><p>精选市场</p><span class="content-right"></span>
  </div>
    <div class="content">
      <div class="fanghu">
      <div class="fanghu-top">
        <div class="fanghu-left">
          <p class="intext">防护装备</p>
          <ul class="inul">
          <div v-for="item in inulList">
            <li >{{item.catName}}</li></br>
            </div>
          </ul>
        </div>
        <div class="fanghu-right" >
          <div class="right-img-top-left" >
                 <p class="content-left-txt">抢险救援鞋</p>
                 <p class="content-left-txt1">救援专用</p>
                 <img src="../assets/img/xiezi.png" height="200" width="200" class="content-left-img">
          </div>
          <div class="right-img-top-right" >
              <ul class="content-right-ul">
                  <li v-for="(item,index) in fanghuList1" @click="changeDetail(index)">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;{{item.price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                     <!--  <img :src="item.titleImage"> -->
                  </li>
              </ul>
          </div>
          <div class="right-img-bottom" >
              <ul class="content-right-ul">
                  <li v-for="(item,index) in fanghuList2" @click="changeDetail2(index)">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;{{item.price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                       <!--  <img :src="item.titleImage"> -->
                  </li>
              </ul>
          </div>
        </div>
        </div>
      </div>
   <!--    防护结束 -->
       <div class="miehuo">
       <div class="fanghu-top">
        <div class="fanghu-left">
          <p class="intext">灭火器材</p>
          <ul class="inul">
           <div v-for="item in inulList1">
            <li >{{item.catName}}</li></br>
            </div>
          </ul>
        </div>
        <div class="fanghu-right" >
          <div class="right-img-top-left" >
                 <p class="content-left-txt">抢险救援鞋</p>
                 <p class="content-left-txt1">救援专用</p>
                 <img src="../assets/img/xiezi.png" height="200" width="200" class="content-left-img">
          </div>
          <div class="right-img-top-right" >
              <ul class="content-right-ul">
                  <li v-for="item in fanghuList1" @click="changeDetail">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                  </li>
              </ul>
          </div>
          <div class="right-img-bottom" >
              <ul class="content-right-ul">
                  <li v-for="item in fanghuList2" @click="changeDetail">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                  </li>
              </ul>
          </div>
        </div>
        </div>
       </div>
        <div class="xiaofang">
        <div class="fanghu-top">
        <div class="fanghu-left">
          <p class="intext">侦检器材</p>
          <ul class="inul">
          <div v-for="item in inulList2">
            <li style="background-color:rgb(141,223,162);">{{item.catName}}</li></br>
            </div>
          </ul>
        </div>
        <div class="fanghu-right" >
          <div class="right-img-top-left" >
                 <p class="content-left-txt">抢险救援鞋</p>
                 <p class="content-left-txt1">救援专用</p>
                 <img src="../assets/img/xiezi.png" height="200" width="200" class="content-left-img">
          </div>
          <div class="right-img-top-right" >
              <ul class="content-right-ul">
                  <li v-for="item in fanghuList1" @click="changeDetail">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                  </li>
              </ul>
          </div>
          <div class="right-img-bottom" >
              <ul class="content-right-ul">
                  <li v-for="item in fanghuList2" @click="changeDetail">
                      <p class="gray" style="line-height:40px;font-size:16px;">{{item.name}}</p>
                      <span class="content-right-ul-span"><i class="fa fa-cny"></i>&nbsp;200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="gray">销量&nbsp;: 300</span>
                      <img src="../assets/img/qiang.png" height="200" width="200">
                  </li>
              </ul>
          </div>
        </div>
        </div>
        </div>
    </div>
  </div>
  <!-- 底部导航栏 -->
  <div class="footer">
   <div class="footer-top">
      <div class="content">
       <div class="logoImg" >
        <img src="../assets/img/logo.png">
      </div>
       <ul class="footer-ul" v-for="item in footerList">
           <p>{{item.pname}}</p>
            <li v-for="li in item.liList">{{li.name}}</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
        <div class="content">
                <span>在线咨询</span>
                 <span>帮助中心</span>
                 <span>服务热线&nbsp;:&nbsp;300-377-2290</span>
        </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import store from '../store.js'
import Hello from "./Hello.vue"
import rdSwipe from './slide/slide.vue'
    export default {
        name: 'module',
           components: {
           "hello":Hello,
           'rdSwipe':rdSwipe,
      },
        data: function (){
            return {
             fanghuList:[],
             infoList:{},
              swipe:{ activeIndex: 0 },
              contentList:[{name:"一级标题一级标题"},{name:"一级标题一级标题"},{name:"一级标题一级标题"},],
              noticeContent:[
              {contentlist:[{name:"一级标题一级标题"},{name:"一级标题一级标题"},{name:"一级标题一级标题"},],},
              {contentlist:[{name:"二级标题二级标题"},{name:"一级标题一级标题"},{name:"一级标题一级标题"},],},
              {contentlist:[{name:"三级标题三级标题"},{name:"一级标题一级标题"},{name:"一级标题一级标题"},],},
              {contentlist:[{name:"四级标题四级标题"},{name:"一级标题一级标题"},{name:"一级标题一级标题"},],}
                ],
               sortName:"",
                DetailList:[],
                showSort:false,
                showMask:false,
                showHidden:false,
                active:true,
                headerFixed : true,
                noticeList:[{name:'公告'},{name:'规则'},{name:'采购人'},{name:'供应商'},],
                navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
                searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
                // hotList:[{mainItem:'主营项目: 消防防护, 安全警戒, 安全帽', companyName:"杭州某某公司"},{mainItem:'主营项目: 消防防护, 安全警戒, 安全帽',companyName:"杭州某某公司"},{mainItem:'主营项目: 消防防护, 安全警戒, 安全帽', companyName:"杭州某某公司"},],
                hotList:[],
                inulList:[],
                inulList1:[],
                inulList2:[],
                fanghuList1:[],
                fanghuList2:[],
                mieList:[],
                mieList1:[],
                mieList2:[],
                fanghuImg:[{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},{name:require('../assets/img/lunbo2.png')},],
                // footerList:[{name:"采购流程"},{name:"政策问题"},{name:'常见问题'},{name:'联系客服'},],
                footerList:[
                {
                    pname:'采购指南',
                    liList:[{name:"采购流程"},{name:"政策问题"},{name:'常见问题'},{name:'联系客服'},],
                },
                 {
                    pname:'品质保证',
                    liList:[{name:"比价说明"},{name:"发票制度"}],
                },
                 {
                    pname:'支付方式',
                    liList:[{name:"货到付款"},{name:"在线支付"},{name:"分期付款"},{name:"邮局汇款"},{name:"公司转账"},],
                },
                 {
                    pname:'商家服务',
                    liList:[{name:"入驻须知"},{name:"入驻流程"},{name:"商家规则"},],
                },
                ],
       sortDetail:[
       { sortName:'灭火器类',sortList:[{name:'112灭火器'},{name:'112灭火器'},{name:'112灭火器'},{name:'112灭火器'},],
     },
       { sortName:'灭火器',sortList:[{name:'112灭火'},{name:'112灭火'},{name:'112灭火器'},{name:'112灭火器'},],
     },
       ],
            }
        },
        created: function(){
         this.getData();
        },
        methods: {
         getData: function(){
            var that = this;
            this.$http.post(store.state.config.apiUrlRoot +"admin/show/show/index").then(
              function(response){
              var data = response.body;
              this.infoList=data.content;
              this.inulList=data.content.selectProductList[2].cat.catList;
              this.inulList1=data.content.selectProductList[0].cat.catList;
              this.inulList2=data.content.selectProductList[1].cat.catList;
              this.fanghuList=data.content.selectProductList[0].product;
              this.fanghuList1=this.fanghuList.slice(0,2);
              this.fanghuList2=this.fanghuList.slice(2,6);
              },
              function(erro){
                console.log(erro);
              }
            );
        },
          test(index){
          this. showSort=true;
          this.DetailList=this.infoList.catList[index].list;
          },
          leave(){
             this. showSort=false;
          },
  enter: function(index){
  this.contentList=this.noticeContent[index].contentlist;
    },
   leaveNotice(){
    this.contentList=this.noticeContent[0].contentlist;
   },
   handlePro(){
      this.$router.push({ path: 'protocol'});
   },
   handleCart(){
      this.$router.push({ path: 'cart'});
   },
   handleLogin(){
      this.$router.push({ path: 'login'});
   },
   handleAll(index){
     this.$router.push({ path: 'sortAll', query: { catID: this.DetailList[index].catID}});
   },
       turnTo (index) {
      this.$children.map(swipe => {
          if (swipe.turnTo) {
              swipe.turnTo(index)
          }
      })
    },

   changeDetail(index){
      this.$router.push({ path: 'detail',query: { productID: this.fanghuList1[index].productID}});
   },

        },
    }
</script>
<style scoped>
.red
{
    color:red;
}
a
{
    text-decoration: none;
}
.bor
{
    border:1px solid #dcdcdc;
}
.module
{
  /*  width: 100%;*/
    max-width: 1920px;
     background: #f0f0f0;
/*    height:3000px;*/
}
.sort-ul li:hover
{
  cursor: pointer;
  background: #f2f2f2;
}
/*底部导航栏*/
.logoImg
{
   width:160px;
   margin-top:45px;
   float: left;
}
.footer
{
    width: 100%;
    height: 245px;
}
.footer-top
{
    padding-top:30px;
    width: 100%;
    height: 170px;
    background: #dbdbdb;
}
.footer-ul
{
    /*border:1px solid red;*/
    float:left;
    width: 217px;
    margin-top: 0px;
}
.footer-ul p
{
    color: #000;
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 3px;
    text-align: center;
}
.footer-ul li
{
    height: 22px;
    line-height: 22px;
    color:#333333;
    font-size: 11px;
    text-align: center;
}
.footer-bottom
{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #cccccc;
}
.footer-bottom span
{
   color: #333333;
    font-size: 15px;
    font-weight: bolder;
    display:block;
    float:left;
    margin-right:55px;
}
.content-top
{
  height: 57px;
  font-size: 24px;
  color: #333333;
  text-align: center;
  position: relative;
}
.content-left,.content-right
{
  display: inline-block;
  width: 84px;
  height: 1px;
  background: #000000;
  position: absolute;
}
.content-left
{
  left:41%;
  top:20px;
}
.content-right
{
   right:41%;
  top:20px;
}
/*精选市场*/
.content-select
{
  clear: both;
  background:#f2f2f2;
  padding-top:30px;
}
.fanghu
{
  margin-top: 20px;
  height: 597px;
  background: url('http://protocol.supply.qianchengwl.cn/static/img/fanghu.da8b74e.png');
  margin-bottom: 70px;
}
.fanghu-top
{
  height: 591px;
}
.fanghu-left
{
  width: 240px;
  height: 100%;
  float: left;
}
.intext
{
  width: 100%;
  height:95px;
  font-size: 26px;
  line-height: 95px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0px;
}
.inul
{
  margin-top: 10px;
}
.inul li
{
  width: auto;
  padding: 2px 4px 2px 4px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  color: #ffffff;
  background-color: #9bc1ff;
  margin: 3px;
  font-size: 12px;
  margin-left: 25px;
}
.fanghu-right
{
  width: 957px;
  height: 100%;
  float: left;
}
.right-img-top
{
    height: 294px;
    width: 100%;
    float: left;
}
.right-img-top-left
{
      height: 219px;
      width: 444px;
      float: left;
      padding:50px 25px 25px 10px;
      position: relative;
}
.content-left-txt
{
    width: 180px;
    height: 90px;
    line-height: 90px;
    color: red;
    font-size: 32px;
    text-align: right;
    letter-spacing: 0.5px;
}
.content-left-txt1
{
    width: 180px;
    height: 35px;
    line-height: 35px;
    color: #e0e0e0;
    font-size: 22px;
    text-align: right;
    letter-spacing: 0.5px;
    margin-top: -20px;
}
.content-left-img
{
    position: absolute;
    right: 30px;
    top:50px;
}
.right-img-top-right
{
    height: 294px;
    width: 476px;
    float: left;
}
.content-right-ul
{
    margin: 0px;
    float: left;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}
.content-right-ul li
{
    width: 200px;
    padding:15px 19px 0px 19px;
    float:left;
    cursor: pointer;
}
/*.content-bottom-ul li
{
    width: 190px;
    margin-left: -42px;
    padding:5px 19px 0px 19px;
    float:left;
    margin-right: 42px;
}*/
.content-right-ul li:last-child,.content-bottom-ul li:last-child
{
    float:right;
}
.content-right-ul-span
{
    color:#fe4d3c;
    font-size: 18px;
    font-weight: bolder;
}
.gray
{
    font-size: 14px;
    color: #333333;
}
.right-img-bottom
{
  clear: both;
  height: 297px;
  width: 100%;
}
.fanghu-buttom-left
{
    top:20px;
    left:0px;
}
.fanghu-buttom-right
{
    top:20px;
    right:0;
}
.miehuo
{
  height: 597px;
  background: url('http://protocol.supply.qianchengwl.cn/static/img/%E7%81%AD%E7%81%AB.11e3431.png');
  margin-bottom: 70px;
}
.xiaofang
{
  height: 597px;
  background: url('http://protocol.supply.qianchengwl.cn/static/img/xiaofang.119a286.png');
  margin-bottom: 70px;
}
/*热销供应商*/
.mask
{
  width: 380px;
  height: 140px;
  background-color: #000003;
  opacity:0.4;
  position: absolute;
  left:0px;
  top:-140px;
}
.content-hot
{
  background:#f2f2f2;
  padding-top:30px;
  height: 440px;
}
.content-hot-show-ul
{
  margin-bottom: 30px;
}
.content-hot-show-ul li:last-child
{
    margin-right: 0px;
}
.content-hot-show-ul li
{
  padding:15px;
  width: 350px;
  height: 290px;
 margin-right: 23px;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
  float: left;
}
.pic-img:hover
{
  cursor: pointer;
}
.pic-img:hover .maskImg
{
  display: block;
}
.pic-img
{
  width: 160px;
  height: 160px;
  margin-right:24px;
  position: relative;
}
.pic-img:last-child
{
  margin-right: 0px;
}
.maskImg
{
  width: 161px;
  height: 162px;
 background-color: #000003;
  opacity:0.6;
  color: #fefefe;
  font-size: 12px;
  position: absolute;
  top:0;
  left: 0px;
  z-index:100;
  font-weight: bolder;
  line-height: 20px;
  display: none;
}
.maskImg p
{
  padding-top: 30px;
  width:120px;
  margin: 0 auto;
  text-align: center;
}
.pic-img img 
{
border:1px solid #999999;
}
.show-hr
{
  height: 1px;
  width: 97%;
  background: #dcdcdc;
  margin-bottom: 20px;
  margin-top: -10px;
  z-index: 100px;
}
.show-shop
{
  width: 100%;
  position: relative;
  margin-top: 200px;
}
.show-shop:hover
{
  cursor: pointer;
}
.show-shop:hover .hidden
{
  display: block;
}
.hidden
{
  width: 360px;
  height: 72px;
  background: #ffffff;
  position: absolute;
  top:-85px;
  left: 0px;
  font-size:12px;
   color: #757575;
   margin-top: 8px;
   margin-left: -15px;
   padding-left: 20px;
   display: none;
   padding-top: 5px;
}
.hidden p
{
  height: 20px;
  line-height: 20px;
}
.shop-logo
{
  width:100px;
  height:100px;
  color:red;
  text-align: center;
  line-height: 100px;
  float: left;
}
.info-detail
{
  width: 220px;
  height: 100px;
  padding-left:20px;
  float: left;
}
.info-detail p
{
  margin:0px;
  font-size: 14px;
  color:#333333;
}
.info-detail span
{  
  font-size: 12px;
  color:#757575;
}
.info-detail img
{
  margin-top: 20px;
}
/*中间图片部分*/
/*轮播图*/

.fanghu-buttom-left,.fanghu-buttom-right
{
  display: block;
  width: 42px;
  height: 42px;
  position: absolute;
}
.lun
{
  width:100px;
  height:368px;
}
/*右侧底部*/
.sort-right-bottom-txt
{
  width: 186px;
  margin: 0 auto;
  margin-top: 12px;
}
.sort-right-bottom-txt p
{
  font-size: 13px;
  color: #333333;
  height:25px;
  line-height: 25px;
  margin-bottom: 30px;
  text-align: center;
}
.sort-right-bottom
{
  width:100%;
  height:90px;
  border-top: 1px solid #dbdbdb;
}
.sort-right-bottom-ul
{
  width: 100%;
  height: 35px;
  padding-left:11px;
  margin-top: 10px;
}
.sort-right-bottom-ul li
{
  width: 32px;
  height: 35px;
  display: block;
  float: left;
  margin-right: 18px;
}
/*右侧广告*/
.notice
{
  width: 210px;
  height: 141px;
}
.notice-ul
{
  margin-top: 0px;
  width: 210px;
  height: 40px;
  color:#808080;
  font-size: 12px;
  margin-left: 0px;
  overflow: hidden;
}
.notice-ul li
{
  width: 50px;
  height: 40px;
  display: block;
  float: left;
  line-height: 40px;
  text-align: center;
  border:1px solid #ffffff;
  background-color: #f1f1f1;
}
.notice-ul li:first-child
{
    margin-left: 1px;
}
.notice-ul li:hover
{
  background: #ffffff;
  cursor: pointer;
}
.notice-content
{
  color: #333333;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding-left:3px;
  margin-top: 5px;
}
html{
  margin: 0px;
  padding:0px;
}
ul,li
{
  list-style: none;
}
.box
{
    width: 100%;
    height: auto;
    margin-top: 28px;
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
margin-top: 70px;
height:60px;
width: 321px;
text-align: left;
float: left;
margin-left: 312px;
}
/*.logo span
{
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.logo img
{
  width:124px;
  height: 30px;
  vertical-align: middle;
}*/
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
/*  float: right;
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
  margin-top: -1px;
}
.content-sort
{
  margin-top: 5px;
  height: 530px;
  width: 1200;
  margin: 0 auto;
  background: #f0f0f0;
/*  border:1px solid red;*/
}
.sort-content-mask
{
    width:757px;
    height:494px ;
    background:#ffffff;
    border: 1px solid #ffffff;
    box-shadow:0px 0px  2px 2px #eeeeee;
    border-top: none;
    border:none;
    /*border-top:1px solid red;*/
    overflow: hidden;
    position: absolute;
    left:220px;
    top:2px;
    z-index: 200;
  /*  border:1px solid green;*/
}
.sort-detail-txt
{
  color:red;
  margin-left:25px;
  font-size: 14px;
}
.sort-detail-span
{
  margin-left: 25px;
  color: #333333;
  font-size:14px;
}
.sort-detail
{
  width: 100%;
  margin-bottom: 40px;
  padding-top: 20px;
}
.sort-left
{
  width: 210px;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
  height: 494px;
  float: left;
}
.sort-ul
{
  width:169px;
  font-size: 14px;
  color:#333333;
  font-weight: bold;
  margin:0;
  height: 100%;
}
.sort-ul li
{
  height:38px;
  line-height: 38px;
  width: 185px;
  display: block;
  float: left;
  text-align: left;
  padding-left:25px;
}

.sort-img span
{
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.sort-img
{
  width:32px;
  height: 44px;
  float: right;
}
.sort-img img
{
  width:32px;
  height: 32px;
  vertical-align: middle;
}
.pic
{
  width: 740px;
  height: 494px;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
}
.sort-right
{
  margin-top: 20px;
  width: 210px;
  height: 474px;
 /* float: right;*/
 position: absolute;
 right: 0px;
 top: 0px;
 border:1px solid red;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
}
.sort-right-top
{
  width: 100%;
  height:224px;
  border-bottom: 1px solid #dbdbdb;
}
.my
{
  width: 60px;
  height: 85px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 22px;
}
.my-txt
{
  color: #808080;
  font-size: 12px;
  text-align: center;
}
.my-login
{
  width: 170px;
  height: 85px;
  margin: 0 auto;
}
.my-btn
{
  display: block;
  width: 170px;
  height: 30px;
  border:none;
  text-align: center;
  color:#ffffff;
  background-color: red;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}
</style>

</style>
