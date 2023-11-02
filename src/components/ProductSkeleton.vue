<template>
  <div class="col-12 sm:col-6 lg:col-4 xl:col-3 p-2">
    <div class="p-4 border-1 surface-border surface-card border-round product-card">
      <div class="flex flex-column align-items-center gap-3 py-5">
        <Skeleton class="w-9 shadow-2 border-round h-10rem" />
        <Skeleton class="w-8rem border-round h-2rem" />
        <Skeleton class="w-6rem border-round h-1rem" />
      </div>
      <div class="flex align-items-center justify-content-between">
        <Skeleton class="w-4rem border-round h-2rem" />
        <Skeleton shape="circle" class="w-3rem h-3rem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</style>