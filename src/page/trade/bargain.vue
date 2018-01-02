<template>
	<!-- 左侧导航 -->
	<div class="module">
		<div class="main-content-box">
			<div class="sold-top">
				<span>采购商 : </span>
				<input v-model="sname" type="text">
				<img src="../../assets/web/查询.png" height="41" width="94" @click="search">
			</div>
			<div class="sales-title">
				<ul class="unshelf-ul">
					<li v-for="(item,index) in  TabList" @click="changeTab(index)" style="font-size:15px;">{{item}}
						<div class="maskUl" v-if="showTab==index"></div>
					</li>
					<div class="sales-p-bottom"></div>
				</ul>
			</div>
			<span style="line-height:60px;padding-left:25px;font-weight:bold;color:#c8996b;font-size:16px;" v-show="data.length==0">暂无数据......</span>
			<div style="width: 100%;overflow-y:auto;" v-show="showTab==0">
				<table class="table " style="width: 100%; border-spacing:0px;margin-top:25px;30px;border-left:1px solid #e6ebf5;border-right:1px solid #e6ebf5;border-bottom:1px solid #e6ebf5;margin-top:20px;color:#333333;">
					<thead>
						<tr>
							<th class="text-center" colspan="2">产品名称</th>
							<th class="text-center">型号</th>
							<th class="text-center">采购单位</th>
							<th class="text-center">协议单价</th>
							<th class="text-center">数量</th>
							<th class="text-center">小计</th>
							<th class="text-center">操作</th>
						</tr>
					</thead>
					<tbody style="background-color:white;" v-for="(val,index) in name">
						<tr class="text-center" v-for="(a,ss) in val.cart">
							<td style="padding:20px 0px;width:90px;text-align:center;"><img width="80px" :src="a.titleImage" /></td>
							<td class="col-lg-2" style="overflow:hidden;width:200px;text-align:left;">{{a.productName}}</td>
							<td class="col-lg-2" style="overflow:hidden;width:120px;text-align:center;">{{a.model}}</td>
							<td class="col-lg-2" style="overflow:hidden;width:120px;text-align:center;">{{val.sellerName}}</td>
							<td style="width:130px;text-align:center;"><input type="text" name="" placeholder="修改价格" v-model="a.price" style="width:80px;height:30px;margin-left:10px;padding-left:5px;"></td>
							<td class="col-lg-2" style="overflow:hidden;width:50px;text-align:center;">{{a.number}}</td>
							<td style="overflow:hidden;width:80px;text-align:center;">{{a.totalPrice}}</td>
							<td class="col-lg-2" style="overflow:hidden;width:80px;text-align:center;">
								<img src="../../assets/web/修改议价.png" @click="xiugai(index,ss)" style="cursor:pointer;">
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div style="width: 100%;overflow-y:auto;" v-show="showTab==1">
				<table class="table " style="width: 100%; border-spacing:0px;margin-top:25px;30px;border-left:1px solid #e6ebf5;border-right:1px solid #e6ebf5;border-bottom:1px solid #e6ebf5;margin-top:20px;color:#333333;" v-for="(val,index) in data">
					<thead>
						<tr>
							<th class="text-center" colspan="2">产品名称</th>
							<th class="text-center">型号</th>
							<th class="text-center">采购单位</th>
							<th class="text-center">协议单价</th>
							<th class="text-center">数量</th>
							<th class="text-center">小计</th>
						</tr>
					</thead>
					<tbody style="background-color:white;" v-for="(a,ss) in val.cart">
						<tr class="text-center">
							<td style="padding:20px 0px;width:90px;text-align:center;"><img width="80px" :src="a.titleImage" /></td>
							<td class="col-lg-2" style="overflow:hidden;width:200px;text-align:left;">{{a.productName}}</td>
							<td class="col-lg-2" style="overflow:hidden;width:120px;text-align:center;">{{a.model}}</td>
							<td class="col-lg-2" style="overflow:hidden;width:120px;text-align:center;">{{val.sellerName}}</td>
							<td style="width:130px;text-align:center;">
								{{a.price}}
							</td>
							<td class="col-lg-2" style="overflow:hidden;width:50px;text-align:center;">{{a.number}}</td>
							<td style="overflow:hidden;width:80px;text-align:center;">{{a.totalPrice}}</td>
						</tr>
					</tbody>
				</table>
			</div>
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
	export default {
		name: 'module',
		data: function() {
			return {
				status: 1,
				showTab: 0,
				workInfo: {
					name: '',
				},
				sname: '',
				price: "",
				total: "",
				TabList: ["议价中", "议价完成"],
				showBg: 0,
				headerFixed: true,
				showCai: false,
				color: '#fe4d3c',
				Num: 0,
				num: [],
				Sum: 0,
				sum: [],
				data: [], //数据存储
				selectAll: [],
				addrs: true,
				nichen: '',
				sellerID: '',
				datasize: 7, //每页显示数据量(-1)
				dqy: 1, //页数
				msgs: 0,
				Sum: 0,
				msgname: '',
				com: false,
				data: [],
				name: [],
				zongy: [],
			}
		},
		created: function() {
			this.getPruductList();
		},
		methods: {
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
					// console.log(this.name)
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
			changeTab(index) {
				this.name = []
				this.showTab = index;
				this.data=[]
				this.dqy = 1;
				this.Sum=0
				if(this.showTab == 0) {
					this.status = 1;
				} else if(this.showTab == 1) {
					this.status = 2;
				}
				this.getPruductList();
			},
			getPruductList() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getShoppingcartList', {
					status: this.status
				}).then(function(reg) {
					if(reg.body.code == -3) {
						this.data = []
						this.name = []
					} else {
						this.data=[]
						var data = reg.body.content.productList
						this.data = data
						this.name = data
						this.zongy = []
						var arr = []
						data.forEach(function(item) {
							item.cart.forEach(function(val) {
								arr.push(val)
							});
						});
						this.Sum =arr.length
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
					}
				})
			},
			search() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getShoppingcartList', {
					status: 1,
					sellerName: this.sname
				}).then(function(reg) {
					if(reg.body.code == -3) {
						this.data = [],
							this.name = [],
							this.msg = 0
					} else {

						var data = reg.body.content.productList
						this.data = data
						this.name = data
						var sum = 0
						for(var n = 0; n < data.length; n++) {
							for(var m = 0; m < data[n].cart.length; m++) {
								this.data2.push(data[n].cart[m])
								this.data3.push(data[n].cart[m].cartID)
							}
						}

					}
				})
			},
			odd(cartID) {
				console.log(cartID);
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/confirm', {
					cartID: cartID,
				}).then((data) => {
					// console.log(data.body);
					// alert(data.body.msg)
				})
			},
			xiugai(index, ss) {
				if(this.data[index].cart[ss].price > 0) {
					var id = this.data[index].cart[ss].cartID;
					var num = this.data[index].cart[ss].number;
					var price = this.data[index].cart[ss].price;
					this.data[index].cart[ss].totalPrice = num * price;
					this.$http.post(store.state.config.apiUrlRoot + "admin/shoppingcart/revise", { cartID: id, price: price }).then(
						function(response) {
							var data = response.body;
							if(data.code == 1) {
								this.$message({

									message: data.msg,
									type: 'success'
								});
							} else {
								this.$message.error(data.msg);
								return;
							}
						},
						function(erro) {
							console.log(erro);
						}
					);
				} else {
					this.$message.error('价格不能是负数');
				}
			},
			on(index) {
				this.Sum = 0
				this.Num = 0
				if(event.path[0].checked == true) {
					this.sum.push(parseInt(event.path[2].children[5].innerHTML))
					this.num.push(parseInt(event.path[2].children[4].children[1].innerHTML))
					for(var n = 0; n < this.sum.length; n++) {
						this.Sum += parseInt(this.sum[n])
						this.Num += parseInt(this.num[n])
					}
				} else if(event.path[0].checked == false) {
					for(var n = 0; n < this.sum.length; n++) {
						if(event.path[2].children[5].innerHTML == this.sum[n]) {
							this.sum.splice(n, 1)
							this.num.splice(n, 1)
							for(var n = 0; n < this.sum.length; n++) {
								this.Sum += parseInt(this.sum[n])
								this.Num += parseInt(this.num[n])
							}
						}
					}
				}

			},
			go(price) {
				this.Sum = 0
				this.Num = 0
				if(event.path[2].children[0].children[0].checked == true) {
					var a = parseInt(event.path[1].children[1].innerHTML)
					var b = a
					a++
					for(var n = 0; n < this.num.length; n++) {
						if(this.num[n] == b) {
							this.num[n] = a
							this.sum[n] = parseFloat((a * price).toFixed(2))
						}
					}
					for(var n = 0; n < this.sum.length; n++) {
						this.Sum += parseInt(this.sum[n])
						this.Num += parseInt(this.num[n])
					}
					event.path[1].children[1].innerHTML = a
					event.path[2].children[5].innerHTML = (a * price).toFixed(2)
				} else {

					var a = event.path[1].children[1].innerHTML
					a++
					event.path[1].children[1].innerHTML = a
					event.path[2].children[5].innerHTML = parseFloat((a * price).toFixed(2))
				}

			},
			getCartList() {},
			shift(price) {
				this.Sum = 0
				this.Num = 0
				if(event.path[2].children[0].children[0].checked == true) {
					var a = parseInt(event.path[1].children[1].innerHTML)
					var b = a
					a--
					if(a <= 0) {
						a = 0

					}
					for(var n = 0; n < this.num.length; n++) {
						if(this.num[n] == b) {
							this.num[n] = a
							this.sum[n] = (a * price).toFixed(2)
						}
					}
					for(var n = 0; n < this.sum.length; n++) {
						this.Sum += parseInt(this.sum[n])
						this.Num += parseInt(this.num[n])
					}
					event.path[1].children[1].innerHTML = a
					event.path[2].children[5].innerHTML = (a * price).toFixed(2)
				} else {
					var a = event.path[1].children[1].innerHTML
					a--
					event.path[1].children[1].innerHTML = a
					event.path[2].children[5].innerHTML = (a * price).toFixed(2)
				}

			},
			todo() {
				this.addrs = !this.addrs
				// this.$refs.c1.a()
				console.log(111)

			},
			tt() {
				this.addrs = !this.addrs
				console.log(22);
			},
			all() {

			},
			del() {

			},
			hre() {

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
		}
	}
</script>
<style scoped>
	.yi-ul {
		width: 100%;
		background: pink;
	}
	
	.yi-ul li {
		float: left;
		margin-right: 50px;
	}
	
	.addrs {
		color: #c8996b;
	}
	
	.main-right {
		margin-top: 20px;
		width: 975px;
		height: 950px;
		float: left;
		margin-left: 13px;
	}
	
	.top_1 {
		height: 40px;
		border: solid 1px #E2E2E2;
		background-color: white;
		font-size: 14px;
		line-height: 40px;
		/*color: #FE4D3C;*/
		font-weight: bold;
		padding-left: 20px;
	}
	
	.tr_two {
		background-color: white;
	}
	
	.tr_two td {
		padding-left: 20px;
	}
</style>