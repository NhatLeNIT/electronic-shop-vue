<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-category></app-category>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Category from './../components/category/Category.vue'

    export default {
        components: {
            'app-category': Category
        }
    }
</script>
