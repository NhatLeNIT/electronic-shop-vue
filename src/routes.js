import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import Detail from './pages/Detail.vue'
import Cart from './pages/Cart.vue'
import Checkout from './pages/Checkout.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/category', component: Category},
    {path: '/detail', component: Detail},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout}
]
