<template>
  <div class="mt-4">
    <div class="flex title justify-content-start align-items-center">
      <span v-if="currentCategoria" class="text-6xl uppercase font-light mr-4">{{ currentCategoria }} products</span>
      <span v-else class="text-6xl uppercase font-light mr-4">all products</span>
      <i v-if="currentCategoria" class="pi pi-times icon-close" @click="resetCurrentCategory" ></i>
    </div>
    <DataView class="test" :value="isLoading ? [{},{},{},{}] : filteredProducts && filteredProducts.length > 0 ? filteredProducts : displayProducts" layout="grid">
      <template #grid="slotProps">
        <ProductSkeleton v-if="isLoading"/>
        <Product v-if="!isLoading" :product="slotProps.data"/>
      </template>
    </DataView>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, computed, watch} from "vue";
import {useProducts} from "../hooks/useProducts";
import {useCategories} from "../hooks/useCategories";
import {useSearch} from "../hooks/useSearch";
import Product from "../components/Product.vue"
import ProductSkeleton from "../components/ProductSkeleton.vue"
const { loadAllProducts, getProductsByCategory, searchProduct } = useProducts();
const { resetCurrentCategory, currentCategoria } = useCategories();
const { isLoading, setLoading } = useLoading();
const { searchText } = useSearch();
import {useLoading} from "../hooks/useLoading";
const filteredProducts = computed(() => {
  if (searchText.value && searchText.value.length > 0) {
    return displayProducts.value.filter(el => {
     return el.title.toLowerCase().includes(searchText.value.toLowerCase())
    })
  } else {
    return []
  }
})
const displayProducts = ref<Array<any>>([])
onMounted(async () => {
  displayProducts.value = await loadAllProducts();
})
watch(currentCategoria, async (newVal) => {
  try {
    setLoading(true)
    if (newVal) {
      displayProducts.value = await getProductsByCategory(newVal);
    } else {
      displayProducts.value = await loadAllProducts();
    }
  } catch (e) {
    console.log("e: ", e)
  } finally {
    setLoading(false)
  }
})
</script>

<style scoped>
.icon-close {
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
}
.display_mode {
  display: flex;
}
</style>