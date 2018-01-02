<template>
	<div :sss='show' class="container-fluid">
		<div style="height: 70px; background: white; padding: 20px 20px; border: solid 1px #c9c9c9; border-top:3px solid red ; " class="row">
			<strong>查看评价</strong>
			<div style="margin-left:3px;" @click="back" class="btn btn-sm btn-default ">
				返回上一页
			</div>
		</div>

		<div style="background: white;" class="row">
			<div class="h4" style="border-bottom:  1px solid #C0C0C0; padding: 0 10px;">对供应商的评价</div>
				<div class="h4 bigTitle row col-lg-8">综合评价：<span v-for="(val,index) in sum" ><img style="margin: 5px;"  src="../../assets/supply/xin.png" /></span></div>
		</div>
		<div class="row">
			<div class="h4" style="border-bottom:  1px solid #C0C0C0;border-top:  1px solid #C0C0C0; background: white; margin: 0px ; padding: 0 10px; height: 30px; line-height: 30px;">对商品进行评价</div>
		</div>
		<div class="row" style="background:#F2F2F2; padding: 5px 5px;border: solid 1px #C0C0C0;">
			<img class="img img-circle " src="../../assets/supply/我的---副本_复制.png" /><span>昵称:AA</span><span style="margin-left:30px;">星级</span><span v-for="(val,index) in sum"><img style="margin:3px;" width="18px" src="../../assets/detail/星.png"/></span><span style="margin: 0 10px;">数量：{{n}}&ensp;累计采购：{{n2}}</span>
		</div>
		<div class="on_1 row">
			<div class="h5">好评</div>
			<div>
				<p>不错，与描述相符，买来车上备用的，提车送的那个太小，而且也三年多了，速度不像有的买家说的要一周多才到，和平常的快递一样块，也有可能是我买的单件，便于运输吧。</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "chakan",
		props: ['sss'],
		data() {
			return {
				sum:[],
				show: "",
				n: 200,
				n2: 2264,
				a:5,
			}
		},
		methods: {
			ex() {},
			back() {
				console.log(this.sss)
				this.sss.a = true
				this.sss.b = false
				this.sss.c = false
			},

		},
		created(){
			for(let n=0;n<this.a;n++){
				this.sum.push(n)
			}
		}
	}
</script>

<style scoped="scoped">
	.om {
		width: 150px;
		height: 30px;
		background: #fe4d3c;
		color: white;
		border: none;
	}
	
	.on_1 {
		height: 150px;
		background: white;
		padding: 10px;
	}
</style>