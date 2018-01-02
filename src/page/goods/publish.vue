<template>
	<!-- 左侧导航 -->
	<div class="mo" style="position:relative;">
		<div class="main-content-box" style="overflow-x:hidden;">
			<div class="publish-content">
				<div class="publish-top">
					<p class="publish-title">1 商品基本信息</p>
					<div class="publish-input">
						<div class="publish-input-item">
							<span class="item-left">产品名称 : </span>
							<input type="text" class="long" v-model="product.name">
							<span class="publish-star">*</span>
							<span class="publish-notice">( 最多输入20个字 )</span>
						</div>
						<div class="publish-input-item" v-if="!this.$route.query.productID">
							<span class="item-left">商品分类 : </span>
							<select class="short" style="height:32px;" v-model="typeID" @change="getSeType">
								<option v-for="item in typeList" :value="item.catID">{{item.catName}}</option>
							</select>
							<span class="item-left">商品品目 : </span>
							<select class="short" style="height:32px;" v-model="product.catalogID">
								<option v-for="item in seType" :value="item.catID">{{item.catName}}</option>
							</select>
							<span class="publish-star">*</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">产品型号 : </span>
							<input type="text" name="" class="long" v-model="product.model">
							<span class="publish-star">*</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">单价 : </span>
							<input type="text" name="" class="long" v-model="product.price">
							<span class="publish-star">*</span>
							<span class="publish-notice">( 最高售价,后期调整价格时不可高于最高售价 )</span>
						</div>
						<div class="publish-input-item" style="position:relative;margin-top:30px;">
							<span class="item-left">类别 : </span>
							<input type="text" name="" class="long" v-model="product.class" @focus="testAdd" @input="testMask">
							<div class="maskCuntry" v-if="showCo">
								<ul>
									<li v-for="item in countryList" @click="addClass(item.name)">{{item.name}}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="publish-middle">
					<p class="publish-title">2 商品属性详情</p>
					<div class="publish-input">
						<div class="publish-input-item">
							<span class="item-left">商品品牌 : </span>
							<input type="text" name="" class="long" v-model="product.brandName">
							<span class="publish-star">*</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">商品编号 : </span>
							<input type="text" name="" class="long" v-model="product.number">
							<span class="publish-star">*</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">商品产地 : </span>
							<input type="text" name="" class="long" v-model="product.origin">
							<span class="publish-star">*</span>
							<span class="publish-notice">( 例如: 中国杭州 )</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">制造商 : </span>
							<input type="text" name="" class="long" v-model="product.manufacturer">
							<span class="publish-star">*</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">重量 : </span>
							<input type="text" name="" class="long" v-model="product.weight">
							<span class="publish-star">*</span>
							<span class="publish-notice">( 例如: 5kg, 5g )</span>
						</div>
						<div class="publish-input-item">
							<span class="item-left">质保时间 : </span>
							<input type="text" name="" class="long" v-model="product.quality">
							<span class="publish-star">*</span>
							<span class="publish-notice">( 例如: 2014-2017 )</span>
						</div>
					</div>
				</div>
				<div class="publish-middle-bottom" style="position:relative;margin-top:-20px; ">
					<div class="publish-pro">
						<span class="publish-pro-txt">自定义属性</span>
						<button @click="showAddPro" class="publish-btn">+ 新增属性</button>

					</div>
					<div style="margin: 5px 35px;" v-for="(val,index) in product.parameterList">
						<input type="text" style="width: 80px;height: 28px;" placeholder="属性名" v-model="product.parameterList[index].name" />：
						<input type="text" style="width: 350px;height: 28px;" placeholder="属性值" v-model="product.parameterList[index].name1" />
						<span style="color: red;cursor: pointer;" @click="dele(index)"> 删除</span>
					</div>

				</div>

				<div class="publish-img-info" style="clear:both;">
					<p class="publish-title">3 商品图片信息</p>
					<div class="publish-info">
						<span class="info-title">商品图片</span>
						<el-upload name="file" :action="uploadURL" :on-success="handleSuccess" list-type="picture" :show-file-list="false">
							<img src="../../assets/supply/上传图片.png" height="31" width="156">
						</el-upload>
						<p class="info-content" style="margin-top:5px;">宝贝主图大小不能超过512kb ;</p>
						<p class="info-content">推荐上传800*800的白底图片 ;</p>
						<p class="info-content">最多上传5张图片, 最少不少于3张图片 ;</p>
					</div>
					<ul class="publish-info-ul" v-if="showUl">
						<li v-for="(item,index) in  product.titleImage" style="position:relative;"><span style="color:red;">*</span>主图<img :src="item" style="width:100px;height:100px;"><button class="deImg" @click="handleDelet(index)">删除</button></li>
					</ul>
				</div>
				<div class="publish-bottom">
					<div class="publish-bottom-top">
						<el-upload name="file" :action="uploadURL" :on-remove="handleRemove1" :file-list="imgs" :on-success="handleDetailSuccess1" list-type="picture" :show-file-list=showPic1>
							<img src="../../assets/supply/添加图片.png" height="31" width="156" class="publish-bottom-img"><br />
						</el-upload>
						<p class="notice-txt">操作使用说明书</p>
					</div>
					<div class="publish-bottom-top">
						<el-upload name="file" :action="uploadURL" :on-remove="handleRemove2" :file-list="imgs1" :on-success="handleDetailSuccess2" list-type="picture" :show-file-list=showPic2>
							<img src="../../assets/supply/添加图片.png" height="31" width="156" class="publish-bottom-img"><br />
						</el-upload>
						<p class="notice-txt">维护保养注意事项</p>
					</div>
					<div class="publish-bottom-top">
						<el-upload name="file" :action="uploadURL" :on-remove="handleRemove3" :file-list="imgs2" :on-success="handleDetailSuccess3" list-type="picture" :show-file-list=showPic3>
							<img src="../../assets/supply/添加图片.png" height="31" width="156" class="publish-bottom-img"><br />
						</el-upload>
						<p class="notice-txt">商品简介</p>
					</div>
				</div>
				<div class="publish-bottom">
					<p class="publish-title" style="margin-left:100px;">上传3C认证</p>
					<div class="publish-bottom-top">
						<el-upload name="file" :action="uploadURLAll" :on-remove="handleRemove4" :file-list="imgs3" :on-success="handle3CSuccess" list-type="picture" :show-file-list=showPic4>
							<img src="../../assets/supply/添加图片.png" height="31" width="156" class="publish-bottom-img"><br />
						</el-upload>
						<p class="notice-txt">请上传3C认证 !</p>
					</div>
				</div>
			</div>
			<div class="bao" v-if="!this.$route.query.productID"><img src="../../assets/supply/保存.png" @click="handleSubmit"></div>
			<div class="bao" v-if="this.$route.query.productID" style=""><img src="../../assets/supply/保存.png" @click="handleUpdate"></div>
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
		name: 'mo',
		data: function() {
			return {
				com: false,
				msgname: '',
				status: "",
				checkMssg: '',
				showPic2: false,
				showPic1: false,
				showPic3: false,
				showPic4: false,
				sellerID: '',
				nameUrl: '',
				logo: require('../../assets/supply/我的---副本_复制.png'),
				showCo: false,
				workInfo: {
					name: '',
				},
				countryList: [],
				name: '',
				name1: '',
				arrPro: [],
				showPro: false,
				arr: [{
					name: "",
					name1: ""
				}],
				showUl: false,
				imgs: [],
				imgs1: [],
				imgs2: [],
				imgs3: [],
				parameter: [],
				basicsList: [],
				uploadURL: store.state.config.apiUrlRoot + 'show/Merchant/upload',
				uploadURLAll: store.state.config.apiUrlRoot + 'show/Merchant/uploadAll',
				typeID: "",
				typeList: [], //一级分类列表
				seType: [], //二级分类列表
				product: {
					number: '',
					quality: '',
					weight: '',
					catalogID: "",
					brandName: '',
					name: '',
					model: '',
					manufacturer: '',
					origin: '',
					class: "",
					price: '',
					details: [],
					titleImage: [],
					parameterList: [],
					approve: '',
				},
				isCheck: true,
				topList: ['全部消息', '未读消息', '已读消息'],
				infoList: [],
				showBg: 0,
				headerFixed: true
			}
		},
		created: function() {
			this.getTypeList();
			this.getWork();
			this.getCountryList();
			var a = document.URL
			if(a.search(/productID/) != -1) {
				this.getData();
			} else {
				this.product = {
					number: '',
					quality: '',
					weight: '',
					catalogID: "",
					brandName: '',
					name: '',
					model: '',
					manufacturer: '',
					origin: '',
					class: "",
					price: '',
					details: [],
					titleImage: [],
					parameterList: [

					],
					approve: '',
				};
			}

			this.getInfo();
		},
		methods: {
			dele(index) {
				this.product.parameterList.splice(index, 1)
			},
			getInfo() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/getSellerMsg").then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.sellerID = data.content.userInfo.sellerID;
							if(data.content.userInfo.logo.length > 0) {
								this.logo = data.content.userInfo.logo;
							}
						}

					},
					function(erro) {}
				);
			},
			testAdd() {
				this.showCo = true;
			},
			testMask() {
				this.showCo = false;
			},
			addClass(name) {
				this.product.class = name;
				this.showCo = false;
			},
			getCountryList() {
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/getCountryList").then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.countryList = data.content;
						} else {
							this.countryList = [];
						}
					},
					function(erro) {}
				);
			},
			showAddPro() {

				this.product.parameterList.push({ name: '', name1: '' })
			},
			closePro() {
				this.showPro = false;
			},
			deletPro(index) {
				this.product.parameterList.splice(index, 1);
			},
			handleDelet(index) {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/deleteImage", {
					imageName: this.product.titleImage[index]
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							// this.infoList.certificate="";
							// this.showYing=true
							this.product.titleImage.splice(index, 1);
						} else {
							that.$message.error(data.msg);
							return;
						}
					},
				)
			},
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/workIndex").then(
					function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.status = data.content.data.status;
							this.workInfo = data.content.data;
						}
						console.log(this.workInfo);
						console.log(this.status);
					},
				);
			},
			Join() {
				// this.product.parameterList= this.arr1.concat(this.arr2,this.arr3,this.arr4);
				console.log(this.product.parameterList);
			},
			handleSuccess(response, file, fileList) {
				console.log(response);
				if(response.code != 1) {
					this.$message({
						showClose: true,
						message: response.msg,
						type: 'error'
					});
				} else {
					this.showUl = true;
					this.product.titleImage.push(response.content);
				}
			},
			handleDetailSuccess1(response, file, fileList) {
				if(response.code != 1) {
					this.$message({
						showClose: true,
						message: response.msg,
						type: 'error'
					});
					fileList.pop();
				} else {
					this.product.details.push(response.content);
					this.showPic1 = true;
				}
				console.log(fileList);
			},
			handleDetailSuccess2(response, file, fileList) {
				if(response.code != 1) {
					this.$message({
						showClose: true,
						message: response.msg,
						type: 'error'
					});
					fileList.pop();
				} else {
					this.product.details.push(response.content);
					this.showPic2 = true;
				}
			},
			handleDetailSuccess3(response, file, fileList) {
				if(response.code != 1) {
					this.$message({
						showClose: true,
						message: response.msg,
						type: 'error'
					});
					fileList.pop();
				} else {
					this.product.details.push(response.content);
					this.showPic3 = true;
				}
			},
			handle3CSuccess(response, file, fileList) {
				if(response.code != 1) {
					this.$message({
						showClose: true,
						message: response.msg,
						type: 'error'
					});
					fileList.pop();
				} else {
					this.product.approve = response.content;
					this.showPic4 = true;
				}
			},
			handleRemove1(file, fileList) {
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/deleteImage", {
					imageName: this.product.details[0]
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.showPic1 = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			handleRemove2(file, fileList) {
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/deleteImage", {
					imageName: this.product.details[1]
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.showPic2 = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			handleRemove3(file, fileList) {
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/deleteImage", {
					imageName: this.product.details[2]
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.showPic3 = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			handleRemove4(file, fileList) {
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/deleteImage", {
					imageName: this.product.approve
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.showPic4 = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			getTypeList() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/merchant/getCatList", {
					parentID: 0
				}).then(
					function(response) {
						var data = response.body;
						if(data.code != 1) {
							this.typeList = [];
						}
						this.typeList = data.content.catList;
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			getSeTypeList() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/merchant/getCatList", {
					parentID: this.typeID
				}).then(
					function(response) {
						var data = response.body;
						if(data.code != 1) {
							this.seType = [];
						}
						this.seType = data.content.catList;
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			getSeType() {
				this.getSeTypeList();
			},
			getData: function() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/product/getUpProductMsg", {
					productID: this.$route.query.productID
				}).then(
					function(response) {
						var arr = []
						var data = response.body;
						this.product = data.content;
						this.checkMssg = data.content.checkMsg;
						this.showPic2 = true;
						this.showPic1 = true;
						this.showPic3 = true;
						this.showPic4 = true;
						this.showUl = true;
						data.content.details.forEach(function(item) {
							arr.push({
								url: item
							});
						});
						this.imgs = arr.slice(0, 1);
						this.imgs1 = arr.slice(1, 2);
						this.imgs2 = arr.slice(2, 3);
						this.imgs3.push({
							url: data.content.approve
						});
						console.log(this.imgs3);
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			handleUpdate() {
				console.log(this.product);
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/product/updateProduct", this.product).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.$router.push({
								path: 'unshelf'
							});
						} else {
							that.$message.error(data.msg);
							return;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			handleSubmit() {
				console.log(this.product);
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "show/Merchant/addProduct", this.product).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							this.$router.push({
								path: 'unshelf'
							});
						} else {
							that.$message.error(data.msg);
							return;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
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
				console.log(this.product.class);
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
	.testPro {
		position: absolute;
		height: 400px;
		width: 500px;
		right: 200px;
		top: -30px;
		background: pink;
	}
	
	.publish-content {
		margin-left: 200px;
	}
	
	.MaskPro {
		padding-left: 20px;
		height: 200px;
		width: 360px;
		background: rgb(242, 242, 242);
		float: right;
		position: absolute;
		right: 200px;
		top: -30px;
	}
	
	.hhh {
		position: absolute;
		right: 10px;
		cursor: pointer;
	}
	
	.MaskPro button {
		padding: 2px;
		margin-top: 15px;
	}
	
	.MaskPro p {
		height: 40px;
		font-size: 14px;
		line-height: 40px;
	}
	
	.deImg {
		cursor: pointer;
		position: absolute;
		left: 33%;
		bottom: -35px;
	}
	
	.publish-btn {
		margin-left: 20px;
		height: 30px;
		width: 100px;
		border: none;
		cursor: pointer;
		margin-top: 10px;
	}
	
	.bao img {
		margin-top: 20px;
		cursor: pointer;
	}
	
	.bao {
		position: absolute;
		left: -230px;
		margin-top: 50px;
		width: 1900px;
		height: 87px;
		border-top: 1px solid #bdbdbd;
		text-align: center;
		margin-bottom: 20px;
	}
	
	.notice-txt {
		height: 50px;
		line-height: 40px;
		font-size: 14px;
	}
	
	.imgMiddle {
		width: 100%;
		height: 298px;
	}
	
	.imgMiddle-txt {
		padding-left: 20px;
		width: 130px;
		height: 40px;
		line-height: 40px;
		float: left;
		margin-right: 20px;
	}
	
	.mi-txt {
		width: 751px;
		height: 298px;
		float: left;
	}
	
	.mi-txt textarea {
		width: 741px;
		height: 288px;
		padding-left: 10px;
		padding-top: 10px;
	}
	
	.publish-bottom-top {
		/*   height: 490px;*/
		width: 935px;
		padding: 20px;
		margin-left: 100px;
	}
	
	.publish-info-ul {
		padding-left: 100px;
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.publish-info-ul li {
		width: 100px;
		height: 100px;
		border: 1px dashed #bdbdbd;
		margin-right: 12px;
		line-height: 100px;
		text-align: center;
		float: left;
		position: relative;
	}
	
	.publish-info-ul img {
		width: 100px;
		height: 100px;
		position: absolute;
		left: 0px;
		top: 0;
	}
	
	.info-content {
		color: #757575;
		padding-left: 87px;
		width: 300px;
		height: 32px;
		line-height: 32px;
	}
	
	.info-title {
		height: 31px;
		display: block;
		float: left;
		line-height: 31px;
		margin-right: 20px;
	}
	
	.publish-info {
		width: 410px;
		height: 158px;
		margin-top: 30px;
		padding-left: 40px;
	}
	
	.pro-clear {
		font-size: 14px;
		color: #a3a3a3;
		margin-left: 10px;
		cursor: pointer;
	}
	
	.dot {
		color: #000000;
		font-size: 18px;
		display: inline-block;
		margin-left: 5px;
		margin-right: 5px;
	}
	
	.publish-pro-box {
		padding-left: 20px;
		/*height: 24px;*/
		/*  margin-bottom: 1px;*/
		width: 800px;
		font-size: 14px;
		line-height: 24px;
		margin-bottom: 5px;
		float: left;
	}
	
	.pro-de {
		margin-right: 15px;
		padding: 2px;
		background: #ffffff;
		border: none;
		cursor: pointer;
	}
	
	.pro-short {
		height: 27px;
		padding-left: 5px;
		width: 140px;
	}
	
	.pro-long {
		width: 390px;
		height: 27px;
		padding-left: 5px;
	}
	
	.publish-pro-short {
		height: 40px;
		line-height: 40px;
		color: #757575;
		padding-left: 20px;
	}
	
	.publish-pro-txt {
		width: 120px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #2874da;
		text-align: center;
	}
	
	.publish-pro {
		/*position: relative;*/
		width: 661px;
		height: auto;
		margin-left: 45px;
		/*overflow-x: hidden;
		overflow-y: hidden;*/
	}
	
	.publish-middle-bottom {
		width: 100%;
		height: auto;
		margin-top: 25px;
		background: #ffffff;
		padding-bottom: 25px;
	}
	
	.publish-bottom {
		width: 100%;
		/*height: 675px;*/
		height: auto;
		background: #ffffff;
		margin-top: 10px;
	}
	
	.publish-img-info {
		margin-top: 10px;
		height: auto;
		background: #ffffff;
		padding-bottom: 25px;
	}
	
	.publish-middle {
		height: 420px;
		margin-top: 10px;
		width: 100%;
		background: #ffffff;
	}
	
	.publish-radio-left, .publish-radio-right {
		width: 20px;
		height: 20px;
	}
	
	.jin {
		margin-left: 87px;
	}
	
	.publish-radio-left {
		position: absolute;
		top: 5px;
		left: 110px;
		cursor: pointer;
	}
	
	.publish-radio-right {
		position: absolute;
		top: 5px;
		left: 230px;
		cursor: pointer;
	}
	
	.img-txt {
		margin-left: 40px;
	}
	
	.publish-notice {
		color: #757575;
	}
	
	.publish-star {
		font-size: 20px;
		color: red;
		line-height: 20px;
		vertical-align: bottom;
		margin-right: 8px;
		margin-left: 5px;
	}
	
	.long {
		width: 396px;
		height: 27px;
		padding-left: 5px;
	}
	
	.short {
		width: 140px;
		height: 27px;
		padding-left: 5px;
	}
	
	.item-left {
		width: 90px;
		text-align: right;
		display: inline-block;
		margin-right: 10px;
	}
	
	.publish-input {
		width: 900px;
		padding-left: 65px;
		padding-top: 25px;
		font-size: 16px;
	}
	
	.publish-input-item {
		margin-bottom: 25px;
		height: 30px;
		line-height: 30px;
	}
	
	.publish-title {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		font-size: 18px;
	}
	
	.publish-top {
		height: 340px;
		background: #ffffff;
	}
</style>