<template>
	<!-- 左侧导航 -->
	<div class="module" >
		<div class="main-content-box">
			
			<div class="btn-top" >
						<div class="btn-top-input">
							<div class="input-item">商品名称 : <input type="text" v-model="searchList.productName"></div>
								<div class="input-item">商品分类 :
								<select v-model="searchList.catID">
								<option v-for="item in typeList" v-bind:value="item.catID" class="op">
								{{item.catName }}
								</option>
								</select>
							</div>
							<div class="input-item">品牌 : <input type="text" v-model="searchList.brandName"></div>
							<div class="input-item">型号 : <input type="text" v-model="searchList.model"></div>
				 		</div>
						<div class="btn-top-bottom" >
				 		<img src="../../assets/web/清除.png" height="41" width="94" @click="handleClear" style="margin-right:20px;">
				 		<img src="../../assets/web/查询.png" height="41" width="94" @click="handleSearch">
						</div>
					</div>
					<div  class="sales-title" style="margin-bottom:50px;">
						<ul class="unshelf-ul">
							<li v-for="(item,index) in  TabList" @click="changeTab(index)">{{item}}
								<div class="maskUl" v-if="showTab==index"></div>
							</li>
							<div class="sales-p-bottom"></div>
						</ul>
					</div>
					  <span style="line-height:60px;padding-left:25px;font-weight:bold;color:#c8996b;font-size:16px;" v-show="name.length==0">暂无数据......</span>
					<table style="width: 100%;border:1px solid #e6ebf5;border-bottom:0px;" cellspacing="0"  v-show="showTab==0&&name.length!=0">
			  <tr style=" background: #f3f3f3;height:60px;">
			  	<th class="cellName" style="text-align:left;padding-left:100px;">产品名称</th>
			  	<th class="cellName">型号</th>
			  	<th class="cellName">供货价</th>
			  	<th class="cellName">有效年份</th>
			  	<th class="cellName">状态</th>
			  </tr>
			   <tr  v-for="(item,index) in  name" style="color:#333333;">
			   <th class="cellName1" style="text-align:left;padding-left:20px;position:relative;">
			     <input type="checkbox" name="" @click="testDet(item.productID)" v-model="ALL" :value="index" style="width:20px;height:20px;border:1px solid red;position:absolute;top:30px;">
			   	 <img :src="item.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
     				<span class="gg">{{item.productName}}</span> 
			   </th>
			   <th class="cellName1">
			   	{{item.model}}
			   </th>
			   <th class="cellName1">{{item.price}}</th>
			   <th class="cellName1">{{item.quality}}</th>
			    <th class="cellName1">审核中</th>
			   </tr>
		            </table>
		            <table style="width: 100%;border:1px solid #e6ebf5;border-bottom:0px;" cellspacing="0"  v-show="showTab==1&&name.length!=0" >
			  <tr style=" background: #f3f3f3;height:60px;">
			  	<th class="cellName" style="text-align:left;padding-left:100px;">产品名称</th>
			  	<th class="cellName">型号</th>
			  	<th class="cellName">供货价</th>
			  	<th class="cellName">有效年份</th>
			  	<th class="cellName">状态</th>
			  	<th class="cellName">操作</th>
			  </tr>
			   <tr  v-for="(item,index) in  name" style="color:#333333;">
			   <th class="cellName1" style="text-align:left;padding-left:20px;position:relative;">
			             <input type="checkbox" name="" @click="testDet(item.productID)" v-model="ALL" :value="index" style="width:20px;height:20px;border:1px solid red;position:absolute;top:30px;">
			   	 <img :src="item.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
     				<span class="gg">{{item.productName}}</span> 
			   </th>
			   <th class="cellName1">
			   	{{item.model}}
			   </th>
			   <th class="cellName1">{{item.price}}</th>
			   <th class="cellName1">{{item.quality}}</th>
			    <th class="cellName1">审核不通过</th>
			    <th> <img src="../../assets/web/修改_11.png" style="cursor:pointer;" @click="handleChange(item.productID)"></th>
			   </tr>
		            </table>
					  	<!-- 	 <el-table 
					            v-show="showTab==0"
    						ref="multipleTable"
    						:data="name"
    						style="width: 100%;border-left:1px solid #e6ebf5;border-right:1px solid #e6ebf5;margin-top:20px;border-top:1px solid #e6ebf5;"
    						@selection-change="handleSelectionChange" 
  					            :header-row-class-name="testName"
    						:header-cell-class-name="testCell"
   						 :cell-class-name="testRow"
    						>
    						<el-table-column
      						type="selection"
      						width="55">
   						 </el-table-column>
   						 <el-table-column
      						label="产品名称"
     						 width="450"
    						  >
    						 <template scope="table" >
    						 <img :src="table.row.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
     						<span class="gg">{{table.row.productName}}</span> 
    						 </template>
    						</el-table-column>
    						<el-table-column
      						prop="model"
     						 label="型号"
    						 >
   						 </el-table-column>
    						<el-table-column
      						prop="price"
     						 label="供货价"

      						show-overflow-tooltip>
    						</el-table-column>
        						<el-table-column
    						  prop="quality"
    						 label="有效年份"
     						 show-overflow-tooltip>
   						 </el-table-column>
      						<el-table-column
      						label="状态"
      						show-overflow-tooltip>
     						 <template scope="table">
    						 待审核
     						</template>
    						</el-table-column>
  						</el-table> 
  						<el-table 
					            v-if="showTab==1"
    						ref="multipleTable"
    						:data="name"
    						style="width: 100%;border-left:1px solid #e6ebf5;border-right:1px solid #e6ebf5;margin-top:20px;"
    						@selection-change="handleSelectionChange" 
  					            :header-row-class-name="testName"
    						:header-cell-class-name="testCell"
   						 :cell-class-name="testRow"
    						>
    						<el-table-column
      						type="selection"
      						width="55">
   						 </el-table-column>
   						 <el-table-column
      						label="产品名称"
     						 width="450"
    						  >
    						 <template scope="table" >
    						 <img :src="table.row.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
     						<span class="gg">{{table.row.productName}}</span> 
    						 </template>
    						</el-table-column>
    						<el-table-column
      						prop="model"
     						 label="型号"
    						 >
   						 </el-table-column>
    						<el-table-column
      						prop="price"
     						 label="供货价"

      						show-overflow-tooltip>
    						</el-table-column>
        						<el-table-column
    						  prop="quality"
    						 label="有效年份"
     						 show-overflow-tooltip>
   						 </el-table-column>
      						<el-table-column
      						label="状态"
      						show-overflow-tooltip>
     						 <template scope="table">
    						审核失败
     						</template>
    						</el-table-column>
    						<el-table-column
      						label="操作"
      						show-overflow-tooltip>
     						 <template scope="table">
    						 <img src="../../assets/web/修改_11.png" style="cursor:pointer;" @click="handleChange(table.row.productID)">
     						</template>
    						</el-table-column>
  						</el-table>
  						<el-table 
					            v-if="showTab==2"
    						ref="multipleTable"
    						:data="name"
    						style="width: 100%;border-left:1px solid #e6ebf5;border-right:1px solid #e6ebf5;margin-top:20px;"
    						@selection-change="handleSelectionChange" 
  					            :header-row-class-name="testName"
    						:header-cell-class-name="testCell"
   						 :cell-class-name="testRow"
    						>
    						<el-table-column
      						type="selection"
      						width="55">
   						 </el-table-column>
   						 <el-table-column
      						label="产品名称"
     						 width="450"
    						  >
    						 <template scope="table" >
    						 <img :src="table.row.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
     						<span class="gg">{{table.row.productName}}</span> 
    						 </template>
    						</el-table-column>
    						<el-table-column
      						prop="model"
     						 label="型号"
    						 >
   						 </el-table-column>
    						<el-table-column
      						prop="price"
     						 label="供货价"

      						show-overflow-tooltip>
    						</el-table-column>
        						<el-table-column
    						  prop="quality"
    						 label="有效年份"
     						 show-overflow-tooltip>
   						 </el-table-column>
      						<el-table-column
      						label="状态"
      						show-overflow-tooltip>
     						 <template scope="table">
    						审核通过
     						</template>
    						</el-table-column>
    						<el-table-column
      						label="操作"
      						show-overflow-tooltip>
     						 <template scope="table">
    						 <img src="../../assets/web/修改_11.png" style="cursor:pointer;" @click="handleChange(table.row.productID)">
     						</template>
    						</el-table-column>
  						</el-table>-->
  						 <div class="fenye" >
  						     <input type="checkbox" v-model="all" style="height:20px;width:20px;margin-top:10px;margin-left:20px;" @click="testSelwctAll">
  						<img src="../../assets/web/删除_36.png" height="32" width="68" class="detP" @click="delAll">
     						<div style="width:auto;position:absolute;right:100px;">
    						 <span class="ziti" v-html="'共有'+msg+'条记录'"></span>
                                                                       <div class="anniu" v-show='dqy>1' @click="prin">上一页</div>
                                                                      <ul class="fenylan">
                                                                       <li @click="dangqian(index+1)" v-for="(val,index) in zongy" :class="{yebiaod:index==dqy-1,}" v-show="index==dqy-2||index==dqy-1||index==dqy" class="yebiao">{{val+1}}</li>
                                                                       </ul>
                                                                       <div @click="next" class="anniu">下一页&nbsp;</div>
                                                                       <span style="font-size:16px;line-height:50px;"> &nbsp;到第&nbsp;</span>
                                                                       <input type="text" v-model="msgs" class="shuruk" />
                    				            <span style="font-size:16px;line-height:29px;">&nbsp;页&nbsp;</span>
     					            <div @click="bolck" class="anniu">确定</div>
      						</div>
   						 </div>
                                                                       <transition name='bounce'>
                                                                      <div class="aaaa" v-show="com">
                                                                      {{msgname}}
                                                                        </div>
                                                                       </transition>  
				    
					
		</div>
	</div>

