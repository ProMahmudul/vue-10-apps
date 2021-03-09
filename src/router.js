import { createRouter, createWebHistory } from 'vue-router';
import DcHeroes from './pages/DcHeroes';
import Calender from './pages/Calender';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReuseableModal from './pages/ReuseableModal';

const routes = [
     { path: '/', component: Home },
     { path: '/dc-heros', component: DcHeroes },
     { path: '/calender', component: Calender },
     { path: '/markdown', component: Markdown },
     { path: '/slider-carousel', component: Slider },
     { path: '/calculator', component: Calculator },
     { path: '/reuseable-modal', component: ReuseableModal }
]

const router = createRouter({
     history: createWebHistory(),
     routes,
});

export default router;