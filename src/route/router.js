import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

import login  from '../views/login.vue';

import regist  from '../views/regist.vue';

import Home from '../views/Home.vue'

import Message from '../views/Message.vue'

import MyMessage from "../views/MyMessage";


const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/',redirect:'login'},
    {path:'/Home',name:'Home',component:Home},
    {path:'/login',name:'login',component:login},
    {path:"/regist",name:'regist',component:regist},
    {path:"/Message",name:'Message',component:Message},
    {path:"/MyMessage",name:'MyMessage',component:MyMessage},

]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router