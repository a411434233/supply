<template>
	<!-- 头部导航 -->
	<div class="module">
		<component is='kf'></component>
		<component ref='t1' is="test3"> </component>
		<!-- 头部导航栏 -->
		<div class="box">
			<div class="content-box">
				<img src="../assets/supply/logo.png" height="48" width="196" class="box-logo">
				<div class="content-middle">
					<a href=" http://duanhui.qianchengwl.cn" target="_blank"><img src="../assets/supply/right.png" class="fan"></a>
					<img src="../assets/supply/我的店铺.png" height="30" width="154" style="cursor:pointer;" @click="enterShop">
				</div>
				<!--   右侧 -->
				<div class="right">
					<div class="right-left">
						<img src="../assets/supply/消息.png" height="24" width="30" style="cursor: pointer;" @click="showMask">
						<p style="font-size:14px;margin-top:15px;color:#ffffff;">消息通知</p>
					</div>
					<div class="right-mid">
						<img :src="logo" height="32" width="32">
						<p style="font-size:14px;margin-top:11px;color:#ffffff;width: 84px;overflow: hidden;height: 20px;">{{workInfo.name}}</p>
					</div>
					<div class="right-right" @click="handleLoginOut">
						<img src="../assets/supply/退出.png" height="24" width="24">
						<p style="font-size:14px;margin-top:15px;color:#ffffff;">注销账号</p>
					</div>
				</div>
			</div>
		</div>
		<!--     头部导航栏结束 -->
		<!-- 主题内容 -->
		<div class="main-content" style="position:relative;">
			<aside class="left-side">
				<ul class="side-ul">
					<router-link v-for="item in pathList" :to="{ path: item.path }" tag="li" active-class="redColor" @mouseenter="enterItem">{{item.name}}</router-link>
				</ul>
			</aside>
			<div style="float:right;position: absolute;left:230px;">
				<div v-show="gzt">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</div>
				<div class="xiaoxitongzhi" v-show="gzt==false&&msg==false">
					<div class="xiaoxik">
						<div class="top_2">
							<span class="btn_1" @click="delEmail">删除</span>
							<span class="btn_2" @click="readed">全部列为已读</span>
						</div>
						<div class="top_3">
							<ul class="ul_xiaox" v-for="(val,index) in message">
								<li style="width: 30px;line-height: 53px;"><input type="checkbox" v-model="delemail" :value="val.emailID" /></li>
								<li style="width:	25px;cursor: pointer;" @click="gomsg(val.emailID)"><img v-if="val.read==2" src="../assets/web/未读(1).png" /><img v-if="val.read==1" src="../assets/web/已读.png" />
								</li>
								<li style="width: 380px;cursor: pointer; " @click="gomsg(val.emailID)">发出人:{{val.sellerName}}</li>
								<li style="width: 1000px;cursor: pointer;" @click="gomsg(val.emailID)">{{val.massage}}</li>
								<li style="width: 200px;text-align: right;">{{val.addtime}}</li>
							</ul>
							<div v-show="message.length==0" style="width: 100%;height: 100%;text-align: center;line-height: 300px;font-size: 50px;color: #E0E0E0;">
								暂无消息
							</div>
						</div>

						<div class="top_4">
							<span class="btn_1">删除</span>
							<span class="btn_2" @click="readed">全部列为已读</span>

							<span style="width: 80%;display: inline-block;text-align: right;">
								<span >{{ing}}/{{max}}页</span>
							<span @click="up" class="fanye_">上一页</span>
							<span @click="down" class="fanye_">下一页</span>
							</span>

						</div>
					</div>
				</div>

				<div v-show="msg==true" style="width: 100%;height: 990px;background: white;margin-top: 20px;">
					<div style="width: 1400px;">
						<div style="height: 60px;line-height:60px; background: #E4E9EF;padding-left: 20px;">
							<button @click="back" class="btn_1">返回</button>
							<span style="height: 60px;border-left:solid 1px #D5DAE0;margin: 0 10px;"></span>
							<button @click="back" class="btn_1">删除</button>
						</div>
						<div style="height: 120px;background: #F5F6F8;border:solid 1px #D9DADC; padding:10px 15px; color: #969799;font-size: 15px;">
							<p>发出人:{{msgcmom.sellerName}}</p>
							<p>时间：{{msgcmom.addtime}}</p>

						</div>
						<div style="height: 300px;border: solid 1px  #D9DADC;padding: 10px 15px;">
							{{msgcmom.massage}}
						</div>
						<div style="height: 200px;padding:  15px 10px;background: #F5F6F8;">
							<div style="height: 100px;background: white;border: solid 1px #D0D1D5;" contenteditable="true">
								<textarea name="" style="width: 100%;height: 100%;resize: none;" v-model="aaa" rows="" cols=""></textarea>
							</div>
							<div style="margin-top: 20px;">
								<button class="btn_1" @click="gotomsg(msgcmom.sendUser)">发送</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>
