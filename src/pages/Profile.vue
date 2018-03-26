<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-profile></app-profile>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Profile from './../components/profile/Profile.vue'

    export default {
        components: {
            'app-profile': Profile
        }
    }

</script>
