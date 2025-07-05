import {storeToRefs} from 'pinia';
import {userStore} from '~/store/user';

export default defineNuxtRouteMiddleware((to, from) => {
    const storeUser = userStore();
    const {isAuthenticated} = storeToRefs(storeUser);
    if (isAuthenticated.value) return navigateTo('/');
});
