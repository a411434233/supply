<template>
	<!-- 左侧导航 -->
	<div class="module">
		<div class="main-content-box">
			<div class="btn-top">
				<div class="btn-top-input">
					<div class="input-item" style="margin-left:0px;padding-left:0px;">商品名称 : <input type="text" v-model="searchList.productName"></div>
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
				<div class="btn-top-bottom">
					<img src="../../assets/web/清除.png" height="41" width="94" @click="handleClear" style="margin-right:20px;">
					<img src="../../assets/web/查询.png" height="41" width="94" @click="handleSearch">
				</div>
			</div>
			<span style="line-height:60px;padding-left:25px;font-weight:bold;color:#c8996b;font-size:16px;" v-show="name.length==0">暂无数据......</span>
			<table style="width: 100%;border:1px solid #e6ebf5;border-bottom:0px;" cellspacing="0" v-show="name.length!=0">
				<tr style=" background: #f3f3f3;height:60px;">
					<th class="cellName" style="text-align:left;padding-left:100px;">产品名称</th>
					<th class="cellName">型号</th>
					<th class="cellName">供货价</th>
					<th class="cellName">有效年份</th>
					<th class="cellName">状态</th>
				</tr>
				<tr v-for="item in  name" style="color:#333333;">
					<th class="cellName1" style="text-align:left;padding-left:20px;">
						<img :src="item.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
						<span class="gg">{{item.productName}}</span>
					</th>
					<th class="cellName1">
						{{item.model}}
					</th>
					<th class="cellName1">{{item.price}}</th>
					<th class="cellName1">{{item.quality}}</th>
					<th class="cellName1">已入库</th>
				</tr>
			</table>
			<div class="fenye">
				<div style="width:auto;position:absolute;right:100px;">
					<span class="ziti" v-html="'共有'+Sum+'条记录'"></span>
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
				typeList: [],
				searchList: {
					productName: '',
					brandName: '',
					model: '',
					catID: '',
				},
				multipleSelection: [],
				ss: "",
				BID: '',
				showSS: -1,
				showBtn: true,
				showMsg: false,
				bianhao: '',
				sellerID: '',
				workInfo: {
					name: '',
				},
				nameList: [{ productName: 'huhuhu' }, ],
				productList: [],
				ss: '',
				topList: ['全部消息', '未读消息', '已读消息', '已读消息', '已读消息', ],
				infoList: ["机构名称", "机构编码", "行政区域名称", "详细通讯地址", "邮编", "负责人", "单位联系人", "电话", "传真", "电子邮件", "移动电话", "法定代表人", "开户银行", "开户银行账号", "上级机构", "简介", "机构角色"],
				showDiv: false,
				showShang: true,
				showJiao: false,
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
				logo: require('../../assets/supply/我的---副本_复制.png'),
				zongy: [],
				max:0,

			}
		},
		components: {
			kf,
			test3
		},
		created: function() {
			this.data = this.productList;
			this.getProduct();
			this.getTypeList();
		},
		methods: {
			handleClear() {
				this.searchList = {};
			},
			handleSearch() {
				this.getPruduct();
			},
			getTypeList() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/merchant/getCatList", {
					parentID: 0
				}).then(function(response) {
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
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			testName({ row, rowIndex }) {
				return 'warning-row';
			},
			testCell({ row, column, rowIndex, }) {
				return "cellName";
			},
			testRow({ row, column, rowIndex, }) {
				return 'rowName';
			},
			//  tableRowClassName({row, rowIndex}) {
			//   if (rowIndex === 1) {
			//     return 'warning-row';
			//   } else if (rowIndex === 3) {
			//     return 'success-row';
			//   }
			//   return '';
			// }

			handleChange(id) {
				this.BID = id;
				this.showMsg = true;
			},
			hiddenMsg(index) {
				// this.bianhao="";
				this.$http.post(store.state.config.apiUrlRoot + "admin/product/catchProductNum", { productID: this.BID, labelling: this.bianhao }).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'success'
							});
							this.showMsg = false;
							this.bianhao = "";
							this.getProduct();
						} else {
							this.$message({
								showClose: true,
								message: "您已增加过",
								type: 'error'
							});
							this.showMsg = false;
						}
					},
				);
			},
			changeTab(index) {
				this.showTab = index;
				if(this.showTab == 0) {
					this.status = 0;
				} else if(this.showTab == 1) {
					this.status = 1;
				} else {
					this.status = -1;
				}
				this.getPruductList();
			},
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
					function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.status = data.content.data.status;
							this.workInfo = data.content.data;
						}


					},
				);
			},
			dangqian(index) {
				this.dqy = index
				this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
			},
			bolck() {
				this.dqy = this.msgs
				if(this.dqy >this.max  || this.dqy.search(/^[0-9]/g) == -1) {
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
					if(this.dqy >this.max) {
						this.msgname = "已经是最后一页了"
						this.com = true
						setTimeout(() => {
							this.com = false
						}, 1200)
						this.dqy = this.max
					
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
				this.$router.push({ path: 'user' });
			},
			showMask() {
				this.showInfo = !this.showInfo;
			},
			changeIndex(index) {
				this.showBg = index;
			},
			getProduct() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/product/getItemProduct").then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							var data = response.body;
							this.productList = data.content;
							this.data = data.content;
							// this.name=data.content;
							this.msg = this.name.length;
							// this.data = data
							this.name = this.data.slice(0, this.datasize)
							this.Sum = this.data.length
							this.max=Math.ceil(this.data.length/this.datasize)
							this.zongy = []
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						} else {
							this.name = [];
						}

					},
					function(erro) {
						console.log(erro);
					}
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
						this.$router.push({ path: '/' });
					},
					function(erro) {}
				);
			},
		}
	}
