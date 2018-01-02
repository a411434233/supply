import Login from './components/login.vue'
import module from './page/module.vue'
import login from './page/login.vue'
import page404 from './page/404.vue'
import info from './page/info/info.vue'
import sales from './page/goods/sales.vue'
import publish from './page/goods/publish.vue'
import unshelf from './page/goods/unshelf.vue'
import shelf from './page/goods/shelf .vue'
import bargain from "./page/trade/bargain.vue"
import sold from './page/trade/sold.vue'
import hello from './components/Hello.vue'
import shop from './components/shop.vue'
import shop1 from './components/shop1.vue'
import dpzxx from './components/dianpu/dpzx.vue'
import kf from './components/nav.vue'
import test3 from './components/tanc/test3.vue'
import supply from './page/supply.vue'

export default [{
		path: '/login',
		component: Login
	},
	{
		path: '/',
		component: module,
		redirect: "/supply",
		children: [
			{ path: "supply", component: supply },
			{ path: "info", component: info },
			{ path: "publish", component: publish },
			{ path: "sales", component: sales },
			{ path: "unshelf", component: unshelf },
			{ path: "shelf", component: shelf },
			{ path: "sold", component: sold },
			{ path: "bargain", component: bargain },
			{ path: "dpxz", component: dpzxx },
		]
	},
]