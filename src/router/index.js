import {createRouter , createWebHistory} from 'vue-router'

import Vuejs from '../components/Vuejs.vue'
import Laravel from '../components/Laravel.vue'
import 'tw-elements';

const routes = [

    { path :'/', name :'Vue', component:Vuejs},
    { path :'/laravel', name :'Laravel', component:Laravel}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router ;