</template>
<script>
	import store from '../../store.js'
	import "../../assets/css/test.css"
	import kf from "../../components/nav.vue"
	import test3 from "../../components/tanc/test3.vue"
	export default {
		name: 'module',
		data: function() {
			return {
				  tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
			           multipleSelection: [],
				productS: [],
				delID: '',
				ALL: [],
				all: false,
				workInfo: {
					name: '',
				},
				typeList: [],
				searchList: {
					productName: '',
					brandName: '',
					model: '',
					catID: '',
				},
				productList: [],
				status: 0,
				ss: '',
				showTab: 0,
				TabList: ["审核中",  "审核不通过"],
				topList: ['全部消息', '未读消息', '已读消息'],
				active: false,
				showInfo: false,
				showBg: 0,
				headerFixed: true,
				data: [],
				name: [],
				msg: 0, //数量总数
				datasize: 7, //每页显示数据量(-1)
				dqy: 1, //页数
				msgs: 0,
				Sum: 0,
				msgname: '',
				com: false,
				zongy: [],
				sellerID:''
			}
		},
		watch: {
			"ALL": {
				handler: function() {
					if(this.ALL.length == this.data.length) {
						this.all = true
					} else {
						this.all = false
					}
				},
				deep: true
			}
		},
		components: {
			kf,
			test3
		},
		created: function() {
			this.getPruductList();
			this.getTypeList();
		},
		methods: {
			 handleSelectionChange(val) {
                                       var arr=[]
                                       val.forEach(function(item) {
					arr.push(item.productID);
		             });
                                      this.productS=arr;
                                       console.log(this.productS)
	                                     },
	              	 testName({row, rowIndex}){
	                           return 'warning-row';
	                         },
	                         testCell({row, column, rowIndex, }){
	                         return "cellName";
	                         },
	                          testRow({row, column, rowIndex, }){
	                             return 'rowName';
	                         },
			testDet(id) {
				this.productS = []
				this.productS.push(id);
				console.log(this.productS);
			},
			testSelwctAll(val) {
				this.productS = []
				this.all = !this.all
				var that = this
				if(this.all == true) {
					that.ALL = []
					that.data.forEach(function(val, index) {
						that.ALL.push(index)
						that.productS.push(val.productID)
					})
					console.log(that.productS);
				} else {
					that.ALL = []
				}

			},
			delAll() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/product/deleteProduct", {
					productS: this.productS
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'success'
							});
							this.getPruductList();
						} else {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'error'
							});
						}

					},
					function(error) {
						console.log(error);
					},
				);
			},
			handleClear() {
				this.searchList = {};
			},
			handleSearch() {
				this.getPruductList();
			},
			getTypeList() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/merchant/getCatList", {
					parentID: 0
				}).then(
					function(response) {
						var data = response.body;
						if(data.code != 1) {
							this.typeList = [];
						}
						this.typeList = data.content.catList;
					},
					function(erro) {
						console.log(erro);
					}
				);
			},			
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
					function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.status = data.content.data.status;
							this.workInfo = data.content.data;
						}
						console.log(this.workInfo);
						console.log(this.status);
					},
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
					if(this.dqy * this.datasize >= this.data.length) {
						this.msgname = "已经是最后一页了"
						this.com = true
						setTimeout(() => {
							this.com = false
						}, 1200)
						this.dqy = Math.ceil(this.data.length / this.datasize)
					}
				else {
					this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					console.log(this.name)
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
			handleChange(id) {
				// console.log(this.productList[index].productID);
				this.$router.push({
					path: 'publish',
					query: {
						productID: id
					}
				});
			},
			changeTab(index) {
				this.showTab = index;
				this.dqy = 1;
				if(this.showTab == 0) {
					this.status = 0;
				} else if(this.showTab == 1) {
					this.status = -1;
				} else {
					this.status = 1;
				}
				this.getPruductList();
			},
			handleInfo() {
				this.showDiv = !this.showDiv;
			},
			handleShang() {
				this.showShang = !this.showShang;
			},
			handleJiao() {
				this.showJiao = !this.showJiao;
			},
			test() {
				// this.showDiv=true;
				this.$router.push({
					path: 'user'
				});
			},
			showMask() {
				this.showInfo = !this.showInfo;
			},
			changeIndex(index) {
				this.showBg = index;
			},
			getPruductList() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/Product/getSellProduct", {
					status: this.status,
					productName: this.searchList.productName,
					catID: this.searchList.catID,
					model: this.searchList.model,
					brandName: this.searchList.brandName
				}).then(
					function(response) {
						var data = response.body;
						if(data.code != 1) {
							this.productList = [];
							this.name = [];
							this.msg = 0;
						} else {
							this.productList = data.content;
							this.data = data.content;
							this.msg = this.data.length;
							this.name = this.data.slice(0, this.datasize)
							this.zongy = []
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						}

					},
					function(erro) {
						console.log(erro);
					},
				);
			},
			handleSubmit: function() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "user/logout").then(
					function(response) {
						var data = response.body;
						if(data.code != -1000) {
							that.$message.error(data.msg);
							return;
						}
						that.$message({
							message: data.msg,
							type: 'success'
						});
						this.$router.push({
							path: '/'
						});
					},
					function(erro) {}
				);
			},
		}
	}
