import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import Detail from './pages/Detail.vue'
import Cart from './pages/Cart.vue'
import Checkout from './pages/Checkout.vue'
import Compare from './pages/Compare.vue'
import WishList from './pages/WishList.vue'
import Profile from './pages/Profile.vue'
import Account from './pages/Account.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/category', component: Category},
    {path: '/detail', component: Detail},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout},
    {path: '/compare', component: Compare},
    {path: '/wishlist', component: WishList},
    {path: '/profile', component: Profile},
    {path: '/account', component: Account},
]
