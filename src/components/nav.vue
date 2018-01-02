<template>
  <div id="hello">
   <div class="lanrenzhijia_service"  style="z-index:200;">
    <ul>
      <span class="right_bar"></span>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq" ></a>
      <span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
    </ul>
   </div>
  </div>

</template>

<script>
    import "../assets/css/fenye.css"
   import store from '../store.js'
   import $ from 'jquery'
       export default {
   created: function(){
       $(function(){
  $(".lanrenzhijia_service").hover(function(){
    $(this).animate({width:'160px'});
  },function(){
    $(this).animate({width:'40px'});
  });
           });
   },
 }
</script>

