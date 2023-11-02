<template>
  <div class="display_mode">
    <div class="mr-2">
      <Button label="Grid" icon="pi pi-microsoft" severity="secondary" outlined></Button>
    </div>
    <div>
      <Button label="Table" icon="pi pi-table" severity="secondary" outlined></Button>
    </div>
  </div>
  <div class="mt-4">
    <div class="flex title justify-content-start align-items-center">
      <span v-if="currentCategory" class="text-6xl uppercase font-light mr-4">{{ currentCategory }} products</span>
      <span v-else class="text-6xl uppercase font-light mr-4">all products</span>
      <i v-if="currentCategory" class="pi pi-times icon-close" @click="resetCurrentCategory" ></i>
    </div>
    <DataView class="test" :value="isLoading ? [{},{},{},{}] : products" layout="grid">
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
import Product from "../components/Product.vue"
import ProductSkeleton from "../components/ProductSkeleton.vue"
const { loadAllProducts, getProductsByCategory } = useProducts();
const { resetCurrentCategory } = useCategories();
import {useStore} from "vuex";
import {useLoading} from "../hooks/useLoading";
const store = useStore();
const products = ref<Array<any>>([])
const currentCategory = computed(() => store.state.categoriaActual)
const { isLoading, setLoading } = useLoading();
onMounted(async () => {
  products.value = await loadAllProducts();
})

watch(currentCategory, async (newVal) => {
  try {
    setLoading(true)
    if (newVal) {
      products.value = await getProductsByCategory(newVal);
    } else {
      products.value = await loadAllProducts();
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