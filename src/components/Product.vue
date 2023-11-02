<template>
  <div class="col-12 sm:col-6 lg:col-4 xl:col-3 p-2">
    <div class="product-card">
      <div class="p-4 border-1 surface-border surface-card border-round content flex flex-column">
        <div class="flex flex-wrap align-items-center mb-2 gap-2">
          <i class="pi pi-tag"></i>
          <span class="font-semibold">{{ product.category }}</span>
        </div>
        <div class="flex flex-grow-1 justify-content-center mb-2 align-items-center">
          <img style="height: 200px; width: auto; max-width: 70%; object-fit: contain;" class="border-round" :src="`${product.image}`" :alt="'alt'" />
        </div>
        <div class="flex justify-content-center mb-3">
          <div class="text-1xl">{{ product.title }}</div>
          <!--              <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>-->
        </div>
        <div class="flex align-items-center justify-content-between">
          <span class="text-1xl font-semibold">$ {{ product.price }}</span>
          <Button @click="onAddToCart" icon="pi pi-shopping-cart" rounded></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useCart} from "../hooks/useCart";
import {defineProps} from "vue";
const props = defineProps(['product'])

const { addProductoCart, updateProductoCart } = useCart();

const onAddToCart = () => {
  const copyProduct = JSON.parse(JSON.stringify(props.product));
  copyProduct.qty = 1
  addProductoCart(copyProduct)
}
</script>

<style scoped>
.product-card {
  height: 475px;
  display: inline-block;
  width: 100%;
}
.product-card .content {
  height: 100%;
}
.product-card:hover {
  transform: scale(110%);
  transition: all 0.3s;
}
a:link {
  text-decoration: inherit;
  color: inherit;
}

a:visited {
  text-decoration: inherit;
  color: inherit;
}
</style>