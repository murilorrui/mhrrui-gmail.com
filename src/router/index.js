import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../modules/login/login.vue';
import Dashboard from '../modules/dashboard/dashboard.vue';
import Home from '../modules/dashboard/views/home/home.vue';
import Users from '../modules/dashboard/views/users/users.vue';
import NewUser from '../modules/dashboard/views/users/new-user/new-user.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: 'Lessons',
        },
        component: Home,
      },
      {
        path: '/users',
        name: 'users',
        meta: {
          title: 'Usuários',
        },
        component: Users,
      },
      {
        path: '/new-user',
        name: 'new-user',
        meta: {
          title: 'New User',
        },
        component: NewUser,
      },
      {
        path: '/edit-user/:id',
        name: 'edit-user',
        meta: {
          title: 'New User',
        },
        component: NewUser,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
