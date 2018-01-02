<template>
	<div>
		<table class="table " style="width: 971px;" >
			<thead>
				<tr style="height: 30px;">
					<th class="text-center" colspan="2">产品名称</th>
					<th class="text-center">型号</th>
					<th class="text-center">协议单价</th>
					<th class="text-center">数量</th>
					<th class="text-center">小计</th>
				</tr>
			</thead>
			<tbody style="background-color: white; height: 80px;" v-for="(val,index) in data"  >
				<tr class='tr_two '>
				<td colspan="7">供货商：{{val.sellerName}}</td>
				</tr>
				<tr style="height: 80px;" class="text-center" v-for="(a,index) in val.cart" >
					<!--图片-->
					<td><img style="margin-left: 50px;" width="80px" height="80px" :src="a.titleImage" /></td>
					<td class="col-lg-2">{{a.productName}}</td>
					<td class="col-lg-2">{{a.model}}</td>
					<td>{{a.price}}</td>
					<td class="col-lg-2">{{a.number}}</td>
					<td colspan="2">{{a.totalPrice}}</td>
				<tr style="height: 60px;background-color: white; border: solid 1px #E2E2E2;">
					<td colspan="6" class="text-right">
						<div @click="odd(a.cartID)" style="background:#FE4D3C ; color: white; margin-top: 10px;" class="btn btn-sm">生成合同</div>
					</td>
				</tr>
				</tr>
			</tbody>
		</table>
		<div class="h3 text-center" v-show="data.length==0">暂无数据......</div>
		<!-- <component ref='t1' is='text3'></component> -->
	</div>
</template>

<script>
	import store from '../../store.js'
	// import text3 from '../../components/tanc/test3.vue'
	export default {
		// components:{
		// 	text3
		// },_
		data() {
			return {
				cardID:[],
				data: [], //数据存储
				Num: '',
				Sum: ''
			}
		},
		
		created() {
			this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getShoppingcartList', {
				status: 2
			}).then(function(reg) {
				if(reg.body.code == -3) {} else {
					var data = reg.body.content.productList
					var data2=reg.body.content.productList[0].cart
					this.data = data
					for(var n=0;n<data2.length;n++){
						this.cardID.push(data2[n].cartID)
					}

					
				}
			})
		},
		methods: {
			a(){
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getShoppingcartList', {
				status: 2
			}).then(function(reg) {
				if(reg.body.code == -3) {} else {
					var data = reg.body.content.productList
					this.data = data
				}

			})
			},
			
			odd() {

			this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/pdf', {
				cartID : this.cardID
			}).then(function(reg) {
				this.$refs.t1.msgname=reg.body.msg
				this.$refs.t1.locatio2()
				var that=this
				setTimeout(function(){
					that.$router.push({
					path: '/trade/sold'
				});
				},1500)
			})
				
			}
		}
	}
</script>

<style>

</style>