</script>
<style scoped>
.detP
{
  cursor: pointer;
  margin-left: 50px;
}
.ggImg
{
  margin-left: 80px;
}
.gg
{
vertical-align: bottom;
display: inline-block;
height: 40px;
font-size: 16px;
margin-left: 15px;
}
.cellName
{
  font-size: 18px;
  font-family: "微软雅黑";
  font-weight:normal;
  color: #333333;
/*  padding-left: 20px;*/
}
.cellName1
{
   font-size: 16px;
  font-family: "微软雅黑";
  font-weight:normal;
  color: #333333;
/*  padding-left: 20px;*/
  border-bottom:1px solid #e6ebf5;
  padding-top:10px;
  padding-bottom: 10px;
}
.rowName
{
   font-size: 16px;
}
 .el-table .warning-row {
   background: #f3f3f3;
  }
.msg button {
    margin-top: -40px;
    width: 60px;
    cursor: pointer;
    margin-left: 0px;
  }
  
  .msg-bottom {
    font-size: 14px;
    padding-left: 5px;
    text-align: left;
    line-height: 40px;
  }
  
  .mg-top {
    height: 30px;
    background: #c8996b;
    color: #ffffff;
    font-weight: bold;
    line-height: 30px;
    font-size: 15px;
    padding: 5px;
  }
  .msg input
  {
    width: 250px;
    height: 34px;
    padding-left: 5px;
  }
  .msg {
    width: 300px;
    position: absolute;
    top: 60px;
    right: -310px;
    box-shadow: 0px 0px 0px 2px #eeeeee;
    background: #ffffff;
    padding-bottom: 10px;
  }
