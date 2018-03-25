<template>
    <div class="woocommerce-checkout-review-order col-md-12" id="order_review">
        <div class="table-responsive">
            <table class="shop_table woocommerce-checkout-review-order-table">
                <thead>
                    <tr>
                        <th class="product-name">Product</th>
                        <th class="product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="cart_item">
                        <td class="product-name">
                            Luphen Caunoiteng kug&nbsp; <span class="product-quantity">× 1</span>
                        </td>
                        <td class="product-total">
                            <span class="amount">$68.00</span>
                        </td>
                    </tr>
                    <tr class="cart_item">
                        <td class="product-name">
                            Cooc Huyinh Phale&nbsp;	<span class="product-quantity">× 2</span>
                        </td>
                        <td class="product-total">
                            <span class="amount">$38.00</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="cart-subtotal">
                        <th>Subtotal</th>
                        <td><strong class="amount">$106.00</strong></td>
                    </tr>
                    <tr class="shipping">
                        <th>Shipping</th>
                        <td>
                            <ul id="shipping_method" class="list-none">
                                <li>
                                    <input type="radio" class="shipping_method" checked="checked" value="free_shipping" id="shipping_method_0_free_shipping" data-index="0" name="shipping_method[0]">
                                    <label for="shipping_method_0_free_shipping">Free Shipping</label>
                                </li>
                                <li>
                                    <input type="radio" class="shipping_method" value="local_delivery" id="shipping_method_0_local_delivery" data-index="0" name="shipping_method[0]">
                                    <label for="shipping_method_0_local_delivery">Local Delivery (Free)</label>
                                </li>
                                <li>
                                    <input type="radio" class="shipping_method" value="local_pickup" id="shipping_method_0_local_pickup" data-index="0" name="shipping_method[0]">
                                    <label for="shipping_method_0_local_pickup">Local Pickup (Free)</label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="order-total">
                        <th>Total</th>
                        <td><strong><span class="amount">$106.00</span></strong> </td>
                    </tr>
                </tfoot>
            </table>
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
