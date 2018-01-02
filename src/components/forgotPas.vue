<template>
<!-- 头部导航 -->
    <div class="module">
    <div class="content">
    <div class="top"><p class="txt">忘记密码</p></div>
    <div class="bottom">
    <form>
      <div class="bottom-input">
      <span class="input-text"><span style="color:red;">* </span>手机 :</span>
      <input type="text"  v-model="infoList.mobile">
      </div>
      <div class="bottom-input">
      <span class="input-text"><span style="color:red;">* </span>验证码 :</span>
      <input type="text"  v-model="infoList.mobile" style="width:320px;">
      <img src="../assets/login/获取验证码.png" height="40" width="85" @click="getCode">
      </div>
       <div class="bottom-input">
      <span class="input-text"><span style="color:red;">* </span>设置密码 :</span>
      <input type="text"  v-model="infoList.mobile" >
      </div>
        <div class="bottom-input">
      <span class="input-text"><span style="color:red;">* </span>确认密码 :</span>
      <input type="text"  v-model="infoList.mobile" >
      </div>
      <img src="../assets/login/提交.png" height="40" width="163" class="input-img" @click="handleSubmit">
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
                infoList:{},
            }
        },
        created: function(){
            //this.$router.push('/module/work/update');
        },
        methods: {
          handleSubmit(){
            console.log(this.infoList);
          },
          getCode(){},
        }
    }
</script>
<style scoped> 
.module
{
    max-width: 1920px;
     background: #f1f1f1;
     height: 970px;
}
.content
{
  width:1200px;
  margin: 0 auto;
  height: 100%;
  border:1px solid #f1f1f1;
}
.top
{
  margin-top: 120px;
}
.txt
{
  font-size: 24px;
  color: #757575;
  height: 60px;
  line-height: 60px;
}
.bottom
{
  padding-top: 128px;
  width: 100%;
  height: 522px;
  background: #ffffff;
}
.bottom-input
{
  width: 545px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 24px;
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
.bottom-input input
{
  padding-left: 5px;
  width: 413px;
  height: 36px;
  border:none;
  border:1px solid #bfbfbf;
  margin-left: 10px;
}
.bottom-input img
{
  float: right;
  cursor: pointer;
}
.input-img
{
  width: 163px;
  height: 40px;
 margin-left: 556px;
 margin-top: 30px;
 cursor: pointer;
}
</style>
