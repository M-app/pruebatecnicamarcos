<template>
  <div>
    <Sidebar v-model:visible="mostrarCarrito" position="right" style="width: 500px">
      <span class="text-4xl">Carrito</span>
      <Cart/>
    </Sidebar>
    <Toolbar
        class="toolbar">
      <template #start>
        start
      </template>
      <template #center>
       // h
      </template>
      <template #end>
        <Button icon="pi pi-shopping-cart" @click="mostrarCarrito = !mostrarCarrito" :badge="cartProductos.length" />
      </template>
    </Toolbar>
    <div class="main_content">
      <Categorias/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useCart} from "../hooks/useCart";
import Categorias from "../components/MSidebar.vue";
import Cart from "../components/Cart.vue"
const { cartProductos } = useCart();
const mostrarCarrito = ref(false);
</script>

<style scoped>
.toolbar {
  background-color: white;
}
.main_content {
  display: flex;
}
.main_content .content {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.content {
  width: 100%;
}
.cart-sidebar {
  width: 400px;
}
</style>