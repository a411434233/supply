<template>
	<div>
		<div v-show="name.length==0" style="color: #c8996b;font-size:25px;margin-top:20px;margin-left:20px;">暂无数据..</div>
		<div v-for="(val,index) in name" style="height:655px ;width: 1000px;overflow: hidden;">

			<div class="herad herad3">
				<ul>
					<li class="col-lg-4">合同编号：<span>{{val.numberID}}</span></li>
					<li class="col-lg-3">创建日期：<span>{{val.addtime}}</span></li>
					<li style="margin-left: 200px;"><button style="position:relative; top: 0; margin: 0 10px;" class="btn_" @click="exi">编辑合同</button><button style="position: relative; top: 0;" class="btn_" @click="ex">浏览合同</button></li>
				</ul>
			</div>
			<div class="body" v-for="(a,b) in val.cart">
				<div class="name_1">
					<ul style="margin-bottom: 0;">
						<li><img style="margin-left:5px;width: 80px;" :src="a.titleImage" /></li>
						<li>
							<span>{{a.productName}}</span>
							<br />
							<span>规格: {{a.model}}</span>
						</li>
					</ul>
				</div>
				<div>
					<span>{{a.totalPrice}}</span>
				</div>
				<div>
					<span>{{a.name}}</span>
				</div>
				<div>
					<span>{{msg}}</span>
				</div>
				<div>
					<div><span>已确认 </span>
						<div v-if="name[index].cart.length==b+1" @click="on(val.numberID)" class='buttom '>{{msg}}</div>
						<div v-else></div>
					</div>
				</div>
			</div>
		</div>
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
	import store from '../../store.js'

	export default {
		name: 'demo',

		data() {
			return {
				msg: '打印',
				a: true,
				show: "",
				data: [], //数据存储
				name: [], //数据展示
				datasize: 3, //每页展示 的数量
				dqy: 1, //第几页
				Sum: 0,
				msgs: 0,
				msgname: '',
				com: false,
				zongy: []
			}
		},
		methods: {
			search(a) {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
					status: 7,
					teamName: a
				}).then(function(reg) {
					if(reg.body.code == -3) {
						this.data = []
						this.name = []
						this.Sum = 0
					} else {
						var data = reg.body.content.productList
						this.data = data
						this.name = data
						data.forEach(function(item));
					}
				})
			},
			ex() {

			},
			exi() {

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
					alert(0)
				} else {
					this.a = true
					this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/printContract', {
						"numberID": el
					}).then((data) => {
						var tt = 'http://duanhui.qianchengwl.cn/' + data.body.content;
						window.open(tt);
					})
				}
			},
		},
		created() {
			this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
				status: 7
			}).then(function(reg) {
				if(reg.body.code == -3) {} else {
					var data = reg.body.content.productList
					this.data = data
					this.name = this.data.slice(0, this.datasize)
					this.Sum = data.length
					this.zongy = []
					for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
						this.zongy.push(n)
					}
				}
			})

		}
	}
</script>

<style scoped="scoped">
	.buttom {
		width: 120px;
		height: 31px;
		border: none;
		border: solid 1px black;
		background: white;
		color: black;
		line-height: 31px;
		margin: 10px auto;
		cursor: pointer;
	}
	
	.btn_ {
		width: 80px;
		height: 30px;
		line-height: 30px;
		background-color: white;
		border: none;
		border: solid 1px #F2F2F2;
	}
</style>