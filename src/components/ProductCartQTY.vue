<template>
  <div class="flex align-items-center p-1">
    <Button @click="onUpdateQty(producto.qty - 1)" size="small" icon="pi pi-minus" outlined></Button>
    <InputText :model-value="producto.qty" @update:model-value="onUpdateQty" class="p-inputtext"  />
    <Button @click="onUpdateQty(producto.qty + 1)" size="small" icon="pi pi-plus" outlined></Button>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from "vue";
import {useCart} from "../hooks/useCart";
const props = defineProps(['producto'])
const { updateProductoCart } = useCart();
const onUpdateQty = (qty) => {
  if (!isNaN(Number(qty)) && Number(qty) > 0) {
    const copy = JSON.parse(JSON.stringify(props.producto))
    copy.qty = qty
    console.log("new producto: ", copy);
    updateProductoCart(copy);
  }
}
</script>

<style scoped>
.p-inputtext {
  width: 50px !important;
}
</style>