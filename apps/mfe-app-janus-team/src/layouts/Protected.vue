<template>
    <div class="container mx-auto p-4 rounded-lg my-6 bg-white">
        <Navbar />
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';
</script>