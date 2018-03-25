import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Detail from './components/Detail.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/category', component: Category},
    {path: '/detail', component: Detail},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout}
]
