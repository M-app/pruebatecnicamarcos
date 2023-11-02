<template>
  <div class="scroll_panel p-3">
    <div class="text-2xl font-bold title mb-2">CATEGORIAS</div>
    <div v-for="(item, index) of categorias" :key="item" class="flex align-items-center justify-content-between mb-1">
      <label>{{ item }}</label>
      <RadioButton @update:modelValue="onUpdateCategory" v-model="categoriasSeleccionadas" name="category" :value="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch, computed} from "vue";
import {useCategories} from "../hooks/useCategories";
import {useStore} from "vuex";
const { loadAllCategories, setCurrentCategory } = useCategories()
const store = useStore();

const categorias = ref<Array<any>>([]);
const categoriasSeleccionadas = ref(null);
const categoriasState = computed(() => store.state.categoriaActual)

onMounted(async () => {
  categorias.value = await loadAllCategories();
})
const onUpdateCategory = (cat) => {
  setCurrentCategory(cat)
}
watch(categoriasState, async (newVal) => {
  if (!newVal) {
    categoriasSeleccionadas.value = ref(null)
  }
})
</script>

<style scoped>
.title {
  text-align: start;
}
.scroll_panel {
  width: 300px;
  height: calc(100vh - 66px)
}
</style>