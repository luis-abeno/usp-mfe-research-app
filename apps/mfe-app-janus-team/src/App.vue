<template>
  <router-view v-slot="{ Component, route }">
    <div v-if="route.name" :key="route.name" class="w-full">
        <component :is="Component"></component>
    </div>
  </router-view>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>