</script>
<style>
	.detP {
		cursor: pointer;
		margin-left: 10px;
	}
	
	.ggImg {
		margin-left: 20px;
	}
	
	.gg {
		vertical-align: bottom;
		display: inline-block;
		height: 40px;
		font-size: 16px;
		margin-left: 15px;
	}
	
	.cellName {
		font-size: 18px;
		font-family: "微软雅黑";
		font-weight: normal;
		color: #333333;
		/*  padding-left: 20px;*/
	}
	
	.cellName1 {
		font-size: 16px;
		font-family: "微软雅黑";
		font-weight: normal;
		color: #333333;
		/*  padding-left: 20px;*/
		border-bottom: 1px solid #e6ebf5;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.rowName {
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
	
	.msg input {
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
	
	.addXian {
		position: absolute;
		width: 300px;
		height: 200px;
		background: #ffffff;
		right: -310px;
		top: 0px;
	}
	
	.nav-shang {
		height: 107px;
		float: right;
		width: 125px;
		position: relative;
	}
	
	.nav-shang button {
		height: 26px;
		width: 80px;
		background: #c8996b;
		border: none;
		color: #ffffff;
		font-size: 12px;
		position: absolute;
		top: 60px;
		left: 28px;
		cursor: pointer;
	}
	
	.inss {
		border: none;
		width: 300px;
		color: red;
		border-radius: 0px;
	}
	
	.sales-list-bottom {
		height: 54px;
		width: 100%;
		margin-top: 10px;
		border: 1px solid #bdbdbd;
	}
	
	.sales-list-ul {
		width: 100%;
	}
	
	.sales-list-ul li {
		height: 107px;
		border-bottom: 1px solid #e5e5e5;
		color: #333333;
		font-size: 16px;
		text-align: center;
		line-height: 80px;
	}
	
	.sales-list-top button {
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
	
	.sales-list-top {
		height: 49px;
		border-bottom: 1px solid #e5e5e5;
		padding-left: 20px;
		line-height: 50px;
	}
	
	.sales-list {
		height: 590px;
		width: 100%;
		background: #ffffff;
		border: 1px solid #e5e5e5;
		border-top: 0px solid #e5e5e5;
		border-bottom: 0px solid #e5e5e5;
	}
	
	.nav-first-div {
		width: 430px;
		height: 107px;
		display: inline-block;
		text-align: left;
		padding-left: 20px;
		position: relative;
		float: left;
		overflow: hidden;
	}
	
	.nav-first-div input {
		width: 18px;
		height: 18px;
		position: absolute;
		top: 29px;
	}
	
	.nav-first-div img {
		margin-left: 30px;
		margin-top: 30px;
		vertical-align: top;
		line-height: 20px;
	}
	
	.nav-first-div span {
		margin-left: 15px;
		line-height: 107px;
	}
	
	.nav-first {
		width: 450px;
		display: inline-block;
	}
	
	.nav-other {
		width: 125px;
		display: inline-block;
		height: 106px;
		overflow: hidden;
		margin-top: 15px;
	}
	
	.sales-content-nav {
		width: 100%;
		height: 59px;
		border: 1px solid #e5e5e5;
		line-height: 59px;
		font-size: 16px;
		text-align: center;
	}
	
	.sales-content {
		margin-top: 20px;
		position: relative;
	}
	
	.sales-bottom {
		width: 120px;
		height: 3px;
		background: #c8996b;
		margin-top: -3px;
	}
	
	.sales-title {
		height: 40px;
		line-height: 40px;
		color: #c8996b;
		font-weight: bolder;
		font-size: 15px;
		background: #ffffff;
		margin-top: 20px;
	}
	
	.sales-title-txt {
		width: 120px;
		text-align: center;
	}
	
	.btn-top-bottom button {
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
	
	.btn-top-bottom {
		float: left;
		margin-left: 50px;
		margin-top: 25px;
	}
	
	.btn-top-bottom img {
		cursor: pointer;
	}
	
	.btn-top {
		height: 110px;
		background: #ffffff;
	}
	
	.btn-top-input {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 90px;
		padding-top: 10px;
		width: 1200px;
		float: left;
	}
	
	.input-item select {
		width: 200px;
		height: 40px;
	}
	
	.sales-p-bottom {
		height: 3px;
		width: 100%;
		background: rgb(220, 220, 220);
	}
	
	.input-item {
		/* width: 243px;*/
		font-size: 16px;
		line-height: 70px;
		margin-right: 25px;
	}
	
	.input-item input {
		width: 200px;
		height: 40px;
	}
</style>