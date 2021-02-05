import { createRouter, createWebHistory } from 'vue-router';
import DcHeroes from './pages/DcHeroes';
import Calender from './pages/Calender';
import Home from './pages/Home';
import Markdown from './pages/Markdown';

const routes = [
     { path: '/', component: Home },
     { path: '/dc-heros', component: DcHeroes },
     { path: '/calender', component: Calender },
     { path: '/markdown', component: Markdown }
]

const router = createRouter({
     history: createWebHistory(),
     routes,
});

export default router;