<template>
	<div :sss='show' class="container-fluid">
		<div style="height: 70px; background: white; padding: 20px 20px; border: solid 1px #c9c9c9; border-top:3px solid red ; " class="row">
			<strong>评价</strong>
			<div style="margin-left:3px;" @click="back" class="btn btn-sm btn-default ">
				返回上一页
			</div>
		</div>

		<div style="background: white;" class="row">
			<div class="h4" style="border-bottom:  1px solid #C0C0C0; padding: 0 10px;">对供应商的评价</div>
			<div>
				<div style="display: flex; justify-content: space-around;" class="h4 row col-lg-8">综合评价：<input type="radio" name="c" value="1" v-model="xinj" />一星<input type="radio" name="c" value="2" v-model="xinj" />二星<input type="radio" name="c" value="3" v-model="xinj" />三星<input type="radio" name="c" value="4" v-model="xinj" />四星<input type="radio" name="c" value="5" v-model="xinj" />五星</div>
			</div>
		</div>
		<div class="row">
			<div class="h4" style="border-bottom:  1px solid #C0C0C0;border-top:  1px solid #C0C0C0; background: white; margin: 0px ; padding: 0 10px; height: 30px; line-height: 30px;">对商品进行评价</div>
		</div>
		<div class="row" style="background: white; padding: 5px 5px;">
			<div class="col-lg-1">
				<img src="" />
			</div>
			<div class="col-lg-3">
				<h5> 型号：GTYF32</h5>
			</div>
			<div class="col-lg-6">
				<div><input type="radio" name="6" id="6" value="1" v-model="pingjia" />好评<input v-model="pingjia" type="radio" name="6" id="6" value="2" />中评<input type="radio" name="6" id="6" value="3" v-model="pingjia" />差评</div>
				<textarea name="" placeholder="写点评价吧...." v-model="vale" rows="8" cols="60"></textarea>
			</div>
		</div>
		<div class="row  text-center" style="height: 100px;padding: 30px 30px; background: #c9c9c9;">
			<button @click="ok()" class="om">提交</button>
		</div>
	</div>
</template>

<script>
	import store from '../../store.js'
	export default {
		name: 'so',
		props: ['sss'],
		created() {
		},
		data() {
			return {
				show: "",
				pingjia: '',
				vale: '',
				xinj: 0,
				name: this.sss.name
			}
		},
		methods: {
			loding(){
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
					status:4
				}).then(function(reg) {


				})
			},
			ok() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/product/productEvaluation', {
					productID: this.sss.d,
					content: this.vale,
					praise: 2,
					star: 5
				}).then(function(reg) {
					console.log(reg)
					this.vale = ''
				})
			},
			back() {
				this.sss.a = true
				this.sss.b = false
				this.sss.c = false

			}
		},

	}
</script>

<style scoped>
	.om {
		width: 150px;
		height: 30px;
		background: #B4A078;
		color: white;
		border: none;
	}
</style>