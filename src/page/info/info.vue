<template>
	<!-- 左侧导航 -->
	<div class="module">
		<div class="main-content-box">
			<div class="info-box">
				<p class="jigou">机构信息</p>
				<el-row :gutter="10">
					<el-col :span="12" style="border-right:1px solid #c8cfda;margin-top:20px;">
						<div class="jigou-left">
							<p class="jigou-left-txt">企业名称 : {{infoList.sellerName}}</p>
							<p class="jigou-left-txt">公司地址 : {{infoList.address}}</p>
							<p class="jigou-left-txt">营业执照注册号 : {{infoList.certificateNum}}</p>
							<p class="jigou-left-txt">开户名称 : {{infoList.sellerName}}</p>
							<p class="jigou-left-txt">开户银行 : {{infoList.bankName}}</p>
							<p class="jigou-left-txt">对公账号 : {{infoList.bankCardNum}}</p>
							<p class="jigou-left-txt">开户地址 : {{infoList.areaname}}</p>
						</div>
						<div class="jigou-left-ying">
							<img :src="infoList.certificate" height="250" width="250" style="cursor:pointer;" @click="lookBig" v-if="showBig">
							<div style="position: absolute;width: 800px;height: 600px;" v-drag v-if="!showBig">
								<span style="font-size: 30px;color: red;cursor: pointer;position: absolute; z-index: 100;left: 0px;top: 0;" @click="lookBig" v-if="!showBig">X</span>
								<img :src="infoList.certificate"    style="cursor:pointer; position: absolute;left:0px;max-width:800px;">
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="jigou-left">
							<p class="jigou-left-txt">联系人 : {{infoList.contactName}}</p>
							<p class="jigou-left-txt">联系人身份证号 : {{infoList.contactNum}}</p>
							<p class="jigou-left-txt">联系人手机号码 : {{infoList.contactMobile}}</p>
						</div>
						<div class="jigou-left-shen">
							<img :src="infoList.certificate" height="160" width="320" style="cursor:pointer;" @click="lookBig2" v-if="showBig2">
							<img :src="infoList.certificate" height="160" width="320" style="cursor:pointer;" @click="lookBig3" v-if="showBig3">
							<img v-drag :src="infoList.certificate" v-if="!showBig3" @click="lookBig3" style="cursor:pointer; position: absolute;right:0px;max-width:800px;">
							<img v-drag :src="infoList.certificate" v-if="!showBig2" @click="lookBig2" style="cursor:pointer; position: absolute;right:0px;max-width:800px;">
						</div>
					</el-col>

				</el-row>
			</div>
		</div>
	</div>

</template>
<script>
	import store from '../../store.js'
	export default {
		name: 'module',
		data: function() {
			return {
				showBig: true,
				showBig2: true,
				showBig3: true,
				topList: ['全部消息', '未读消息', '已读消息'],
				infoList: [],
			}
		},
		directives: {
			drag(el, bindings) {
				el.onmousedown = function(e) {
					var disx = e.pageX - el.offsetLeft;
					var disy = e.pageY - el.offsetTop;
					document.onmousemove = function(e) {
						el.style.left = e.pageX - disx + 'px';
						el.style.top = e.pageY - disy + 'px';
					}
					document.onmouseup = function() {
						document.onmousemove = document.onmouseup = null;
					}
				}
			}
		},
		created: function() {
			this.getData();
		},
		methods: {
			lookBig() {
				this.showBig = !this.showBig;
			},
			lookBig2() {
				this.showBig2 = !this.showBig2;
			},
			lookBig3() {
				this.showBig3 = !this.showBig3;
			},

			getData: function() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/getSellerMsg").then(
					function(response) {
						var data = response.body;
						this.infoList = data.content.userInfo;
						console.log(data);
					},
					function(erro) {}
				);
			},
		}
	}
</script>
<style scoped>
	.info-box {
		width: 100%;
		height: auto;
		border: 1px solid #c8cfda;
		padding-bottom: 100px;
	}
	
	.bigImg {
		position: absolute;
		top: -80px;
		left: -690px;
	}
	
	.jigou-left-txt {
		font-size: 16px;
		color: #757575;
		line-height: 50px;
	}
	
	.jigou {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		padding-left: 25px;
		background: #f4f6f8;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.jigou-left {
		padding-top: 20px;
		padding-left: 25px;
		float: left;
	}
	
	.jigou-left-ying {
		float: right;
		width: 250px;
		height: 250px;
		padding-right: 50px;
	}
	
	.jigou-left-shen {
		float: right;
		width: 320px;
		height: 160px;
		padding-right: 50px;
	}
</style>