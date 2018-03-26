<template>
    <div class="content-page woocommerce">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="title-shop-page">My Profile</h2>
                    <div class="my-profile-box register-content-box">
                        <div class="form-my-account">
                            <h3 class="title18 title-change-pasword">Avatar change</h3>
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3 text-center">
                                    <img src="./../../assets/images/blog/large1.jpg" class="img-circle" alt="">
                                </div>
                                <p class="col-sm-12">
                                    <label for="firstname">Avatar</label>
                                    <input type="file" class="form-control">
                                </p>
                            </div>
                            <h3 class="title18 title-change-pasword">Information change</h3>
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <p>
                                        <label for="firstname">First name <span class="required">*</span></label>
                                        <input type="text" name="firstname" />
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <p>
                                        <label for="lastname">Last name <span class="required">*</span></label>
                                        <input type="text" name="lastname" />
                                    </p>
                                </div>
                            </div>
                            <p>
                                <label for="email">Email address <span class="required">*</span></label>
                                <input type="text" name="email" />
                            </p>
                            <h3 class="title18 title-change-pasword">Password change</h3>
                            <p>
                                <label for="current-password">Current password (leave blank to leave unchanged)</label>
                                <input type="text" name="current-password" />
                            </p>
                            <p>
                                <label for="new-password">New password (leave blank to leave unchanged)</label>
                                <input type="text" name="new-password" />
                            </p>
                            <p>
                                <label for="confirm-password">Confirm new password</label>
                                <input type="text" name="confirm-password" />
                            </p>
                            <p>
                                <input type="submit" class="register-button save-change" name="register" value="Save Changes">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Content Page -->
</template>

<script>
export default {

}
</script>

<style>

</style>
