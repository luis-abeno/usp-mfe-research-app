<template>
    <div class="rounded-lg">
        <Navbar />
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';
</script>