.addXian
{
  position: absolute;
  width: 300px;
  height: 200px;
  background: #ffffff;
  right: -310px;
  top:0px;
}
.nav-shang
{
    height: 107px;
    float: right;
    width: 125px;
    position: relative;

}
.nav-shang button
{
    height: 26px;
    width: 80px;
    background: #c8996b;
    border: none;
    color: #ffffff;
    font-size: 12px;
    position: absolute;
    top:60px;
    left: 28px;
    cursor: pointer;
}
.inss
{
    border:none;
    width: 300px;
    color: red;
    border-radius: 0px;
}
.sales-list-bottom
{
    height: 54px;
    width: 100%;
    margin-top: 10px;
    border:1px solid #bdbdbd;
}
.sales-list-ul
{
    width: 100%;
}
.sales-list-ul li
{
  height: 107px;
  border-bottom: 1px solid #e5e5e5;
  color: #333333;
  font-size: 16px;
  text-align: center;
  line-height: 80px;
}
.sales-list-top button
{
    height: 30px;
    width: 94px;
    background: #ffffff;
    border: none;
    border: 1px solid #bdbdbd;
    font-size: 12px;
    color: #333333;
    cursor: pointer;
    margin-right: 20px;
}
.sales-list-top
{
    height: 49px;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 20px;
    line-height: 50px;
}
.sales-list
{
    height: 590px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-top: 0px solid #e5e5e5;
    border-bottom: 0px solid #e5e5e5;
}
.nav-first-div
{
    width: 430px;
    height: 107px;
    display: inline-block;
    text-align: left;
    padding-left: 20px;
    position: relative;
    float: left;
    overflow:hidden;
}
.nav-first-div input
{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 29px;
}
.nav-first-div img
{
    margin-left: 30px;
    margin-top: 30px;
    vertical-align: top;
    line-height: 20px;
}
.nav-first-div span
{
    margin-left: 15px;
    line-height: 107px;
}
.nav-first
{
    width: 450px;
    display: inline-block;
}
.nav-other
{
    width: 125px;
    display: inline-block;
    height: 106px;
    overflow:hidden;
    margin-top: 15px;
}
.sales-content-nav
{
    width: 100%;
    height: 59px;
    border: 1px solid #e5e5e5;
    line-height: 59px;
    font-size: 16px;
    text-align: center;
}
.sales-content
{
    margin-top: 20px;
    position: relative;
}
.sales-bottom
{
    width: 120px;
    height: 3px;
    background: #c8996b;
    margin-top: -3px;
}
.sales-title
{
    height:40px;
    line-height: 40px;
    color: #c8996b;
    font-weight: bolder;
    font-size: 15px;
    background: #ffffff;
    margin-top: 20px;
}
.sales-title-txt
{
    width: 120px;
    text-align: center;
}
.btn-top-bottom button
{
    width: 94px;
    height: 26px;
    background: #ffffff;
    border: none;
    border: 1px solid #bdbdbd;
    float: right;
    margin-left: 40px;
    margin-top: 15px;
    cursor: pointer;
}
.btn-top-bottom
{
float: left;
margin-left: 50px;
margin-top: 25px;
}
.btn-top-bottom img
{
  cursor: pointer;
}
.btn-top
{
    height: 110px;
    background: #ffffff;
}
.btn-top-input
{
   list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   height: 90px;
   padding-top: 10px;
   width: 1200px;
   float: left;
}
.input-item select
{
     width: 200px;
    height: 40px;
}
.sales-p-bottom
{
    height: 3px;
    width: 100%;
    background: rgb(220,220,220);
}
.input-item
{
   /* width: 243px;*/
    font-size: 16px;
    line-height: 70px;
    margin-right: 25px;
}
.input-item input
{
    width: 200px;
    height: 40px;
}
	.main-left {
		height: 100%;
	}
	
	.module {
		height: 100%;
	}
	
	.maskBody {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: rgb(158, 158, 158);
		opacity: 0.3
	}
	
	.maskShen-top {
		background: #c8996b;
		height: 52px;
		line-height: 52px;
		padding-left: 25px;
		color: #ffffff;
		font-size: 18px;
		font-weight: bolder;
	}
	
	.maskShen-content {
		padding-top: 40px;
		padding-left: 25px;
		color: #333333;
		font-size: 18px;
	}
	
	.maskShen {
		position: absolute;
		height: 380px;
		width: 728px;
		left: 5px;
		background: #ffffff;
		z-index: 100;
	}
	
	.nav-shang {
		height: 107px;
		float: right;
		width: 125px;
		position: relative;
	}
	
	.nav-shang button {
		height: 26px;
		width: 56px;
		background: #c8996b;
		border: none;
		color: #ffffff;
		font-size: 12px;
		position: absolute;
		top: 60px;
		left: 36px;
		cursor: pointer;
	}
	
	.maskUl {
		position: absolute;
		height: 3px;
		background: #c8996b;
		width: 125px;
		top: 40px;
		left: 0px;
	}
	
	.unshelf-ul {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.unshelf-ul li {
		width: 125px;
		height: 40px;
		color: #333333;
		font-size: 15px;
		text-align: center;
		cursor: pointer;
		position: relative;
	}
</style>