<script>
	import test3 from "../components/tanc/test3.vue"
	import "../assets/css/test.css"
	import "../assets/css/fenye.css"
	import store from '../store.js'
	import kf from "../components/nav.vue"
	export default {
		name: 'module',
		data: function() {
			return {
				pathList: [
					{ name: "工作台", path: "/supply" },
					{ name: "查看机构信息", path: "/info" },
					{ name: "发布供应商品", path: "/publish" },
					{ name: "已入库的商品", path: "/sales" },
					{ name: "未上架的商品", path: "/unshelf" },
					{ name: "已上架的商品", path: "/shelf" },
					{ name: "议价中的商品", path: "/bargain" },
					{ name: "已卖出的商品", path: "/sold" },
					{ name: "店铺主题", path: "/dpxz" }
				],
				gzt: true,
				msg: false,
				logo: require('../assets/supply/我的---副本_复制.png'),
				biao: '',
				exist: "",
				isEnter: false,
				sellerID: '',
				workInfo: {
					name: '',
					uncheckProduct: '',
					checkSuccessProduct: "",
					checkFailProduct: "",
					bargain: '',
					bookOrder: '',
					unSend: "",
					unRecieve: "",
					unEvaluate: "",
					evaluate: "",
				},
				data2: [1, 2, 3, 4, 5, 6, 7],
				data: {
					year: '',
					month: '',
					day: '',
					week: '',
				},
				topList: ['全部消息', '未读消息', '已读消息'],
				showBg: 0,
				showInfo: false,
				color: '#c8996b',
				showDiv: false,
				showShang: false,
				showJiao: false,
				active: true,
				headerFixed: true,
				message: [],
				msgcmom: [],
				msgname: '',
				aaa: '',
				delemail: [],
				ing: 1,
				max: 1,

			}
		},
		components: {
			kf,
			test3
		},
		created: function() {
			var that = this
			var ws = new WebSocket("ws://duanhui.qianchengwl.cn:8282")
			ws.onmessage = function(e) {
				if(e.data.search(/^[0-9]+/g) != -1) {
//					that.$http.post(store.state.config.apiUrlRoot + "admin/user/login", {
//						username: 'gaobaobao',
//						password: 123456,
//						'clientID': e.data
//					}).then((data) => {
//						if(data.body.code == 1) {
							that.getWork();
//						} else if(data.body.code == -421) {
//							that.warning = data.body
//							that.aaaaa()
//						}
//
//					});
				} else {
					alert(e.data)
					that.handleLoginOut()
				}
			}

		},
		methods: {
			up() {
				var that = this
				this.ing--
					if(this.ing < 1) {
						this.ing = 1
						that.$refs.t1.msgname = '已经是第一页了！'
						that.$refs.t1.locatio2()
					} else {
						this.name = this.message.slice(this.ing * this.datasize - this.datasize, this.ing * this.datasize)
					}
			},
			down() {
				var that = this
				this.ing++
					if(this.ing > this.max) {
						this.ing = this.max
						that.$refs.t1.msgname = '已经是最后一页了！'
						that.$refs.t1.locatio2()
					} else {
						this.name = this.message.slice(this.ing * this.datasize - this.datasize, this.ing * this.datasize)
					}
			},
			//删除邮件
			delEmail() {
				var that = this
				if(this.delemail.length <= 0) {
					that.$refs.t1.msgname = '请选择要删除的邮件'
					that.$refs.t1.locatio2()
				} else {
					this.$http.post(store.state.config.apiUrlRoot + "admin/user/delEmail", {
						emailID: this.delemail
					}).then((data) => {
						this.delemail = []
						that.$refs.t1.msgname = data.body.msg
						that.$refs.t1.locatio()

					})
				}

			},
			//全部标记为已读
			readed() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/markingRead").then((data) => {
					that.$refs.t1.msgname = '操作成功'
					that.$refs.t1.locatio()
				})
			},
			//返回
			back() {
				if(this.msg) {
					this.msg = false
				} else {
					this.msg = true
				}
			},
			//获取邮件
			showMask() {
				this.gzt = !this.gzt
				this.showInfo = !this.showInfo;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/getInformMsg").then((data) => {
					if(data.body.code == -2) {
					} else {
						this.message = data.body.content.msg

					}

				})
			},
			gomsg(val) {
				this.delemail = []
				this.delemail.push(val)
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/readEmail", {
					emailID: val,
				}).then((data) => {
					this.msgcmom = data.body.content.msg
				})
				if(this.msg) {
					this.msg = false
				} else {
					this.msg = true
				}
			},
			gotomsg(val) {
				var that = this
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/revert", {
					getUser: val,
					massage: this.aaa,
				}).then((data) => {
					this.aaa = ''

					that.$refs.t1.msgname = data.body.msg
					that.$refs.t1.locatio()
					setTimeout(() => {
						location.reload()
					}, 1200)
				})

			},
			enterItem() {
				alert(111);
			},
			enterShop() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", { sellerID: this.sellerID }).then((data) => {
					var template = data.body.content.template
					if(template == 2) {
						window.open("http://duanhui.qianchengwl.cn/#/shop?ss=0&sellerID=" + this.sellerID);
					} else if(template == 1) {
						window.open("http://duanhui.qianchengwl.cn/#/shopone?ss=0&sellerID=" + this.sellerID);
					}
				}, );
			},

			bao() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/catchNumber", { labelling: this.biao }).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'success'
							});
							this.exist = 1;
						} else {
							this.$message({
								showClose: true,
								message: data.msg,
								type: 'error'
							});
						}
					}
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
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
					function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.workInfo = data.content.data;
							this.exist = data.content.exist;
						}

					},
				);
			},
			test() {
				// this.showDiv=true;
				this.$router.push({ path: 'user' });
			},

		}
	}
