import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/views/Intro.vue'
import Income from '@/views/Income.vue'
import Credit from '@/views/Credit.vue'
import FormEndividamento from '@/views/FormEndividamento.vue'

Vue.use(Router)

const routes = [
    {
        name: 'intro',
        path: '/',
        component: Intro,
    },
    {
        name: 'income',
        path: '/income',
        component: Income,
    },
    {
        name: 'credit',
        path: '/credit',
        component: Credit,
    },
    {
        name: 'form',
        path: '/form',
        component: FormEndividamento,
        children: [
            {        
                path: '/form/income',
                component: Income,
            }
        ]
    }
]

const router = new Router({ routes })

export default router
