<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/controls/header.vue";
import Footer from "@/controls/footer.vue";
</script>
<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <Footer />
</template>