</script>
<style>
	.btn_1 {
		width: 60px;
		height: 30px;
		background: white;
		border: solid 1px #CAD1DB;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
		margin: 0 10px;
	}
	
	.btn_2 {
		width: 160px;
		height: 30px;
		background: white;
		border: solid 1px #CAD1DB;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	
	.top_3 {
		height: 698px;
		width: 96%;
		line-height: 50px;
		margin: 0 auto;
	}
	
	.top_3 ul {
		display: flex;
		border-bottom: 1px solid #CAD1DB;
		margin-bottom: 0;
	}
	
	.top_4 {
		height: 50px;
		background: #F5F6F8;
		width: 100%;
		border-top: 1px solid #CAD1DB;
		line-height: 50px;
	}
	
	.fanye_ {
		cursor: pointer;
		color: #8CABDC;
	}
	
	.ul_xiaox2 {
		display: flex;
		height: 45px;
		line-height: 45px;
		width: 96%;
		border-bottom: 1px solid #CAD1DB;
		margin: 0 auto;
	}
	
	.short-item {
		font-size: 16px;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		cursor: pointer;
	}
	
	.top_2 {
		height: 50px;
		background: #F5F6F8;
		border-bottom: 1px solid #CAD1DB;
		line-height: 50px;
	}
	
	.xiaoxik {
		border: solid 1px #CAD1DB;
		width: 90%;
		margin: 20px 30px;
		height: 800px;
		margin-bottom: 0;
	}
	
	.tongji {
		width: 370px;
		height: 200px;
		border: solid 1px #D9D9DA;
	}
	
	.tongji_1 {
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
		margin-right: 20px;
	}
	
	.tongji_1 li {
		width: 60px;
		height: 30px;
		border: solid 1px #CAD1DB;
		text-align: center;
		line-height: 30px;
	}
	
	.tongji_2 {
		width: 300px;
		height: 150px;
	}
	
	.xiaoxitongzhi {
		width: 100%;
		height: 990px;
		background: white;
	}
	
	.left-side {
		width: 210px;
		background: #f3f3f3;
		min-height: 890px;
		float: left;
	}
	
	.main-content {
		width: 100%;
		background: #ffffff;
		height: auto;
	}
	
	body {
		color: #333333;
		min-height: 1000px;
	}
	
	a {
		text-decoration: none;
		color: #333333;
	}
	
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.redBor {
		border-left: 3px solid #c8996b;
	}
	
	.redColor {
		color: #c8996b;
		background: #e6e6e6;
	}
	
	ul, li {
		list-style: none;
	}
	
	.right-bottom span {
		font-size: 14px;
		color: #ffffff;
	}
	
	.my {
		width: 32px;
		height: 32px;
		margin-left: 60px;
		margin-top: -4px;
	}
	
	.right-top {
		width: 100%;
		height: 32px;
		margin-bottom: 10px;
	}
	
	.content-middle {
		width: 340px;
		height: 90px;
		float: left;
		margin-left: 45px;
	}
	
	.content-middle img {
		cursor: pointer;
		margin-top: 30px;
	}
	
	.fan {
		margin-right: 20px;
	}
	
	.box-logo {
		margin-top: 22px;
		float: left;
		margin-left: 20px;
	}
	
	.module {
		width: 100%;
		min-height: 100%;
	}
	
	.box {
		width: 100%;
		height: 90px;
		background: #303030;
	}
	
	.logo {
		left: 40px;
		top: 6px;
		position: absolute;
		z-index: 2000;
	}
	
	.logo img {
		display: block;
	}
</style>