<template :sss='show'>
	<div >
              <div v-show="name.length==0" style="color: #c8996b;font-size:25px;margin-top:20px;margin-left:20px;">暂无数据..</div>
		<div v-for="(val,index) in name" style="max-height:655px;overflow-y:auto;overflow-x:hidden;width: 1000px;">
			<div class="herad herad3">
				<ul>
					<li>合同编号：<span>{{val.number}}</span></li>
					<li>创建日期：<span>{{val.addtime}}</span></li>
				</ul>
			</div>

			<div class="body"  v-for="(a,b) in val.cart">
					<div class="name_1">
					<ul style="margin: 0;" >
						<li><img style="margin-left:5px" width="80px" height="80px" :src="a.titleImage" /></li>
						<li style="width: 160px;">
							<span>{{a.productName}}</span>
							<br />
							<span>规格: {{a.model}}</span>
						</li>
						<li style="margin-left: 50px;" class=" text-right">单价:{{a.price}}<br/>数量：{{a.number}}</li>
					</ul>
				</div>
				<div>
					<span>{{a.totalPrice}}</span>
				</div>
				<div>
					<span>{{val.name}}</span>

				</div>
				<div>
					<span>已完成</span>

				</div>
				<div>
					<div><span>{{val.con}}</span>
						<div @click="on(a.productID)" class='buttom'>查看</div>
					</div>
				</div>
			</div>
		</div>
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
		props: ["sss"],
		data() {
			return {
				a: true,
				show: "",
				data: [], //数据存储
				name: [], //数据展示
				datasize: 4, //每页展示 的数量
				dqy: 1, //第几页
				Sum: 0,
				msgs: 0,
				msgs: 0,
				data2: [],
				zongy: [],
				msgname: '',
				com: false,
			}
		},
		methods: {
			search(a){
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
				status: 5,
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
			on(id) {
				alert(1)
				// console.log()
				// this.sss.c = false
				// this.sss.a = false
				// this.sss.b = true
				// console.log(id)
				 window.open('http://duanhui.qianchengwl.cn/#/detail/?wd=' + id);
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
      	getdata(){
				this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getContractProductList', {
				status: 5
			}).then(function(reg) {

				if(reg.body.code==-3){

				}else{
					var data = reg.body.content.productList
					this.data=data
					this.name = data.slice(0,this.datasize)
					this.Sum=data.length
					this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}

				}
			})
			}
		},
		created() {
	                this.getdata();
		}
	}
</script>

<style scoped="scoped">
	.buttom {
		width: 120px;
		height: 31px;
		border: none;
		background-color: white;
		color: black;
		cursor: pointer;
		border: solid 1px #c9c9c9;
		line-height: 31px;
		margin: 10px auto;
	}
</style>