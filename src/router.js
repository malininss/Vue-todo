// Этот нужно импортировать в main.js!

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'

// Регистриурем роутер как плагин:
Vue.use(Router)

// Результат экспотируем
export default new Router({
  mode: 'history', // для того, чтобы были слэши в путях
  routes: [ // Каждый объект представляет из себя новую страницу
    {
      path: '/', // Главная страница
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue') // лэзи лоадинг
    }
  ]
});