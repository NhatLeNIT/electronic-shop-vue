<template>
    <div class="wrap">
        <app-header></app-header>
        <div class="content">
            <app-detail></app-detail>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Detail from './detail/Detail.vue'

    export default {
        components: {
            'app-detail': Detail
        }
    }

</script>
