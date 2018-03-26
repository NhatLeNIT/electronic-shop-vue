<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-compare></app-compare>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Compare from './../components/compare/Compare.vue'

    export default {
        components: {
            'app-compare': Compare
        }
    }

</script>
