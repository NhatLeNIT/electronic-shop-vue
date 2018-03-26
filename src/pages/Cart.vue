<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-cart></app-cart>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Cart from './../components/cart/Cart.vue'

    export default {
        components: {
            'app-cart': Cart
        }
    }

</script>
