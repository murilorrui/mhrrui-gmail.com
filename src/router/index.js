import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../modules/login/login.vue';
import Dashboard from '../modules/dashboard/dashboard.vue';
import Home from '../modules/dashboard/views/home/home.vue';
import Users from '../modules/dashboard/views/users/users.vue';
import NewNaturalPerson from '../modules/dashboard/views/users/natural-person/new-natural-person.vue';
import NewLegalPerson from '../modules/dashboard/views/users/legal-person/new-legal-person.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
      },
      {
        path: '/new-natural-person',
        name: 'new-natural-person',
        component: NewNaturalPerson,
      },
      {
        path: '/new-legal-person',
        name: 'new-legal-person',
        component: NewLegalPerson,
      },
      {
        path: '/edit-legal-person/:id',
        name: 'edit-legal-person',
        component: NewLegalPerson,
      },
      {
        path: '/edit-natural-person/:id',
        name: 'edit-natural-person',
        component: NewNaturalPerson,
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
