import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import BreedImages from './components/BreedImages'
import SubBreed from './components/SubBreed'
import ErrorPage from './components/ErrorPage'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path: '/BreedImages/:BreedName',
            name: 'BreedImages',
            component: BreedImages,
            props: true
        },
        {
            path:'/SubBreed/:BreedNameForSearch',
            name:'SubBreed',
            component: SubBreed,
            props: true
        },
        {
            path:'/ErrorPage/:ErrorMsg',
            name:'Error',
            component: ErrorPage,
            props: true
        },
        {
            path:'*',
            name:'Error',
            component: ErrorPage,
            props: true
        }
    ]
}) 