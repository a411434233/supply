
<template>
		<div>
			<transition name='bounce'>
		<div  class="aaaa" v-show="com">
			{{msgname}}
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
				com:false,
				msgname:'',
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
		position: fixed;
		top: 50%;
		left: 50%;
		width: 250px; 
		height: 100px;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 10px;
		color: white;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		transition: all 1s linear; 
	}
</style>