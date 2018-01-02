<template>
	<!-- 左侧导航 -->
	<div class="module">
		<div class="main-content-box">
			<div class="sold-top" v-show="showTab<5">
				<span>采购商 : </span>
				<input v-model="sname" type="text">
				<img src="../../assets/web/查询.png" height="41" width="94" @click="search">
			</div>
			<!-- <div v-show="show.a" class="sales-title">
						<ul class="unshelf-ul">
							<li v-for="(item,index) in  TabList" @click="changeTab(index)">{{item}}
								<div class="maskUl" v-if="showTab==index"></div>
							</li>
							<div class="sales-p-bottom"></div>
						</ul>
			</div> -->
			<div class="sales-title" v-show="showTab<5">
				<ul class="unshelf-ul">
					<li v-for="(item,index) in  TabList" @click="changeTab(index)" style="font-size:15px;">{{item}}
						<div class="maskUl" v-if="showTab==index"></div>
					</li>
					<div class="sales-p-bottom"></div>
				</ul>
			</div>

			<span style="line-height:60px;padding-left:25px;font-weight:bold;color:#c8996b;font-size:16px;" v-show="data.length==0">暂无数据......</span>
			<div style="max-height: 890px;overflow-y:auto;width:100%;overflow-x:hidden;margin-top:30px;" v-show="showTab==0&&data.length!=0">
				<div class="herad herad3" style="width:100%;border:1px solid #e6ebf5;background:#f3f3f3;">
					<span style="width:27.1%;">商品</span>
					<span style="width:10%;">总额</span>
					<span style="width:12%;">采购单位</span>
					<span style="width:9%;">交易状态</span>
					<span style="width:12%;">合同编号</span>
					<span style="width:12%;b">日期</span>
					<span style="width:10%;">操作</span>
				</div>
				<div class="body" style="width:99.8%;border-right:1px solid #e6ebf5;" v-for="(val,index) in name">
					<div class="name_1" style="20%;">
						<ul v-for="(a,b) in val.cart" style="position: relative; margin: 0;">
							<li><img width="50px" height="50px" style="margin-left:10px" :src="a.titleImage" /></li>
							<li>
								<span>{{a.productName}}</span>
								<br />
								<span>规格: {{a.model}}</span>
							</li>
							<li style="position: absolute;right:50px;top: 90px;">数量:{{a.number}}<br/>单价：{{a.price}}</li>
						</ul>
					</div>
					<div style="width:10%;">
						<span>{{val.allPic}}元</span>
					</div>
					<div style="width:12%;margin-left:4px;">
						<span>{{val.name}}</span>
					</div>
					<div style="width:9%;margin-left:4px;">
						<span>签订合同</span>
					</div>
					<div style="width:12%;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.numberID}}</span>
					</div>
					<div style="width:12%;line-height:60px;text-align:center;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.addtime}}</span>
					</div>
					<div>
						<div>
							<!-- <span @click="tixing(val.numberID)" class="span"><img src="../../assets/supply/发货.png" height="30" width="101"></span> -->
							<img src="../../assets/web/打印.png" height="34" width="98" style="margin-top:30px;text-align:center;margin-left:73px;cursor:pointer;" @click="on(val.numberID)">
						</div>
					</div>
				</div>
			</div>
			<div style="overflow-y:auto;width:100%;overflow-x:hidden;margin-top:30px;" v-show="showTab==1&&data.length!=0">
				<div class="herad herad3" style="width:100%;border:1px solid #e6ebf5;background:#f3f3f3;">
					<span style="width:27.1%;">商品</span>
					<span style="width:10%;">总额</span>
					<span style="width:12%;">采购单位</span>
					<span style="width:9%;">交易状态</span>
					<span style="width:12%;">合同编号</span>
					<span style="width:12%;b">日期</span>
					<span style="width:10%;">操作</span>
				</div>

				<div class="body" style="width:99.8%;border-right:1px solid #e6ebf5;" v-for="(val,index) in name">
					<div class="name_1" style="20%;">
						<ul v-for="(a,b) in val.cart" style="position: relative; margin: 0;">
							<li><img width="50px" height="50px" style="margin-left:10px" :src="a.titleImage" /></li>
							<li>
								<span>{{a.productName}}</span>
								<br />
								<span>规格: {{a.model}}</span>
							</li>
							<li style="position: absolute;right:50px;top: 90px;">数量:{{a.number}}<br/>单价：{{a.price}}</li>

						</ul>
					</div>
					<div style="width:10%;">

						<span>{{val.allPic}}元</span>
					</div>
					<div style="width:12%;margin-left:4px;">
						<span>{{val.name}}</span>
					</div>
					<div style="width:9%;margin-left:4px;">
						<span>待发货</span>
					</div>
					<div style="width:12%;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.numberID}}</span>
					</div>
					<div style="width:12%;line-height:60px;text-align:center;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.addtime}}</span>
					</div>
					<div>
						<div>
							<img src="../../assets/web/发货.png" height="33" width="98" style="margin-top:30px;text-align:center;margin-left:73px;cursor:pointer;" @click="tixing(val.numberID)">
						</div>
					</div>
				</div>
			</div>
			<div style="overflow-y:auto;width:100%;overflow-x:hidden;margin-top:30px;" v-show="showTab==2&&data.length!=0">
				<div class="herad herad3" style="width:100%;border:1px solid #e6ebf5;background:#f3f3f3;">
					<span style="width:27.1%;">商品</span>
					<span style="width:10%;">总额</span>
					<span style="width:12%;">采购单位</span>
					<span style="width:9%;">交易状态</span>
					<span style="width:12%;">合同编号</span>
					<span style="width:12%;b">日期</span>
					<span style="width:10%;">操作</span>
				</div>

				<div class="body" style="width:99.8%;border-right:1px solid #e6ebf5;" v-for="(val,index) in name">
					<div class="name_1" style="20%;">
						<ul v-for="(a,b) in val.cart" style="position: relative; margin: 0;">
							<li><img width="50px" height="50px" style="margin-left:10px" :src="a.titleImage" /></li>
							<li>
								<span>{{a.productName}}</span>
								<br />
								<span>规格: {{a.model}}</span>
							</li>
							<li style="position: absolute;right:50px;top: 90px;">数量:{{a.number}}<br/>单价：{{a.price}}</li>
						</ul>
					</div>
					<div style="width:10%;">
						<span>{{val.allPic}}元</span>
					</div>
					<div style="width:12%;margin-left:4px;">
						<span>{{val.name}}</span>
					</div>
					<div style="width:9%;margin-left:4px;">
						<span>等待买家收货</span>
					</div>
					<div style="width:12%;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.numberID}}</span>
					</div>
					<div style="width:12%;line-height:60px;text-align:center;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.addtime}}</span>
					</div>
					<div>
						<div>
							<img src="../../assets/web/确认收货.png" height="34" width="98" style="margin-top:30px;text-align:center;margin-left:73px;cursor:pointer;">
						</div>
					</div>
				</div>
			</div>
			<div style="overflow-y:auto;width:100%;overflow-x:hidden;margin-top:30px;" v-show="showTab==3&&data.length!=0">
				<div class="herad herad3" style="width:100%;border:1px solid #e6ebf5;background:#f3f3f3;">
					<span style="width:27.1%;">商品</span>
					<span style="width:10%;">总额</span>
					<span style="width:12%;">采购单位</span>
					<span style="width:9%;">交易状态</span>
					<span style="width:12%;">合同编号</span>
					<span style="width:12%;b">日期</span>
					<span style="width:10%;">操作</span>
				</div>

				<div class="body" style="width:99.8%;border-right:1px solid #e6ebf5;" v-for="(val,index) in name">
					<div class="name_1" style="20%;">
						<ul v-for="(a,b) in val.cart" style="position: relative; margin: 0;">
							<li><img width="50px" height="50px" style="margin-left:10px" :src="a.titleImage" /></li>
							<li>
								<span>{{a.productName}}</span>
								<br />
								<span>规格: {{a.model}}</span>
							</li>
							<li style="position: absolute;right:50px;top: 90px;">数量:{{a.number}}<br/>单价：{{a.price}}</li>
						</ul>
					</div>
					<div style="width:10%;">
						<span>{{val.allPic}}元</span>
					</div>
					<div style="width:12%;margin-left:4px;">
						<span>{{val.name}}</span>
					</div>
					<div style="width:9%;margin-left:4px;">
						<span>等待买家评价</span>
					</div>
					<div style="width:12%;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.numberID}}</span>
					</div>
					<div style="width:12%;line-height:60px;text-align:center;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.addtime}}</span>
					</div>
					<div>
						<div>
							<!-- <img src="../../assets/web/确认收货.png" height="34" width="98" style="margin-top:30px;text-align:center;margin-left:73px;cursor:pointer;" > -->
							<span>等待买家评价</span>
						</div>
					</div>
				</div>
			</div>
			<div style="overflow-y:auto;width:100%;overflow-x:hidden;margin-top:30px;" v-show="showTab==4&&data.length!=0">
				<div class="herad herad3" style="width:100%;border:1px solid #e6ebf5;background:#f3f3f3;">
					<span style="width:27.1%;">商品</span>
					<span style="width:10%;">总额</span>
					<span style="width:12%;">采购单位</span>
					<span style="width:9%;">交易状态</span>
					<span style="width:12%;">合同编号</span>
					<span style="width:12%;b">日期</span>
					<span style="width:10%;">操作</span>
				</div>

				<div class="body" style="width:99.8%;border-right:1px solid #e6ebf5;" v-for="(val,index) in name">
					<div class="name_1" style="20%;">
						<ul v-for="(a,b) in val.cart" style="position: relative; margin: 0;">
							<li><img width="50px" height="50px" style="margin-left:10px" :src="a.titleImage" /></li>
							<li>
								<span>{{a.productName}}</span>
								<br />
								<span>规格: {{a.model}}</span>
							</li>
							<li style="position: absolute;right:50px;top: 90px;">数量:{{a.number}}<br/>单价：{{a.price}}</li>
						</ul>
					</div>
					<div style="width:10%;">
						<span>{{val.allPic}}元</span>
					</div>
					<div style="width:12%;margin-left:4px;">
						<span>{{val.name}}</span>
					</div>
					<div style="width:9%;margin-left:4px;">
						<span>已评价</span>
					</div>
					<div style="width:12%;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.numberID}}</span>
					</div>
					<div style="width:12%;line-height:60px;text-align:center;margin-left:4px;border-right:1px solid #e6ebf5;">
						<span>{{val.addtime}}</span>
					</div>
					<div>
						<div>
							<img @click="chakn(val.numberID)" src="../../assets/web/查看.png" height="34" width="98" style="margin-top:30px;text-align:center;margin-left:73px;cursor:pointer;">
						</div>
					</div>
				</div>
			</div>
			<!--查看评价-->
			<div style="overflow-y:auto;width:100%;overflow-x:hidden;margin-top:10px;" v-show="showTab==5&&data.length!=0">
				<div class="container-fluid" >
					<div style="height: 70px; background: white; padding: 10px; display: flex;">
						<strong style="font-size: 18px;line-height: 60px;">位置：已售出的商品/评价</strong>
						<div style="margin-left:3px;"  >
						 <button class=" btn" @click="back">返回上一页</button>
						</div>
					</div>
					<div style="border:  1px solid #C0C0C0; height: 50px;background: #F1F1F1;line-height: 50px;padding-left: 20px;font-size: 18px;">对商品的评价</div>
					<ul style="border: solid 1px #c0c0c0;line-height: 40px;">
						<li style="margin-left: 20px;font-size: 17px;">商品描述相符：<span v-for="(val,index) in sum1"><img style="margin-left: 20px;" src="../../assets/supply/xin.png"/></span></li>
						<li style="margin-left: 20px;font-size: 17px;">卖家服务态度：<span v-for="(val,index) in sum2"><img style="margin-left: 20px;" src="../../assets/supply/xin.png"/></span></li>
						<li style="margin-left: 20px;font-size: 17px;">卖家发货速度：<span v-for="(val,index) in sum3"><img style="margin-left: 20px;" src="../../assets/supply/xin.png"/></span></li>
						<li style="margin-left: 20px;font-size: 17px;">物流发货速度：<span v-for="(val,index) in sum4"><img style="margin-left: 20px;" src="../../assets/supply/xin.png"/></span></li>
					</ul>

					<table border="1" cellpadding="0" cellspacing="0" style="border:#C0C0C0;width: 100%;" >
						<tr style="height: 40px;background: #F1F1F1;font-size: 16px;">
							<th colspan="2" style="padding-left: 20px;"> 对商品进行评价</th>
						</tr>
						<tbody v-for="(val,index) in data">
							<tr v-for="(a,b) in val.evaluation">
								<td style="padding: 10px 10px;width:250px;" v-if="b==0" :rowspan="val.evaluation.length">
									<div style="display: flex;padding: 10px 10px;">
										<img width="60px" height="60px" :src="val.titleImage" />
										<div style="padding: 0 5px;">
											<p>商品名称：{{val.name}}</p>
											<p>型号：{{val.model}}</p>
										</div>
									</div>
								</td>
								<td style="padding: 10px 10px;">
									<div style="display: flex;flex-direction: column;">
										<div style="display: flex;padding: 10px 10px;align-items: center;">
											<img width="30px" height="30px" :src="a.thumb" style="margin: 0 5px;" />
											<span>昵称：{{a.sellerName}}</span>&emsp;
											<span v-if="a.praise==1">好评：<span v-for="(val,index) in good3"><img src="../../assets/supply/xin.png"/></span></span>
											<span v-if="a.praise==2">中评：<span v-for="(val,index) in good2"><img src="../../assets/supply/xin.png"/></span></span>
											<span v-if="a.praise==3">差评：<span v-for="(val,index) in good1"><img src="../../assets/supply/xin.png"/></span></span>
										</div>
										<div style="font-size: 16px;">
											<p>{{a.content}}
											</p>

										</div>
									</div>
								</td>

							</tr>
						</tbody>

					</table>

				</div>
			</div>
			<!-- 分页 -->
			<div class="fenye" v-show="showTab<5">
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
	export default {
		name: 'module',
		data: function() {
			return {
				sname: '',
				workInfo: {
					name: '',
				},
				showTab: 0,
				TabList: ["签订合同", "待发货", "待收货", "未评价", "已评价", ],
				topList: ['全部消息', '未读消息', '已读消息'],
				showDiv: false,
				showShang: false,
				showJiao: true,
				active: false,
				showInfo: false,
				showBg: 0,
				headerFixed: true,
				showCai: false,
				color: '#fe4d3c',
				show: {
					a: true,
					b: false,
					c: false,
					d: 0,
					name: ''
				},
				zong: [],
				status: 7,
				a: 'three',
				msg: '待发货',
				msg2: '供方是否已确认',
				data: [], //数据存储
				name: [], //数据展示
				datasize: 1, //每页展示 的数量
				dqy: 1, //第几页
				Sum: 0,
				msgs: 0,
				nichen: '',
				sellerID: '',
				msgname: '',
				com: false,
				data2: [],
				zongy: [],
				sum1: [],
				sum2: [],
				sum3: [],
				sum4: [],
				good1: [1],
				good2: [1, 2],
				good3: [1, 2, 3],
				max:1,

			}
		},
		created: function() {
			this.getPruductList();
			if(this.$route.query.showTab == 0) {
				this.showTab = 0;
			} else if(this.$route.query.showTab == 1) {
				this.showTab = 1;
			} else if(this.$route.query.showTab == 2) {
				this.showTab = 2;
			} else if(this.$route.query.showTab == 3) {
				this.showTab = 3;
			} else if(this.$route.query.showTab == 4) {
				this.showTab = 4;
			}

		},
		methods: {
			back(){
				this.showTab=4
			},
			chakn(val) {
				this.showTab=5
				this.data = []
				this.data2 = []
				this.sum1 = []
				this.sum2 = []
				this.sum3 = []
				this.sum4 = []

				this.$http.post(store.state.config.apiUrlRoot + 'admin/product/getEvaluationByNum', {
					"numberID": val
				}).then((data) => {
					this.data2 = data.body.content.rate
					this.data = data.body.content.EvaluationList
					for(var n = 0; n < Math.ceil(this.data2.attitude); n++) {
						this.sum2.push(1)
					}
					for(var n = 0; n < Math.ceil(this.data2.similarity); n++) {
						this.sum1.push(1)
					}
					for(var n = 0; n < Math.ceil(this.data2.shipping); n++) {
						this.sum3.push(1)
					}
					for(var n = 0; n < Math.ceil(this.data2.logistics); n++) {
						this.sum4.push(1)
					}
				})

			
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
						this.dqy =this.max
					}
				else {
					this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					// console.log(this.name)
				}
			},
			on(el) {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/printContract', {
					"numberID": el
				}).then((data) => {
					var tt = 'http://duanhui.qianchengwl.cn/' + data.body.content;
					window.open(tt);
				})
			},
			tixing(numberID) {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/sendoutProduct', {
					numberID: numberID
				}).then((data) => {
					this.$message({
						showClose: true,
						message: '发货成功',
						type: 'success'
					});
					this.getdata();
				})

			},
			getPruductList() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
					status: this.status
				}).then(function(reg) {
					if(reg.body.code == -3) {
						this.data = []
						this.name = []
						this.Sum = this.data.length
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
					} else {
						console.log(reg)
						var data = reg.body.content.productList
						this.data = data
						this.name = data
						var arr = []
						for(var n = 0; n < data.length; n++) {
							var sum = 0
							for(var m = 0; m < data[n].cart.length; m++) {
								sum += parseInt(data[n].cart[m].totalPrice)
							}
							this.zong.push(sum)
						}
						data.forEach(function(item) {
							item.cart.forEach(function(val) {
								arr.push(val)
							});
						});
						this.Sum = data.length
						this.max=Math.ceil(data.length/this.datasize)
						this.name=data.slice(0,this.datasize)
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
					}
				})
			},
			search() {
				if(this.showTab == 4) {

					this.$refs.t1.search(this.sname)
				} else if(this.showTab == 0) {
					this.$refs.t2.search(this.sname)
				} else if(this.showTab == 1) {
					this.$refs.t3.search(this.sname)
				} else if(this.showTab == 2) {
					this.$refs.t4.search(this.sname)
				} else if(this.showTab == 3) {
					this.$refs.c1.search(this.sname)
				}

			},
			changeTab(index) {
				this.showTab = index;
				this.dqy = 1;
				if(index == 2) {
					this.msg = '待收货'
					this.a = 'ddd'
					this.msg2 = '操作'
					this.status = 6
				} else if(index == 1) {
					this.msg = "待发货"
					this.a = 'bbb'
					this.msg2 = '操作'
					this.status = 3
				} else if(index == 3) {
					this.msg = "待收货"
					this.a = 'demo'
					this.msg2 = '评价'
					this.status = 4
				} else if(index == 4) {
					this.msg = '待收货'
					this.a = 'chak'
					this.status = 5
				} else if(index == 0) {
					this.a = 'three'
					this.msg = "签订合同"
					this.msg2 = "供方是否已确认"
					this.status = 7

				}
				this.getPruductList();

			},
			showMask() {
				this.showInfo = !this.showInfo;
			},
			changeIndex(index) {
				this.showBg = index;
			},

		},
	}
