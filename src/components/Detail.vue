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
        <div class="bottom-text">
        <span>供货协议</span>
        <hr class="h">
        </div>
    </div>
    </div>
</div>
 </div>
<!-- 列表 -->
 <div class="content-list">
    <div class="content">
    <!-- 中间部分 -->
    <div class="proTop"><span>全部分类 > 商品详情</span></div>
<!--     商品信息部分 -->
    <div class="proDetail" >
   <!--  左边 -->
      <div class="proLeft">
        <div class="proLeft-top">
          <img src="../assets/detail/QQ截图20170905140207.png" height="360" width="360">
        </div>
        <div class="proLeft-bottom">
          <ul class="proLeft-bottom-ul">
            <li  v-for="(item,index)  in smaImg"  @click="changBred(index)"  v-bind:class='{isRed:isRed==index}'><img :src="item.name" height="80" width="80"></li>
          </ul>
        </div>
      </div>
     <!--  左边结束 -->
     <!-- 中间部分 -->
      <div class="proMiddle">
        <h3>消防灭火器材 干粉灭火器 家用厂房 4kg手提干粉灭火器</h3>
        <div class="price">
          <div class="price-top">
            <div class="price-txt">
            <span class="price-top-txt">协议价 : &nbsp;&nbsp;</span>
            <span class="price-top-prcie">60.00</span>
            </div>
            <div class="price-top-bottom">
              <span class="price-top-txt" style="line-height:30px;">累计销量</span>
               <span class="price-top-num">200</span>
            </div>
          </div>
          <div class="price-bottom">
            <span class="price-top-txt">累计评价 : 1204 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;满意度: 90分</span>
          </div>
        </div>
        <!-- 价格结束 -->
        <div class="address">
        <div class="address-top">
         <p class="address-top-txt">配送至:</p>
         <div class="address-top-input"><i class="down fa fa-angle-down"></i> </div>
        </div>
        <div class="address-bottom">
          <div class="btn-left">
            <button style="border-right:1px solid #bdbdbd;">-</button>
            <span>1</span>
             <button style="border-left:1px solid #bdbdbd;">+</button>
          </div>
          <img src="../assets/detail/加入购物车.png">
        </div>
        </div>
     <!--    价格对比 -->
     <div class="contrast">
      <div class="contrast-left">
        <span class="big">价格对比 : </span></br>
        <span class="red small">查看更多</span>
      </div>
       <div class="contrast-right">
         <ul class="contrast-right-ul">
           <li class="flex-item" v-for="item in contrastList">
             <img :src="item.name">
           </li>
         </ul>
       </div>
     </div>
      </div>
    <!--   中间结束 -->
    <!-- 右边部分 -->
      <div class="proRight">
        <div class="proRight-top">
          <img class="proRight-top-img" src="../assets/img/logo.png" height="30" width="124">
          <p class="proRight-top-txt">杭州某某公司</p>
        </div>
        <div class="proRight-bottom">
        <div class="quality">
          <ul class="quality-ul">
            <li v-for="item in qualityList">{{item.name}}</li>
          </ul>
        </div>
        <div class="proRight-bottom-btn" style="position:relative;">
        <div class="shopInfo" v-if="shop">
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <p>单位:九江消防装备有限公司</p>
          <img src="../assets/detail/形状-8-拷贝.png" height="28" width="28" class="re" @click="handleShop">
         <!--  <i class="re fa fa-close fa-lg" @click="handleShop"></i> -->
        </div>
          <img src="../assets/detail/查看单位信息.png" height="37" width="196" @click="showInfo">
          <img src="../assets/detail/进入店铺.png" height="37" width="196">
        </div>
        <div class="icno">
          <ul class="icno-ul">
            <li v-for="item in icnoList">
               <img :src="item.img">
               <span>{{item.txt}}</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
   <!--    右边结束 -->
    </div>
<!-- 商品展示部分结束 -->
<div class="proInfo" >
<!-- 头部导航栏 -->
<div class="proInfo-top">
  <ul class="proInfo-top-ul">
  <li v-bind:class='{rbg:showBg==index}' v-for="(item,index) in  topList" @click="changeIndex(index)">{{item.name}}</li>
  </ul>
 </div>
 <!-- 头部导航栏结束 -->
  
  <div v-if="showBg==0" class="details">
  <div class="details-top">
    <p>品牌 : 神龙</p>
    <span class="details-top-txt" v-for="item in detailList">{{item.name}}</span>
    <p class="details-top-right" @click="handleGui">更多参数 &nbsp;></p>
  </div>
<!--   从后台获取数据 -->
  <div class="details-bottom">
 <!--     产品参数 -->

  </div>
  </div>
  <!-- 商品详情部分结束 -->
