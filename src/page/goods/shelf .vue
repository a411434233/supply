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
						<img @click="detail(item.productID)" :src="item.titleImage" height="60" width="60" style="border:1px solid #bdbdbd;" class="ggImg">
						<span class="gg">{{item.productName}}</span>
					</th>
					<th class="cellName1">
						{{item.model}}
					</th>
					<th class="cellName1">{{item.price}}</th>
					<th class="cellName1">{{item.quality}}</th>
					<th class="cellName1">已上架</th>
				</tr>
			</table>
			<div class="fenye">
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
				TabList: ["已上架"],
				topList: ['全部消息', '未读消息', '已读消息'],
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
				zongy: [],
				sellerID: '',
				max: 0,
			}
		},
	
		components: {
			kf,
			test3
		},
		created: function() {
			this.getPruductList();
			this.getWork();
			this.getTypeList();
			this.getInfo();
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
			testName({ row, rowIndex }) {
				return 'warning-row';
			},
			testCell({ row, column, rowIndex, }) {
				return "cellName";
			},
			testRow({ row, column, rowIndex, }) {
				return 'rowName';
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			detail(id) {
				window.open("http://duanhui.qianchengwl.cn/#/detail?productID=" + id);
//			window.location.href="http://duanhui.qianchengwl.cn/#/detail?productID=" + id
			},
			enterShop() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", { sellerID: this.sellerID }).then((data) => {
						var template = data.body.content.template
						if(template == 2) {
							window.open("http://duanhui.qianchengwl.cn/#/shop?ss=0&sellerID=" + this.sellerID);
						} else if(template == 1) {
							window.open("http://duanhui.qianchengwl.cn/#/shopone?ss=0&sellerID=" + this.sellerID);
						}
					},

				);
			},
			getInfo() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/getSellerMsg").then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.sellerID = data.content.userInfo.sellerID;
							if(data.content.userInfo.logo.length > 0) {
								this.logo = data.content.userInfo.logo;
							}
						}

					},
					function(erro) {}
				);
			},
			testDet(id) {
				this.productS = []
				this.productS.push(id);

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
			handleLoginOut: function() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/logout").then(
					function(response) {
						var data = response.body;
						if(data.code != -1000) {
							that.$refs.t1.msgname = data.msg
							that.$refs.t1.locatio()
							setTimeout(() => {
								window.location.href = 'http://duanhui.qianchengwl.cn/#/login'
							}, 500)
							return;
						}
						that.$refs.t1.msgname = data.msg
						that.$refs.t1.locatio()
						setTimeout(() => {
							window.location.href = 'http://duanhui.qianchengwl.cn/#/login'
						}, 500)
					},
					function(erro) {}
				);
			},
			dangqian(index) {
				this.dqy = index
				this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
			},
			bolck() {
				this.dqy = this.msgs
				if(this.dqy >this.max || this.dqy.search(/^[0-9]/g) == -1) {
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
					if(this.dqy>this.max) {
						this.msgname = "已经是最后一页了"
						this.com = true
						setTimeout(() => {
							this.com = false
						}, 1200)
						this.dqy = this.max
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
					status: 1,
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
							this.max=Math.ceil(this.data.length/this.datasize)
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
		font-size: 14px;
		text-align: center;
		cursor: pointer;
		position: relative;
	}
	
	.main {
		height: 1300px;
	}
	
	.main-right {
		margin-top: 20px;
		width: 975px;
		height: 950px;
		float: left;
		margin-left: 13px;
	}
</style>