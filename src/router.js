import { createRouter, createWebHistory } from 'vue-router';
import DcHeroes from './pages/DcHeroes';
import Calender from './pages/Calender';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReuseableModal from './pages/ReuseableModal';
import Chat from './pages/Chat';
import store from './store/index';
import UserCrud from './pages/UserCrud';

const routes = [
     { path: '/', component: Home },
     { path: '/dc-heros', component: DcHeroes },
     { path: '/calender', component: Calender },
     { path: '/markdown', component: Markdown },
     { path: '/slider-carousel', component: Slider },
     { path: '/calculator', component: Calculator, meta: { middleware: "auth" } },
     { path: '/reuseable-modal', component: ReuseableModal },
     { path: '/chat', component: Chat, meta: { middleware: "auth" } },
     { path: '/user-crud', component: UserCrud },
]

const router = createRouter({
     history: createWebHistory(),
     routes,
});

router.beforeEach((to, _, next) => {
     if (to.meta.middleware) {
          const middleware = require(`./middleware/${to.meta.middleware}`);
          if (middleware) {
               middleware.default(next, store);
          } else {
               next();
          }
     } else {
          next();
     }
})

export default router;