<template>
  <div>
    <Sidebar v-model:visible="mostrarCarrito" position="right" style="width: 500px">
      <span class="text-4xl">Carrito</span>
      <Cart/>
    </Sidebar>
    <Sidebar v-model:visible="mostrarSidebarMobile" position="left" style="width: 400px">
      <MSidebar/>
    </Sidebar>
    <Toolbar
        class="toolbar">
      <template #start>
        <Button class="mobile-sidebar" icon="pi pi-arrow-left" @click="mostrarSidebarMobile = !mostrarSidebarMobile" :badge="cartProductos.length"></Button>
      </template>
      <template #center>
        <div class="flex align-items-center">
          <img class="mr-4" src="../assets/logo.png" alt="logo">
          <span class="text-4xl">Marco's Store</span>
        </div>
      </template>
      <template #end>
        <Button icon="pi pi-shopping-cart" @click="mostrarCarrito = !mostrarCarrito" :badge="cartProductos.length" />
      </template>
    </Toolbar>
    <div class="main_content">
      <MSidebar class="desktop-sidebar"/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useCart} from "../hooks/useCart";
import MSidebar from "../components/MSidebar.vue";
import Cart from "../components/Cart.vue"
const { cartProductos } = useCart();
const mostrarCarrito = ref(false);
const mostrarSidebarMobile = ref(false);
</script>

<style scoped>
.mobile-sidebar {
  display: none;
}
.desktop-sidebar {
  display: block !important;
}
@media screen and (max-width: 520px) {
   .desktop-sidebar {
     display: none !important;
   }
  .mobile-sidebar {
    display: block;
  }
}
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