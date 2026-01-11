<script setup>
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";

import Sidebar from "./components/Sidebar.vue"; // Import the component
const route = useRoute();

const isOpen = ref(false);
const toggleSidebar = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden font-sans text-gray-900">
    <nav
      class="z-50 flex h-16 shrink-0 items-center bg-blue-600 px-4 text-white shadow-md"
    >
      <button
        @click="toggleSidebar"
        class="cursor-pointer rounded-md p-2 hover:bg-blue-700"
      >
        ☰
      </button>
      <span class="ml-4 text-xl font-bold">Admin Portal</span>
    </nav>
    <div class="flex flex-1 overflow-hidden">
      <Sidebar :is-open="isOpen" />
      <!-- Pass the prop -->
      <main class="flex-1 overflow-y-auto bg-white p-8">
        <RouterView v-slot="{ Component, route }">
          <!-- Wrap Transition in a v-if to ensure a component exists before animating -->
          <Transition
            mode="out-in"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <!-- Use the slot-provided route.path for the key -->
            <component v-if="Component" :is="Component" :key="route.path" />
          </Transition>
        </RouterView>
      </main>
    </div>
    <!-- ... footer code ... -->
    <footer
      class="flex h-12 shrink-0 items-center justify-center border-t border-gray-200 bg-white text-sm text-gray-500 px-4"
    >
      <div class="flex w-full justify-between max-w-5xl">
        <span>© 2025 Dashboard Pro</span>
        <span class="hidden sm:inline">v4.0.1 Stable</span>
      </div>
    </footer>
  </div>
</template>

<style></style>
