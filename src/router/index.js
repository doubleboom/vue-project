import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Discount from '@/components/Discount';
import TabBar from '@/common/TabBar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home,
      meta: { title: '主页' }
    },
    {
      path: '/discount',
      // name: 'HelloWorld',
      component: Discount,
      meta:{title:'特惠'}
    },
    {
      path: '/about',
      // name: 'HelloWorld',
      component: About,
      meta: { title: '关于' }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
});
