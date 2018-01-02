<template>
		<div>
			<transition name='bounce'>
		<div  class="aaaa" v-show="com">
				<img src="../../assets/testimg/提示.png"/>
				<div style="position: absolute;">
					{{msgname}}
				</div>
				<img style="position: absolute;left: 20%;top: 70%;" src="../../assets/testimg/前往购物车.png"/>
				<img style="position: absolute;left: 60%;top: 70%;" src="../../assets/testimg/继续逛逛.png"/>
		</div>
	</transition>
		</div>
</template>

<script>
	export default {
		methods:{
			locatio(){
					this.com=true	
				var that=this
				setTimeout(function(){
						that.com=false
					},2000)
			},
		},
		data(){
			return{
				com:true,
				msgname:'产品已加入购物车',
				a:0
			}
		}
		
	}
</script>

<style scoped="scoped">
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter,
	.slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */
	{
		transform: translateX(10px);
		opacity: 0;
	}
	
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
		top: 30%;
		left: 50%;
	
		/*background: rgba(0, 0, 0, 0.7);*/background: white;
		/*border-radius: 10px;*/
		color: black;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		transition: all 1s linear; 
	}
</style>