import Home from "../page/tab/home/index.vue";
import Login from "../page/login/index.vue";
import Social from "../page/tab/social/index.vue";
import User from "../page/tab/user/index.vue";
import Tab from "../page/tab/index.vue";
import Create from "../page/create/index.vue"
export const routes = [

    {
        path: '',
        component: Tab,
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'social',
                name: 'social',
                component: Social
            },
            {
                path: 'user',
                name: 'user',
                component: User
            }
        ],

    },
    {
        path: '/update',
        component: Create,
        name: 'update'

    }
]