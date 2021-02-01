import { createRouter, createWebHashHistory } from 'vue-router';
import DcHeroes from './components/DcHeroes';
import Calender from './components/Calender';

const routes = [
     { path: '/dc-heros', component: DcHeroes },
     { path: '/calender', component: Calender }
]

const router = createRouter({
     history: createWebHashHistory(),
     routes,
});

export default router;