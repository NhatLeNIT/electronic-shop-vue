<template>
    <div class="wrap">
        <app-header></app-header>
        <div class="content">
            <app-home></app-home>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Home from './../components/home/Home.vue'

    export default {
        components: {
            'app-home': Home
        }
    }

</script>
