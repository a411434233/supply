<template :sss='show'>
	<div>
		<div>
			<div v-show="name.length==0" style="color: #c8996b;font-size:25px;margin-top:20px;margin-left:20px;">暂无数据...</div>
			<div v-for="(val,index) in name" style="max-height: 655px;overflow: hidden;overflow-y:auto;width: 1000px;overflow-x:hidden;">
				<div class="herad herad3">
					<ul>
						<li>合同编号：<span>{{val.numberID}}</span></li>
						<li>创建日期：<span>{{val.addtime}}</span></li>
					</ul>
				</div>

				<div class="body">
					<div class="name_1">
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
					<div>

						<span>{{zong[index]}}元</span>
					</div>
					<div>
						<span>{{val.name}}</span>
					</div>
					<div>
						<span v-html="msg"></span>
					</div>
					<div>
						<div><span @click="tixing(val.numberID)" class="span"><img src="../../assets/supply/发货.png" height="30" width="101"></span></div>
					</div>
				</div>
			</div>
		</div>
		<!-- <component ref='t1' is='text3'></component> -->
		<!--分页-->
		<div class="fenye" style="width:540px;">
			<div>
				<span class="ziti" v-html="'共有'+Sum+'条记录'"></span>
			</div>
			<div class="anniu" v-show='dqy>1' @click="prin">上一页</div>
			<ul class="fenylan">
				<li @click="dangqian(index+1)" v-for="(val,index) in zongy" :class="{yebiaod:index==dqy-1,}" v-show="index==dqy-2||index==dqy-1||index==dqy" class="yebiao">{{val+1}}</li>
			</ul>
			<div @click="next" class="anniu">下一页&nbsp;</div>
			<span style="font-size:16px;line-height:29px;"> &nbsp;到第&nbsp;</span>
			<input type="text" v-model="msgs" class="shuruk" />
			<span style="font-size:16px;line-height:29px;">&nbsp;页&nbsp;</span>
			<div @click="bolck" class="anniu">确定</div>
		</div>
		<!--分页结束-->
		<transition name='bounce'>
			<div class="aaaa" v-show="com">
				{{msgname}}
			</div>
		</transition>
	</div>
</template>
<script>
	// import text3 from '../tanc/test3.vue'
	import store from '../../store.js'
	export default {
		name: 'demo',
		props: ["sss"],
		// components: {
		// 	text3
		// },
		data() {
			return {
				sum: 0,
				msg: '待发货',
				a: true,
				show: "",
				data: [], //数据存储
				name: [], //数据展示
				datasize: 2, //每页展示 的数量
				dqy: 1, //第几页
				Sum: 0,
				msgs: 0,
				zong: [],
				msgname: '',
				com: false,
				zongy: []
			}
		},
		methods: {
			search(a) {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
					status: 3,
					teamName: a
				}).then(function(reg) {
					if(reg.body.code == -3) {
						this.data = []
						this.name = []
						this.Sum = 0
					} else {
						var data = reg.body.content.productList
						this.data = data
						this.name = data.slice(0, this.datasize)
						this.Sum = data.length
					}
				})
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
			on() {
				this.sss.c = true
				this.sss.a = false
				this.sss.b = false
			},
			getdata() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
					status: 3
				}).then(function(reg) {
					if(reg.body.code == -3) {

					} else {

						var data = reg.body.content.productList
						this.data = data
						this.name = this.data.slice(0, this.datasize)
						this.Sum = this.data.length
						for(var n = 0; n < data.length; n++) {
							var sum = 0
							for(var m = 0; m < data[n].cart.length; m++) {
								sum += parseInt(data[n].cart[m].totalPrice)
							}
							this.zong.push(sum)
						}
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
					}

				})

			},
		},
		created() {

			this.getdata();

		}
	}
</script>

<style scoped="scoped">
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	
	.bounce-leave-active {
		animation: bounce-in 1.1s reverse;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
	
	.aaaa {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 250px;
		height: 100px;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 10px;
		color: white;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		transition: all 1s linear;
		text-align: center;
	}
	
	.span {
		color: #fe4d3c;
		cursor: pointer;
	}
	
	.buttom {
		width: 120px;
		height: 31px;
		border: none;
		background-color: #fe4d3c;
		color: white;
		line-height: 31px;
		margin: 10px auto;
	}
</style>