<!--   规格参数 -->
<div v-if="showBg==1" class="gui">
  <ul class="gui-ul">
    <li v-for="item in  paraList"><span class="gui-ul-txt">{{item.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.para}}</li>
  </ul>
</div>
<!-- 规格参数结束 -->
<!-- 用户评价 -->
<div v-if="showBg==2" class="yong">
  <div class="yong-content">
    <div class="yong-top">
      <ul class="yong-top-ul">
        <li v-bind:class='{red:ping==0}'>全部评价&nbsp;&nbsp;( 300 )</li>
        <li v-bind:class='{red:ping==1}'>好评&nbsp;&nbsp;( 300 )</li>
        <li v-bind:class='{red:ping==2}'>中评&nbsp;&nbsp;( 300 )</li>
        <li v-bind:class='{red:ping==3}'>差评&nbsp;&nbsp;( 300 )</li>
      </ul>
    </div>
    <div class="yong-bottom" v-if="ping==0">
    <ul class="yong-bottom-ul">
    <li>
      <div class="yong-bottom-ul-top">
        <img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
        <span class="yong-span" >星级</span>
        <div class="yong-start">
         <el-rate
          v-model="value5"
          disabled
         :colors="['#fe4d3c', '#fe4d3c', '#fe4d3c']"
          text-template="{value}">
      </el-rate>
      </div>
      <span class="yong-span">数量&nbsp;: 200</span>
      <span class="yong-span">累计采购&nbsp;: 2264</span>
      </div>
      <div class="yong-bottom-ul-bottom">
        <div class="yong-txt-left">昵称</div>
        <div class="yong-txt-right">呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的</div>
      </div>
    </li> 
       <li>
      <div class="yong-bottom-ul-top">
        <img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
        <span class="yong-span" >星级</span>
        <div class="yong-start">
         <el-rate
          v-model="value5"
          disabled
         :colors="['#fe4d3c', '#fe4d3c', '#fe4d3c']"
          text-template="{value}">
      </el-rate>
      </div>
      <span class="yong-span">数量&nbsp;: 200</span>
      <span class="yong-span">累计采购&nbsp;: 2264</span>
      </div>
      <div class="yong-bottom-ul-bottom">
        <div class="yong-txt-left">昵称</div>
        <div class="yong-txt-right">呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的呼呼u呼和广大刚开始的干哈了高德噶预算有点高的</div>
      </div>
    </li> 
      </ul>
    </div>
  </div>
</div>
<!-- 用户评价结束 -->
</div>
<!--   proInfo结束 -->
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
<!--   底部导航栏结束 -->
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
              isRed:0,
              value5: 3.7,
              ping:0,
              paraList:[{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},{name:'灭火级别',para:'参数值'},],
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
              topList:[{name:"商品详情"},{name:"规格参数"},{name:"用户评价"},],
              detailList:[{name:'商品名称: 神龙MFZ/ABC4'},{name:'商品编号:1881129'},{name:'商品毛重: 6.25kg'},{name:'商品产地: 中国大陆'},{name:'类别: 灭火器'},],
              showBg:0,
              shop:false,
              icnoList:[{img:require('../assets/detail/图层-14.png'),txt:'正品保证'},{img:require('../assets/detail/图层-9.png'),txt:'本地服务'},{img:require('../assets/detail/图层-11.png'),txt:'售后无忧'},{img:require('../assets/detail/图层-10.png'),txt:'售前咨询'},{img:require('../assets/detail/图层-13.png'),txt:'一站齐购'},{img:require('../assets/detail/图层-12.png'),txt:'预约送达'},],
              qualityList:[{name:'产品质量 :0'},{name:'服务态度 :0'},{name:'发货速度 :0'},{name:'到货速度 :0'},{name:'好评率 :0%'},{name:'创建时间 :2017-08-08'},],
              contrastList:[{name:require('../assets/detail/QQ截图20170801163545-拷贝.png')},{name:require('../assets/detail/QQ截图20170801163545-拷贝.png')},{name:require('../assets/detail/QQ截图20170801163545-拷贝.png')},],
              smaImg:[{name:require('../assets/detail/QQ截图20170905140207_10.png'),isRed:'2px solid red'},{name:require('../assets/detail/QQ截图20170905140238.png'),isRed:'0px solid red'},{name:require('../assets/detail/QQ截图20170905140249.png'),isRed:'0px solid red'},{name:require('../assets/detail/QQ截图20170905140249-拷贝.png'),isRed:'0px solid red'},],
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
             handleCart(){
         this.$router.push({ path: 'cart'});
         },
         showInfo(){
          this.shop=true;
         },
         handleShop(){
           this.shop=false;
         },
         changeIndex(index){
          this.showBg=index;
         },
         handleGui(){
          this.showBg=1;
         },
         changBred(index){
          this.isRed=index;
          //再刷新一遍数据
         },
        }
    }
