<template>
    <div class="wrap">
        <app-header></app-header>
        <div id="content">
            <app-account></app-account>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Account from './../components/account/Account.vue'

    export default {
        components: {
            'app-account': Account
        }
    }

</script>
