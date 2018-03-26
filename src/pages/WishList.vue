<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-wish-list></app-wish-list>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import WishList from './../components/wishlist/WishList.vue'

    export default {
        components: {
            'app-wish-list': WishList
        }
    }
</script>
