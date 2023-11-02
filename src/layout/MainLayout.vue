<template>
  <div>
    <Toolbar
        class="toolbar">
      <template #start>
        start
      </template>
      <template #center>
        {{ store.state }}
      </template>
      <template #end>
        end
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
import { useStore } from "vuex";
import Categorias from "../components/Categorias.vue";
const store = useStore();
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
</style>