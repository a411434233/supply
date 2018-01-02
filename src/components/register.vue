<template>
<!-- 头部导航 -->
  <div class="module">
    <div class="top">
    <div class="top-content">
    <div class="top-logo">
    <img src="../assets/img/logo.png">
    <span class="top-logo-txt">商家注册</span>
    </div>
    </div>
    </div>
    <div class="bottom">
    <div class="bottom-content">
      <p class="bottom-txt">消防装备协议采购系统商家注册</p>
       <form>
       <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>账号 :</span>
         <input type="text"  v-model="regList.username">
       </div>
          <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>设置密码 :</span>
         <input type="text" v-model="regList.password">
       </div>
        <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>确认密码 :</span>
         <input type="text" v-model="regList.repassword">
       </div>
        <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>公司名称 :</span>
         <input type="text" v-model="regList.sellerName">
       </div>
        <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>手机 :</span>
         <input type="text" v-model="regList.mobile">
       </div>
      <!--   <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>验证码 :</span>
         <input type="text" v-model="regList.code">
       </div> -->
        <div class="bottom-input">
         <span class="input-text"><span style="color:red;">* </span>邮箱 :</span>
         <input type="text" v-model="regList.email">
       </div>
        <div class="bottom-input" >
         <span class="input-text"><span style="color:red;">* </span>公司地址 :</span>
         <input type="text" v-model="regList.address">
       </div>
       <img src="../assets/login/确定注册.png" height="61" width="299" class="que" @click="Reg">
       </form>
    </div>
    </div>
</div>
</template>
<script>
import store from '../store.js'
    export default {
        name: 'module',
        data: function (){
            return {
              regList:{
                username:'',
                password:'',
                repassword:'',
                sellerName:'',
                mobile:'',
                email:'',
                address:'',
              },
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
          Reg(){
          var that = this;
            this.$http.post(store.state.config.apiUrlRoot + "admin/admin/user/sellerApply",this.regList).then(
              function(response){
                 var data = response.body;
                 if(data.code==1){
                     that.$message({
                        message: data.msg,
                        type: 'success'
                    });
                 } else{
                      that.$message.error(data.msg);
                        return;
                    }
              },
              function(erro){
                console.log(erro);
              },
              );
          },
          handleReg(){
         this.$router.push({ path: 'register'});
          },
        }
    }
</script>
<style scoped> 
.que
{
margin-left:420px;
margin-top: 80px;
cursor: pointer;
}
.se
{
  width: 150px;
  height: 40px;
  margin-left: 4px;
/* border:1px solid #bdbdbd;*/
}
.el-input__inner {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
/*    border-radius: 4px;*/
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.bottom-input
{
  width: 540px;
  height: 40px;
  margin-left:270px;
  margin-bottom: 30px;
}
.bottom-input input
{
  width: 413px;
  height: 36px;
  border:none;
  border:1px solid #bfbfbf;
  margin-left: 10px;
  padding-left: 5px;
}
.input-text
{
width: 110px;
height: 40px;
display: inline-block;
line-height: 40px;
text-align: right;
color: #757575;
font-size: 20px;
float: left;
}
.bottom-txt
{
  color:#fe4d3c;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
  height: 165px;
  line-height: 110px;
}
.top
{
  height: 120px;
  width: 100%;
  background: #f1f1f1;
}
.top-content
{
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.bottom-content
{
   width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  height: 1000px;
}
.top-logo
{
  position: absolute;
  left: 0;
  bottom: 45px;
}
.top-logo img
{
  padding-right: 10px;
  border-right:1px solid #bdbdbd;
  position: relative;
}
.top-logo-txt
{
  width: 200px;
  color: #757575;
  font-size: 17px;
  position: absolute;
  left: 110%;
  top:15%;
  font-weight: bold;
}
.bottom
{
  background: #e5e5e5;
  width: 100%;
  padding-top: 40px;
  height: 1486px;
}
</style>
