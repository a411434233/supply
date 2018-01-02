<template>
	<div  >
               <div v-show="name.length==0" style="color: #c8996b;font-size:25px;margin-top:20px;margin-left:20px;">暂无数据..</div>
		<div v-for="(val,index) in name" style="max-height: 655px;overflow: hidden;overflow-y:auto;width: 1000px;overflow-x:hidden;">
			<div class="herad herad3">
				<ul>
					<li>合同编号：<span>{{val.numberID}}</span></li>
					<li>创建日期：<span>{{val.addtime}}</span></li>
				</ul>
			</div>
			<div class="body" v-for="(a,b) in val.cart">
				<div class="name_1">
					<ul>
						<li><img style="margin-left:5px" width="80px" :src="a.titleImage" /></li>
						<li>
							<span>{{a.productName}}</span>
							<br />
							<span>规格: {{a.model}}</span>
						</li>
					<!-- 	<li>58X100</li> -->
					</ul>
				</div>
				<div>
					<span>{{a.totalPrice}}</span>
				</div>
				<div>
					<span>{{a.name}}</span>
				</div>
				<div>
					<span v-html="msg"></span>
				</div>
				<div>
					<div>
						<div @click="on(val.numberID)" class='buttom'>{{msg}}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 分页 -->
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
		<!-- <分页结束> -->
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
				msgname: '',
				com: false,
				msg: '等待买家收货',
				a: true,
				show: "",
				data: [], //数据存储
				name: [], //数据展示
				datasize: 1, //每页展示 的数量
				dqy: 1, //第几页
				Sum: 0,
				msgs: 0,
				data2: [],
				zongy: []
			}
		},
		methods: {
				search(a){
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
				status: 6,
				teamName:a
			}).then(function(reg) {
				if(reg.body.code == -3) {
					this.data=[]
					this.name=[]
					this.Sum=0
				} else {
					var data = reg.body.content.productList
					this.data = data
					this.name = data.slice(0,this.datasize)
					this.Sum = data.length
				}
			})
			},
			on(numberID) {
					// this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/RemindSellerShipping', {
					// 	numberID:numberID
					// }).then((data)=>{
					// 		alert(data.body.msg)
					// })
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
        if(this.dqy * this.datasize >= this.data.length){
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
		},
		created() {
			this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
				status: 6
			}).then(function(reg) {
				if(reg.body.code == -3) {
					console.log('待收货无数据')
				} else {

					var data = reg.body.content.productList
					this.data = data
					this.name = this.data.slice(0, this.datasize)
					this.Sum = this.data.length
					this.zongy = []
					for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
						this.zongy.push(n)
					}

				}
				//	var data = reg.body.content.productList
			})
		}
	}
</script>

<style>
	.buttom {
		width: 120px;
		height: 31px;
		border: none;
	/*	background-color: #fe4d3c;*/
		/*color: ;*/
		line-height: 31px;
		cursor: pointer;
		margin: 10px auto;
	}
</style>