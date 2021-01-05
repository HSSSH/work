import Vue from 'vue';
import Router from 'vue-router';

//懒加载
const App = () => import(/* webpackChunkName: "group-app"*/'@/App');
// const Index = () => import(/* webpackChunkName: "group-app"*/'@/login/Index');
const NotFound = () => import(/* webpackChunkName: "group-app"*/'@/NotFound');

const MainPage = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage');
const Task = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/Task');
const Department = () => import(/* webpackChunkName: "group-mainPage"*/'@/components/MainPage/Department');

const UserTest = () => import(/* webpackChunkName: "group-controlApp"*/'@/components/UserTest');

import store from '@/store/index';
import { getLoginUser } from '@/api/login'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: { name: 'App' },
    },{
        path: '/app',
        name: 'App',
        component: App,
        // beforeEnter: (to, from, next) => {
        //     getLoginUser().then(data => {
        //         store.dispatch('setLoginUser', data);
        //         next();
        //     }).catch(() => {
        //         next({name: 'Index'});
        //     })
        // },
        redirect: { name: 'MainPage' },
        children: [{
            path: 'mainPage',
            name: 'MainPage',
            component: MainPage,
            redirect: { name: 'Task' },
            children: [{
                path: 'task',
                name: 'Task',
                component: Task
            }, {
                path: 'department',
                name: 'Department',
                component: Department,
            }],
        }]
    },
    // {
    //     path: '/index',
    //     name: 'Index',
    //     component: Index
    // },
    {
		path: '*',
        name: 'NotFound',
        component: NotFound
    },{
        path: '/xxx',
        name: 'UserTest',
        component: UserTest,
    }]
});