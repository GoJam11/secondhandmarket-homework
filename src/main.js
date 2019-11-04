import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Mine from './components/Mine'
import Detail from './components/Detail'
import MyGoods from './components/MyGoods'
import toast from 'veui/plugins/toast'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(toast)

const router=new VueRouter({
 routes:[{
   path:'/',component:Home
 },
{
  path:'/mine',component:Mine
},
{
  path:'/detail',component:Detail
},
{
  path:'/myGoods',component:MyGoods
}] 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
