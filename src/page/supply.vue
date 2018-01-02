<template>
	<!-- 头部导航 -->
	<div class="module">
		<component ref='t1' is="test3"> </component>

		<div class="main-content-box" v-show="msg==false">
			<el-row :gutter="23">
				<el-col :span="19">
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="zong-box">
								<div class="zong-top">
									<span>累计采购金额</span>
									<span class="zong-top-se">单位: 元</span>
								</div>
								<div class="zong-bottom">
									<p class="zong-bottom-txt">{{workInfo.alTotalPic}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="zong-box">
								<div class="zong-top">
									<span>累计采购次数</span>
									<span class="zong-top-se">单位: 次</span>
								</div>
								<div class="zong-bottom">
									<p class="zong-bottom-txt">{{workInfo.alTotalNum}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="zong-box">
								<div class="zong-top">
									<span>累计采购商品</span>
									<span class="zong-top-se">单位: 个</span>
								</div>
								<div class="zong-bottom">
									<p class="zong-bottom-txt">{{workInfo.alTotalPro}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="zong-box">
								<div class="zong-top">
									<span>累计签订合同</span>
									<span class="zong-top-se">单位: 份</span>
								</div>
								<div class="zong-bottom">
									<p class="zong-bottom-txt">{{workInfo.alTotalSend}}</p>
								</div>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<div class="daiban">
							<div class="daiban-top">
								<div class="daiban-item">
									<span style="margin-right:20px;">交易管理 :</span>
									<span>议价中 <span class="num" v-show="this.workInfo.bargain>=0">{{workInfo. bargain}}</span></span>
								</div>
								<div class="daiban-item">
									<span>签订合同 <span class="num" v-show="this.workInfo.bookOrder>=0">{{workInfo.bookOrder}}</span></span>
								</div>
								<div class="daiban-item">
									<span>待发货 <span class="num" v-show="this.workInfo.unSend>=0">{{workInfo.unSend}}</span></span>
								</div>
								<div class="daiban-item">
									<span>待评价 <span class="num" v-show="this.workInfo.unEvaluate>=0">{{workInfo.unEvaluate}}</span></span>
								</div>
								<div class="daiban-item">
									<span>待买家收货 <span class="num" v-show="this.workInfo.unRecieve>=0">{{workInfo.unRecieve}}</span></span>
								</div>
								<div class="daiban-item">
									<span>已评价 <span class="num" v-show="this.workInfo.evaluate>=0">{{workInfo.evaluate}}</span></span>
								</div>
							</div>
							<div class="daiban-top">
								<div class="daiban-item">
									<span style="margin-right:20px;">商品审核 :</span>
									<span>审核中 <span class="num" v-show="this.workInfo.uncheckProduct>=0">{{workInfo. uncheckProduct}}</span></span>
								</div>
								<div class="daiban-item">
									<span>已通过 <span class="num" v-show="this.workInfo.checkSuccessProduct>=0">{{workInfo. checkSuccessProduct}}</span></span>
								</div>
								<div class="daiban-item">
									<span>未通过 <span class="num" v-show="this.workInfo.checkFailProduct>=0">{{workInfo. checkFailProduct}}</span></span>
								</div>
							</div>
						</div>
					</el-row>
					<el-row>
						<div class="box_3">
							<div class="box_2s">
								消息通知
							</div>
							<div>
								<div style="height: 293px;overflow: hidden;">
									<ul class="ul_xiaox2" v-for="(val,index) in name">
										<li style="width: 30px;line-height:53px;"><input type="checkbox" v-model="delemail" :value="val.emailID" /></li>
										<li style="width:25px ;">
											<img v-if="val.read==2" src="../assets/web/已读.png" />
											<img v-if="val.read==1" src="../assets/web/未读(1).png" />
										</li>

										<li style="width: 350px;cursor: pointer;overflow: hidden;" @click="gomsg(val.emailID)">发出人:{{val.sellerName}}</li>
										<li style="width: 1000px;cursor: pointer;overflow: hidden;" @click="gomsg(val.emailID)">{{val.massage}}</li>
										<li style="width: 250px;text-align: right;">{{val.addtime}}</li>
									</ul>
									<div v-show="name.length==0" style="width: 100%;height: 100%;text-align: center;line-height: 300px;font-size: 50px;color: #E0E0E0;">
										暂无消息
									</div>
								</div>
								<div class="top_4">
									<span class="btn_1" @click="delEmail">删除</span>
									<!--<span class="btn_2">全部列为已读</span>-->
									<span style="width: 80%;display: inline-block;text-align: right;">
									<span >{{ing}}/{{max}}页</span>
									<span @click="up" class="fanye_">上一页</span>
									<span @click="down" class="fanye_">下一页</span>
									</span>

								</div>

							</div>
						</div>
					</el-row>
				</el-col>
				<el-col :span="5">
					<div class="main-info-right">
						<p class="main-info-left-txt">日历</p>
						<p class="main-info-day">{{data.day}}</p>
						<p class="main-info-time">{{data.week}}</p>
						<p class="main-info-time" style="margin-top:10px;">{{data.year}}年 {{data.month}}月</p>
					</div>
					<!--统计-->
					<div style="width: 100%;height: 300px;position: relative;">

						<ul style="display:flex;margin-bottom: 0;margin-top: 20px;position: absolute;top:2px;">
							<li class="li_" :class="{li_2:bottom1==1}" @click="shul">数量</li>
							<li class="li_" style="margin-left: 5px;" :class="{li_2:bottom1==0}" @click="money">金额</li>
						</ul>

						<div class="tongji" style="position: absolute;top: 51px;">
							<div v-show="bottom1==1">
								<ul class="tongji_1">
									<li style="border-bottom-left-radius: 8px;border-top-left-radius: 8px;cursor: pointer" @click="Year(2017)">2017</li>
									<li style="border-left:none ;border-right:none ;cursor: pointer" @click="Year(2016)">2016</li>
									<li style="border-bottom-right-radius: 8px;border-top-right-radius: 8px;cursor: pointer" @click="Year(2015)">2015</li>
									<li style="display: flex;width: 100px;border: none;">
										<span>月份：</span>
										<select style="border-radius:5px ;" name="" v-model="month">
											<option value="all" >全部</option>
											<option v-for="(val,index) in data2" :value="val">{{val}}</option>
										</select>
									</li>
								</ul>
								<div>
									<div id="myChart" style="width: 320px;height: 220px;">
									</div>
								</div>
							</div>
							<div v-show="bottom1==0">
								<ul class="tongji_1">
									<li style="border-bottom-left-radius: 8px;border-top-left-radius: 8px;cursor: pointer" @click="Year(2017)">2017</li>
									<li style="border-left:none ;border-right:none ;cursor: pointer" @click="Year(2016)">2016</li>
									<li style="border-bottom-right-radius: 8px;border-top-right-radius: 8px;cursor: pointer" @click="Year(2016)">2015</li>
									<li style="display: flex;width: 100px;border: none;">
										<span>月份：</span>
										<select name="" v-model="month">
											<option value="all">全部</option>
											<option v-for="(val,index) in data2" :value="val">{{val}}</option>

										</select>
									</li>
								</ul>

								<div>
									<div id="myChart2" style="width: 320px;height: 220px;">
									</div>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<div v-show="msg==true" style="width: 100%;height: 990px;background: white;margin-top: 20px;">
			<div style="width: 1400px;">
				<div style="height: 60px;line-height:60px; background: #E4E9EF;padding-left: 20px;">
					<button @click="back" class="btn_1">返回</button>
					<span style="height: 60px;border-left:solid 1px #D5DAE0;margin: 0 10px;"></span>
					<button @click="delEmail" class="btn_1">删除</button>
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
</template>
<script>
	import store from '../store.js'
	import echarts from 'echarts'
	import test3 from "../components/tanc/test3.vue"
	import '../../src/assets/css/module.css'
	export default {
		name: 'module',
		data: function() {
			return {
				bottom1: 1,
				bottom2: 1,
				checkList: [],
				infoList: [
					{ status: 0, send: "谦程网络", content: "月黑风高夜,杀人放火时" },
					{ status: 1, send: "谦程网络", content: "不,不,月黑风高夜,乃是行侠仗义时" },
				],
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
				data: {
					year: '',
					month: '',
					day: '',
					week: '',
				},
				data2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				message: [],
				//
				msg: false,
				data4: [],
				dataname: [],
				month: '',
				year: 2017,
				msgname: '',
				msgcmom: [],
				//
				datasize: 5,
				max: 0,
				ing: 1,
				name: [],
				aaa: '',
				delemail: [],
				month: ''

			}
		},
		components: {
			test3
		},
		mounted() {
			this.getdata();
			this.getWork();

		},
		watch: {
			'month': {
				handler: function(val) {
					if(val == 'all') {
						this.month = ''
					} else {
						this.month = val
						this.setdatB()
					}
				}
			}
		},
		methods: {
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
			//发邮件
			gotomsg(val) {
				var that = this
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/revert", {
					getUser: val,
					massage: this.aaa,
				}).then((data) => {
					this.aaa = ''

					that.$refs.t1.msgname = data.body.msg
					that.$refs.t1.locatio()

				})

			},
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
			Year(a) {
				this.year = a
				this.setdatB()
			},
			shul() {
				this.bottom1 = 1
				this.year = ''
				this.month = ''
				this.setdatB()
			},
			money() {
				this.bottom1 = 0
				this.year = ''
				this.month = ''
				this.setdatB()

			},
			back() {
				if(this.msg) {
					this.msg = false
				} else {
					this.msg = true

				}
			},
			//看邮件
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

			getdata() {
				var myDate = new Date();
				this.data.year = myDate.getFullYear();
				var week = myDate.getDay();
				this.data.month = myDate.getMonth() + 1;
				this.data.day = myDate.getDate();
				switch(week) {
					case 0:
						this.data.week = "星期天";
						break;
					case 1:
						this.data.week = "星期一";
						break;
					case 2:
						this.data.week = "星期二";
						break;
					case 3:
						this.data.week = "星期三";
						break;
					case 4:
						this.data.week = "星期四";
						break;
					case 5:
						this.data.week = "星期五";
						break;
					case 6:
						this.data.week = "星期六";
						break;
				}
			},
			mapp() {
				if(this.bottom1 == 1) {
					var myChart = echarts.init(document.getElementById('myChart'));
					var dataname = []
					this.data4.forEach((val) => {
						dataname.push(val)
					})

				} else {
					var myChart = echarts.init(document.getElementById('myChart2'));
					var dataname = []
					this.data4.forEach((val) => {
						dataname.push({ 'catName': val.catName, 'number': val.totalPic })
					})
				}
				myChart.setOption({
					title: {
						show: false,
						text: '采购统计'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)",

					},
					legend: {
						selected: {
							'侦检器材': true,
							textStyle: {
								fontSize: '15',
								fontWeight: 'bold',
								borderColor: 'red'
							}
						},
						orient: '',
						x: '200px',
						y: '20px',
						data: [dataname[0].catName, dataname[1].catName, dataname[2].catName]

					},
					series: [{
						name: '',
						type: 'pie',
						center: [100, 60],
						radius: ['40%', '48%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '15',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: true
							}
						},
						data: [{
								value: dataname[0].number,
								name: dataname[0].catName,
								itemStyle: {
									normal: {
										color: '#688FD3',

									}
								}
							},
							{
								value: dataname[1].number,
								name: dataname[1].catName,
								itemStyle: {
									normal: {
										color: '#53BECC'
									}
								}
							},
							{
								value: dataname[2].number,
								name: dataname[2].catName,
								itemStyle: {
									normal: {
										color: '#68D4B2'
									}
								}
							},

						]
					}]
				});
			},
			setdatB() {
				var that = this
				this.$http.post(store.state.config.apiUrlRoot + "admin/shoppingcart/teamStatistics", {
					status: this.bottom1,
					"year": this.year,
					"month": this.month,
				}).then((msg) => {
					if(msg.body.code == 1) {
						this.data4 = msg.body.content.num
						this.mapp()
					} else {

						that.$refs.t1.msgname = msg.body.msg
						that.$refs.t1.locatio2()
					}
				})

			},
			setdatC() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/getInformMsg").then((data) => {
					if(data.body.code == 1) {

						this.message = data.body.content.msg
						this.max = Math.ceil(this.message.length / this.datasize)
						this.name = this.message.slice(0, this.datasize)
					}

				})
				if(this.max <= 0) {
					this.max = 1
				}
			},
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
					function(response) {
						this.setdatB()

						var data = response.body;
						if(data.code = 1) {
							this.setdatC()
							this.workInfo = data.content.data;
							this.exist = data.content.exist;
						}

					},
				);
			},

		}
	}
