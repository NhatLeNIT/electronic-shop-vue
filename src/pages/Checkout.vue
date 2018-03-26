<template>
    <div class="wrap">
        <app-header></app-header>
        <div class="content">
            <div class="content-page woocommerce">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="title-shop-page">checkout</h2>
                            <horizontal-stepper :top-buttons="true" :steps="checkoutStep" @completed-step="completeStep"
                                                @active-step="isStepActive" @stepper-finished="alert"
                            >
                            </horizontal-stepper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import HorizontalStepper from "vue-stepper";

import CustomerInfo from './../components/checkout/CustomerInfo.vue'
import OrderReview from './../components/checkout/OrderReview.vue'
import Payment from './../components/checkout/Payment.vue'

export default {
  components: {
    "horizontal-stepper": HorizontalStepper,
  },
  data() {
    return {
      checkoutStep: [
        {
          icon: "assignment_ind",
          name: "first",
          title: "Information",
          component: CustomerInfo,
          completed: false
        },
        {
          icon: "shopping_cart",
          name: "second",
          title: "Order Review",
          component: OrderReview,
          completed: false
        },
        {
          icon: "payment",
          name: "third",
          title: "Payment",
          component: Payment,
          completed: false
        }
      ]
    };
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
        this.demoSteps.forEach((step) => {
            if (step.name === payload.name) {
                step.completed = true;
            }
        })
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
        this.demoSteps.forEach((step) => {
            if (step.name === payload.name) {
                if(step.completed === true) {
                    step.completed = false;
                }
            }
        })
    },
  }
};
</script>