</script>

<style>
	.btn{
		margin-top: 10px;
		width: 100px;
		height: 35px;
		line-height: 35px;
		border-radius:5px ;
		background: #688FD3;
		color: white;
		border: none;
		cursor: pointer;
	}
	.herad span {
		line-height: 50px;
		font-size: 18px;
		display: inline-block;
		text-align: center;
	}
	
	.maskUl {
		position: absolute;
		height: 3px;
		background: #B4A078;
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
		background: white;
		border: solid 1px #DFDFDF;
		line-height: 40px;
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
	
	.main-right {
		margin-top: 20px;
		width: 975px;
		height: 950px;
		float: left;
		margin-left: 13px;
	}
	
	.sold-top {
		padding-top: 24px;
		height: 76px;
		width: 100%;
		background: #ffffff;
		margin-bottom: 19px;
	}
	
	.sold-top span {
		font-size: 16px;
		margin-right: 10px;
	}
	
	.sold-top input {
		padding-left: 5px;
		width: 137px;
		height: 35px;
		margin-right: 20px;
	}
	
	.sold-top img {
		vertical-align: middle;
		cursor: pointer;
	}
	
	.herad3 {
		border: solid 1px #E2E2E2;
		margin-top: 5px;
		background-color: white;
	}
	
	.herad {
		width: 971px;
		height: 48px;
	}
	
	.herad ul {
		display: flex;
		width: 100%;
		height: 48px;
		line-height: 48px;
	}
	
	.herad2 ul {
		border: solid 1px #e2e2e2;
	}
	
	.herad ul li:first-of-type {
		padding: 0 40px;
	}
	
	.name_1 div:nth-of-type(1) {
		width: 438px;
		height: 145px;
	}
	
	.name_1 {
		height: 100%
	}
	
	.name_1 ul {
		width: 438px;
		height: 145px;
		display: flex;
		align-items: center;
	}
	
	.name_1 ul li:first-of-type {
		width: 90px;
		height: 60px;
	}
	
	.name_1 ul:first-of-type {
		border-bottom: 1px solid #f2f2f2;
	}
	
	.name_1 ul li:nth-of-type(2) {
		line-height: 30px;
	}
	
	.name_1 ul li:nth-of-type(2) span {
		font-size: 16px;
	}
	
	.name_1 ul li:nth-of-type(3) {
		position: relative;
		top: 43px;
		right: -20px;
	}
	
	.body {
		width: 971px;
		border: solid 1px #e2e2e2;
		border-top: none;
		height: 100%;
		display: flex;
		background-color: white;
	}
	
	.body div:nth-of-type(2) {
		width: 100px;
		border-left: solid 1px #f2f2f2;
		text-align: center;
	}
	
	.btn {
		position: initial;
	}
	
	.body div:nth-of-type(2) span {
		display: block;
		margin-top: 20px;
	}
	
	.body div:nth-of-type(3) {
		width: 126px;
		border-left: solid 1px #f2f2f2;
		text-align: center;
	}
	
	.body div:nth-of-type(3) span {
		display: block;
		margin-top: 20px;
	}
	
	.body div:nth-of-type(4) {
		width: 126px;
		border-left: solid 1px #f2f2f2;
		text-align: center;
	}
	
	.body div:nth-of-type(4) span {
		display: block;
		margin-top: 20px;
	}
	
	.body div:nth-of-type(5) {
		width: 181px;
		text-align: center;
		border-left: solid 1px #f2f2f2;
		text-align: center;
	}
	
	.body div:nth-of-type(5) span {
		display: block;
		margin-top: 20px;
	}
	
	.in {
		margin-top: 5px;
		width: 971px;
	}
	
	.buttom2 {
		width: 120px;
		height: 31px;
		border: solid 1px #a9a9a9;
		color: black;
		line-height: 31px;
		margin: 10px auto;
	}
	
	thead tr {
		height: 59px;
		background-color: #f2f2f2;
	}
	
	thead tr th {
		font-size: 16px;
	}
	
	.tr_two {
		height: 44px;
	}
	
	tbody tr {
		height: 106px;
	}
	
	tbody button {
		width: 20px;
	}
	
	tbody td:nth-of-type(5) span {
		width: 50px;
		padding: 0 8px;
		border: solid 1px #666666;
		height: 24px;
		line-height: 23px;
		display: inline-block;
		text-align: center;
	}
	
	.close1 {
		cursor: pointer;
	}
	
	.herad2 ul li {
		font-size: 16px;
		font-weight: bold;
	}
	
	.herad2 ul li:first-of-type {
		width: 438px;
		text-align: center;
	}
	
	.herad2 ul li:nth-of-type(2) {
		width: 99px;
		text-align: center;
	}
	
	.herad2 ul li:nth-of-type(3) {
		width: 125px;
		text-align: center;
	}
	
	.herad2 ul li:nth-of-type(4) {
		width: 125px;
		text-align: center;
	}
	
	.herad2 ul li:nth-of-type(5) {
		width: 180px;
		text-align: center;
	}
</style>