</script>
<style scoped>
	.main-info-right {
		float: none !important;
	}
	
	.main-content-box {
		padding-left: 0px;
	}
	
	.li_ {
		width: 60px;
		text-align: center;
		line-height: 30px;
		height: 30px;
		border: solid 1px #D9D9DA;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		cursor: pointer;
		background: white;
		border-bottom: 0;
	}
	
	.li_2 {
		border-bottom: none;
		z-index: 100;
	}
	
	.tongji {
		margin-top: 1px;
		width: 320px;
		height: 200px;
		border: solid 1px #D9D9DA;
		float: right;
	}
	
	.tongji_1 {
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
		margin-right: 10px;
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
	
	.top_2 {
		height: 50px;
		background: #F5F6F8;
		width: 100%;
		border-bottom: 1px solid #CAD1DB;
		line-height: 50px;
		padding-left: 30px;
	}
	
	.xiaoxik {
		border: solid 1px #CAD1DB;
		width: 90%;
		margin: 20px 30px;
		height: 800px;
		margin-bottom: 0;
	}
	
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
	
	.info-box li {
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
		font-size: 16px;
		border-bottom: 1px solid #c8cfda;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	
	.info-box li:last-child {
		border-bottom: 0px solid #c8cfda;
	}
	
	.info-box li img {
		vertical-align: middle;
		margin-right: 10px;
	}
	
	.info-mask {
		border: 1px solid #c8cfda;
		margin-top: 20px;
	}
	
	.daiban {
		margin-top: 20px;
		height: 230px;
		width: 100%;
		border: 1px solid #c8cfda;
	}
	
	.daiban-item {
		margin-right: 70px;
		float: left;
	}
	
	.daiban-top {
		height: 115px;
		line-height: 115px;
		padding-left: 30px;
		font-size: 18px;
	}
	
	.num {
		font-size: 26px;
		color: #be4141;
		margin-left: 20px;
		vertical-align: top;
	}
	
	.main-info-time {
		font-size: 14px;
		color: #757575;
		text-align: center;
		line-height: 25px;
	}
	
	.main-info-day {
		height: 150px;
		font-size: 80px;
		text-align: center;
		color: #B9403E;
		line-height: 150px;
	}
	
	.main-info-right {
		width: 320px;
		height: 325px;
		background: #ffffff;
		float: right;
		border: 1px solid #c8cfda;
	}
	
	.main-info-left-txt {
		height: 40px;
		font-size: 18px;
		color: #333333;
		line-height: 40px;
		border-bottom: 1px solid #e5e5e5;
		padding-left: 15px;
		background: #f4f6f8;
	}
	
	.zong-box {
		width: 226px;
		height: 90px;
		border: 1px solid #c8cfda;
		padding-top: 10px;
		padding-left: 20px;
	}
	
	.zong-top-se {
		border-radius: 8px;
		background: #688fd3;
		color: #ffffff;
		padding: 2px 6px 3px 6px;
		font-size: 14px;
		margin-left: 40px;
	}
	
	.zong-bottom {
		margin-top: 20px;
	}
	
	.zong-bottom-txt {
		font-size: 30px;
		line-height: 45px;
	}
</style>