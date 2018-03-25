<template>
    <div class="woocommerce-checkout-review-order" id="order_review">
        <div class="woocommerce-checkout-payment" id="payment">
            <ul class="payment_methods methods list-none">
                <li class="payment_method_bacs">
                    <input type="radio" data-order_button_text="" value="bacs" name="payment_method" class="input-radio" id="payment_method_bacs" checked="checked">
                    <label for="payment_method_bacs">Direct Bank Transfer 	</label>
                    <div style="" class="payment_box payment_method_bacs">
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </div>
                </li>
                <li class="payment_method_cheque">
                    <input type="radio" data-order_button_text="" value="cheque" name="payment_method" class="input-radio" id="payment_method_cheque">
                    <label for="payment_method_cheque">Cheque Payment 	</label>
                        <div style="display:none;" class="payment_box payment_method_cheque">
                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                </li>
                <li class="payment_method_cod">
                    <input type="radio" data-order_button_text="" value="cod" name="payment_method" class="input-radio" id="payment_method_cod">
                    <label for="payment_method_cod">Cash on Delivery 	</label>
                    <div style="display:none;" class="payment_box payment_method_cod">
                        <p>Pay with cash upon delivery.</p>
                    </div>
                </li>
                <li class="payment_method_paypal">
                    <input type="radio" data-order_button_text="Proceed to PayPal" value="paypal" name="payment_method" class="input-radio" id="payment_method_paypal">
                    <label for="payment_method_paypal">
                        PayPal <img alt="PayPal Acceptance Mark" src="./../../assets/images/shop/payment.png"><a title="What is PayPal?" onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;" class="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                    </label>
                    <div style="display:none;" class="payment_box payment_method_paypal">
                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                    </div>
                </li>
            </ul>
            <div class="form-row place-order">
                <input type="submit" data-value="Place order" value="Place order" id="place_order" name="woocommerce_checkout_place_order" class="button alt">
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
