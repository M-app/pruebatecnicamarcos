<template>
  <DataView :value="cartProductos">
    <template #list="slotProps">
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img class="border-round cart-image"
               :src="slotProps.data.image"
               :alt="slotProps.data.title" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <div class="flex flex-column">
                <span class="font-semibold">{{ slotProps.data.title }}</span>
                <ProductCartQTY :producto="slotProps.data"/>
              </div>
            </div>
            <div class="flex flex-column align-items-center justify-content-between">
              <span class="text-2xl font-semibold mb-3">${{ slotProps.data.price }}</span>
              <Button @click="onDeleteProducto(slotProps.data)" icon="pi pi-times" rounded severity="danger" outlined></Button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import {useCart} from "../hooks/useCart";
import ProductCartQTY from "../components/ProductCartQTY.vue"
const { cartProductos, deleteProductoCart } = useCart();

const onDeleteProducto = (producto) => {
  deleteProductoCart(producto)
}
</script>

<style scoped>
.cart-image {
  width: 90px;
  height: auto;
}
</style>