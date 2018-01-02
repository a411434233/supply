<template>
<!-- 头部导航 -->
  <div class="module">
  <div class="content">
    <div class="top">
    <div class="top-logo">
    <img src="../assets/img/logo.png">
    <span class="top-logo-txt">登录</span>
    </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <img src="../assets/login/矢量智能对象_83.png" height="345" width="787">
      </div>
      <div class="bottom-right">
      <p class="login-bottom-right-txt" >密码登录</p>
        <form>
        <div class="input-text">
           <input type="text" v-model="loginList.username" placeholder="请输入账号/邮箱/手机号">
           <img src="../assets/login/账号.png" height="20" width="20">
         </div>
          <div class="input-text">
          <input type="text" v-model="loginList.password" placeholder="请输入密码">
          <img src="../assets/login/密码-(3).png" height="20" width="20" >
          </div>
          <img src="../assets/login/登录_60.png" height="40" width="299" class="sub" @click="handleSubmit"></br>
          <div class="check-input">
                <input name="need_inv" type="checkbox" style="height:16px;width:16px;float:left;"><p class="check-txt">记住密码</p>
         </div>
         <div class="wang">
           <span class="wang-txt" @click="handleForgot">忘记用户名 ?&nbsp;忘记密码 ?</span>
            <span class="reg" @click="handleReg">商家注册</span>
         </div>
        </form>
      </div>
    </div>
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
             loginList:{username:"",password:'',},
             searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
                 navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
                 cartList:[{companyName:"杭州某某公司",infoList:[{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},],},
                 {companyName:"杭州某某公司",infoList:[{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},{proImg:require('../assets/hello/cart.png'),proName:'商品名称',size:'54646',price:'84.00',total:'84'},],},
                 ],
            }
        },
        created: function(){
        },
        methods: {
          handleSubmit(){
           var that = this;
            this.$http.post(store.state.config.apiUrlRoot + "admin/user/login",this.loginList).then(
              function(response){
                 var data = response.body;
                 console.log(data.code);
                 if(data.code==1){
                     that.$message({
                        message: data.msg,
                        type: 'success'
                    });
                   if(data.content.roleID==2){
                     this.$router.push({ path: '/'});
                   }
                   if(data.content.roleID==1){
                    window.open('http://duanhui.qianchengwl.cn/admittance');
                   }
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
          handleForgot(){
          this.$router.push({ path: 'forgotPas'});
          },
        }
    }
</script>
<style scoped> 
.wang
{
  width: 100%;
  height: 30px;
  color:#757575;
  font-size: 15px;
  margin-top: 25px;
  cursor: pointer;
}
.wang-txt
{
 margin-right: 70px;
}
.check-txt
{
  color:#757575;
  font-size: 13px;
  margin-left: 5px;
  float: left;
  margin-top: 1px;
}
.check-input
{
  height: 20px;
}
.sub
{
  cursor: pointer;
  margin-top: 4px;
  margin-bottom: 14px;
}
.module
{
    max-width: 1920px;
}
.content
{
  width: 1200px;
  margin:0 auto;
}
.top
{
  height: 148px;
  width: 100%;
  position: relative;
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
  width: 60px;
  color: #757575;
  font-size: 17px;
  position: absolute;
  left: 110%;
  top:15%;
}
.bottom
{
  height: 345px;
  width: 100%;
}
.bottom-left
{
 width: 787px;
 height: 345px;
 float: left;
 background: pink;
}
.bottom-right
{
  width: 333px;
  height: 314px;
  float: right;
  margin-top: 31px;
 border:1px solid #bdbdbd;
  padding-left: 30px;
}
.login-bottom-right-txt
{
  font-size: 18px;
  color: #757575;
  height: 57px;
  line-height: 57px;
}
.input-text
{
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
}
.input-text input
{
 width: 250px;
 height: 40px;
 padding-left: 50px;
}
.input-text img
{
  position: absolute;
  left: 10px;
  top: 12px;
}




</style>
