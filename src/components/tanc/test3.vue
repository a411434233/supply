<template>
		<div >
			<transition name='bounce'>
			<div  class="aaaa" v-show="com" style="position: fixed;" >
				<img src="../../assets/testimg/提示拷贝2.png"/>
				<div style="position: absolute;left: 30%;">
					{{msgname}}
				</div>
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
					setTimeout(function(){
						window.location.reload()
					},2500)
			},
			locatio2(){
					this.com=true	
					var that=this
					setTimeout(function(){
						that.com=false
					},2000)
					
			},
		},
		data(){
			return{
				com:false,
				msgname:'产品已加入购物车',
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