</script>
<style scoped>
.isRed
{
  border:2px solid #fe4d3c;
}
.yong-txt-left
{
  width:45px;
  height: 124px;
  line-height: 45px;
  float: left;
}
.yong-txt-right
{
  width: 1074px;
  height: 124px;
  line-height: 45px;
  float: left;
}
.yong-start
{
  height: 31px;
  line-height: 36px;
  float: left;
  padding-top: 6px;
}
.yong-img
{
  float:left;
}
.yong-span
{
  line-height: 36px;
  float: left;
  margin-right: 10px;
  margin-left: 40px;
}
.yong-bottom-ul-top
{
  width: 100%;
  height: 36px;
  font-size: 16px;
  color: #333333;
}
.yong-bottom-ul-bottom
{
  clear: both;
  width: 100%;
  height: 124px;
  font-size: 16px;
  color: #333333;
}
.yong-bottom-ul
{
  width: 100%;
  padding-left: 0px;
/*  border:1px solid red;*/
margin-bottom: -29px;
}
.yong-bottom-ul li
{
  height: 160px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 30px;
}
.yong-bottom-ul li:last-child
{
  border-bottom: 0px solid #bdbdbd;
}
.yong-bottom
{
  width: 100%;
}
.yong-top-ul
{
  width: 100%;
  padding-left: 0px;
  height: 40px;
  color: #333333;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.yong-top-ul li
{
  width: 165px;
  height: 40px;
  line-height: 40px;
}
.yong-top
{
  width: 1089px;
  height: 40px;
  font-size: 16px;
  background: #f2f2f2;
  margin-top: 20px;
  padding-left: 30px;
}
.yong-content
{
  width: 1119px;
  margin: 0 auto;
}
.yong
{
  width: 100%;
  background: #ffffff;
}
.box
{
  width: 100%;
  height: auto;
}
.gui
{
  width: 100%;
  background: #ffffff;
  padding-bottom: 25px;
}
.gui-ul-txt
{
  color: #757575;
}
.gui-ul
{
  padding-top: 25px;
  width: 100%;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gui-ul li
{
  font-size: 16px;
  width: 350px;
  height: 30px;
  line-height: 30px;
  padding-left: 50px;
  color: #333333;
  padding-bottom: 10px;
}
.details-bottom
{
  width: 100%;

}
.details-top-right
{
position: absolute;
right: 15px;
bottom: 3px;
font-size: 14px;
color: #fe4d3c;
cursor: pointer;
}
.details-top-txt
{
  display: inline-block;
  line-height: 40px;
  margin-right: 20px;
  font-size: 16px;
}
.details-top
{
  height: 115px;
  border-bottom:1px solid #bdbdbd;
  padding-left:50px;
  padding-top:15px;
 position: relative;
}
.details
{
  width: 100%;
  background: #ffffff;
  margin-top: 0px;
}
.rbg
{
  background: #fe4d3c;
   color: #ffffff;
}
.proInfo-top-ul
{
  width: 360px;
  height: 47px;
  padding-left: 0px;
  color: #333333;
}
.proInfo-top-ul li
{
  line-height: 47px;
  text-align: center;
  width: 120px;
  height: 47px;
  float: left;
  display: block;
  font-size: 16px;
  cursor: pointer;
}
.proInfo-top
{
  height: 47px;
  width: 100%;
  border-bottom:1px solid #fe4d3c;
}
.proInfo
{
  width: 100%;
  margin-top: 20px;
  background: #ffffff;
}
.re
{
  position: absolute;
  color: #C0CCDA;
  left: 300px;
  top:0px;
  cursor: pointer;

}
.shopInfo
{
  width: 300px;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
  height: 220px;
  z-index: 200px;
  left:-65px;
  top:50px;
  position: absolute;
  padding-left: 40px;
  font-size: 14px;
  padding-top: 15px;
}
.shopInfo p
{
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.icno
{
  width: 100%;
  height: 150px;
}
.icno-ul
{
  width: 100%;
  padding-left: 0px;
  margin-top: -5px;
}
.icno-ul li
{
  width: 100px;
  height: 50px;
  display: block;
  float: left;
}
.icno-ul li img
{
  margin-top: 12px;
  float: left;
  margin-right: 8px;
}
.icno-ul li span
{
  display:block;
  font-size: 14px;
  float: left;
  line-height: 50px;
}
.proRight-bottom-btn img
{
  margin-top: 15px;
  cursor: pointer;
}
.proRight-bottom-btn
{
  height: 108px;
}
.proRight-bottom
{
  width: 211px;
  padding-left: 15px;
  height: 475px;
}
.quality
{
  height: 180px;
}
.quality-ul
{
  width: 100%;
  height: 200px;
  padding-left: 0px;
}
.quality-ul li
{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #333333;
}
.proRight-top-txt
{
  color: #333333;
  font-size: 14px;
}
.proRight-top
{
  height: 75px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  padding-top: 10px;
}
.contrast-right-ul
{
  margin-top: -12px;
  width: 380px;
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
}
.contrast-right-ul li
{
  width: 100px;
  height: 100px;
/*  border:1px solid #bdbdbd;*/
}
.big
{
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.8;
}
.small
{
  font-size: 14px;
  cursor: pointer;
  line-height: 40px;
}
.contrast-left
{
  width: 100px;
  float: left;
  height: 80px;
}
.contrast-right
{
  width: 438px;
  height: 102px;
  float: left;
}
.contrast
{
  width: 100%;
  height: 102px;
  margin-top: 60px;
}
.btn-left
{
  height: 40px;
  width: 140px;
  float: left;
  border:1px solid #bdbdbd;
  margin-right: 60px;
}
.btn-left button
{
  width: 42px;
  height: 40px;
  text-align: center;
  background: #ffffff;
  border:none;
}
.btn-left  span
{
  display: inline-block;
  width: 45px;
  height: 40px;
  text-align: center;
}
.address-bottom
{
  clear: both;
  height: 40px;
  width: 100%;
}
.down
{
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
}
.address-top-input
{
  width: 200px;
  height: 40px;
  border:1px solid #bdbdbd;
  float: left;
  margin-top: 35px;
  margin-left: 15px;
  position: relative;;
}
.address-top-txt
{
  font-size: 16px;
  line-height: 80px;
  height: 80px;
  float: left;
}
.address
{
  height: 145px;
  width: 100%;
}
.address-top
{
  height:80px;
  width: 100%;
  float: left;
  margin-bottom: 40px;
}
.price-bottom
{
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #bdbdbd;
  line-height: 65px;
} 
.price-top-num
{
  font-size: 20px;
  color: #333333;
  line-height: 30px;
}
.price-txt
{
  width:185px;
  line-height: 90px;
  float: left;
  padding-left: 10px;
}
.price-top-prcie
{
  color: #fe4d3c;
  font-size: 30px;
  font-weight: bold;
}
.price-top-txt
{
  color:#333333;
  font-size: 14px;
}
.price-top-bottom
{
  width: 80px;
  padding-left: 20px;
  margin-top: 20px;
  float: right;
  border-left:1px solid #bdbdbd;
  height: 60px;
}
.price
{
  width: 100%;
  height: 165px;
  border-bottom: 1px solid #bdbdbd;
}
.price-top
{
  height: 100px;
  width: 100%;
  background: #f0f0f0;
}
.bRed
{
  border-color: 2px solid red;
}
.content-list
{
    width: 100%;
    height: auto;
    border-top:1px solid #fe4d3c;
    background:#f1f1f1;
}
.proTop
{
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.proTop  span
{
  display: inline-block;
  font-size: 14px;
  color: #33333;
}
.proDetail
{
  width: 100%;
  height: 560px;
}
.proLeft
{
  width: 400px;
  height: 560px;
  background: #ffffff;
  float: left;
}
.proLeft-top
{
  width: 360px;
  height: 360px;
  margin:20px;
  border:1px solid  #bdbdbd;
}
.proLeft-bottom
{
  height: 120px;
  width: 370px;
  padding-left: 20px;
}
.proLeft-bottom-ul
{
  width: 380px;
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flex-item {
   margin-right: 14px;
   margin-bottom: 10px;
}
.proLeft-bottom-ul li
{
  width: 80px;
  height: 80px;
  cursor: pointer;
  margin-right: 14px;
  margin-bottom: 10px;
}
.proMiddle
{
  width: 538px;
  height: 560px;
  background: #ffffff;
  float: left;
   padding-left: 8px;
   padding-right: 15px;
}
.proMiddle h3
{
  color:#333333;
  font-size: 18px;
  height: 90px;
  line-height: 90px;
}
.proRight
{
  width: 226px;
  height: 560px;
  background: #ffffff;
  float: right;
}
/*公共样式*/
ul,li
{
  list-style: none;
}
.red
{
    color:#fe4d3c;
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
    height:auto;
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
 padding-left: 5px;
height: 34px;
width: 411px;
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
  margin-left: 245px;
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
</style>
