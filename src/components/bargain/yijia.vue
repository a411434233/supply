<template>
	<div :sss='show' class="container-fluid">
		<div style="height: 70px; background: white; padding: 20px 20px; border: solid 1px #c9c9c9;" class="row">
			<strong>购物车</strong>

		</div>
		<div style="margin-top: 15px;" class="row">
			<table class="table table-bordered text-center">
				<tr style="height: 50px; " class="text-center">
					<th class="text-center h4">产品名称</th>
					<th class="text-center h4">型号</th>
					<th class="text-center h4">供货价</th>
					<th class="text-center h4">有效年份</th>
					<th class="text-center h4">数量</th>
					<th class="text-center h4">总计</th>
					<th class="text-center h4">操作</th>
				</tr>
				<tr v-for="(val,index) in data" style="margin-top: 10px; background: white;height:40px ; border:  solid 1px #c9c9c9;">
					<td v-for="(a,index) in val.cart" style="display: flex; justify-content: center; ">
						<div><img style="margin:20% 20%;" width="80px" :src="a.titleImage" /></div>
						<div style="margin: 20px 20px; width: 140px;">{{a.productName}}<br/>{{val.sellerName}}</div>
					</td>
					<td v-for="(val,index) in val.cart">{{val.model}}</td>
					<td v-for="(val,index) in val.cart">{{val.price}}</td>
					<td v-for="(val,index) in val.cart">{{'2017-2019'}}</td>
					<td v-for="(val,index) in val.cart">{{val.number}}</td>
					<td class="text-danger">{{a.totalPrice}}</td>
					<td><button style="margin: 0px 10px;" @click="bt(a.cartID)" class="button_">议价</button></td>
				</tr>
				<tr style="background:  white;" v-show="data.length==0" class="h3">
					<td class="text-center" colspan="7">商家暂未上传产品....</td>
				</tr>
			</table>

		</div>

		<div v-show="data.length==!0" class="row">
			<div class="col-lg-6"></div>
			<div class="col-lg-6"><span v-html="'共有'+msg+'条记录,当前第'+dqy+'页'"></span><button @click="prin" style="margin: 5px 8px;">上一页</button><button @click="next">下一页</button>到第<input v-model="msgs" style="width: 35px;" type="text" />页<button @click="bolck">确定</button></div>
		</div>
	</div>
</template>

<script>
	import store from '../../store.js'
	export default {
		name: "add",
		props: ['sss'],
		data() {
			return {
				data: [],
				a: true,
				name: [],
				one: [],
				msg: 0, //数量总数
				datasize: 15, //每页显示数据量
				dqy: 1, //页数
				two: [],
				msgs: 0,
				show: "",
				supper: ""
			}
		},
		methods: {
			back() {
				this.sss.a = false
			},
			bts() {
				alert(2)
			},
			bt(a) {
				this.$http.post(store.state.config.apiUrlRoot + "admin/shoppingcart/bargaining", {
					cartID: a
				}).then((data) => {
					alert(data.body.msg)
				})
			},
			bolck() {
				this.dqy = this.msgs
				if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[1-9]*$/)) {
					alert("超出范围,或者输入不正确 ,请重新输入!")
					this.msgs = ""
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
					if(this.dqy * this.datasize > this.data.length) {
						this.dqy = Math.ceil(this.data.length / this.datasize)
						this.name = this.data.slice(this.data.length - this.datasize, this.data.length)
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},
			loding() {}
		},
		created() {
			this.$http.post(store.state.config.apiUrlRoot + "admin/shoppingcart/getShoppingcartList", {
				status: 0
			}).then((data) => {
				if(data.body.code==-3){

				}else{
					var data = data.body.content.productList.
					this.data = data
				}

			})

		},

	}
</script>

<style scoped="scoped">
	.button_ {
		width: 60px;
		height: 30px;
		border: solid 1px #D6D6D6;
		background-color: #FE4A3D;
		color: white;
	}
</style>