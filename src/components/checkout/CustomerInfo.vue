<template>
    <div class="col-ms-12">
        <div class="col-md-6 col-sm-6 col-ms-12">
            <div class="check-billing">
                <form class="form-my-account">
                    <h2 class="title18">Billing Details</h2>
                    <p class="clearfix box-col2">
                        <input type="text" value="First Name *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                        <input type="text" value="last name *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                    </p>
                    <p><input type="text" value="Company Name" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" /></p>
                    <p class="clearfix box-col2">
                        <input type="text" value="Email *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                        <input type="text" value="phone *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                    </p>
                    <p>
                        <select name="country" id="country">
                            <option value="">Country*</option>
                            <option value="">United State</option>
                            <option value="">England</option>
                            <option value="">Germany</option>
                            <option value="">France</option>
                        </select>
                    </p>
                    <p><input type="text" value="Address *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" /></p>
                    <p class="clearfix box-col2">
                        <input type="text" value="Postcode / Zip" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                        <input type="text" value="Town / City *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                    </p>
                    <p>
                        <input type="checkbox"  id="remember" /> <label for="remember">Create an account?</label>
                    </p>
                </form>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-ms-12">
            <div class="check-address">
                <form class="form-my-account">
                    <p class="ship-address">
                        <input type="checkbox"  id="address" /> <label for="address">Ship to a different address?</label>
                    </p>
                    <p>
                        <textarea cols="30" rows="10" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''">Order Notes</textarea>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["clickedNext", "currentStep"],
  mounted() {
      this.$emit('can-continue', {value: true});
  }
};
</script>

<style>

</style>
