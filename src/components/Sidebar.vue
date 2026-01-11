<template>
  <aside
    :class="[
      'bg-gray-50 border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out shrink-0',
      isOpen ? 'w-64' : 'w-20',
    ]"
  >
    <div class="flex flex-col p-3">
      <ul class="space-y-2">
        <RouterLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-4 rounded-lg p-3 cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-200 text-gray-600 hover:bg-blue-100"
        >
          <!-- Icon -->
          <span class="text-xl shrink-0 w-8 text-center">{{ item.icon }}</span>

          <!-- Text Label -->
          <span
            :class="[
              'transition-opacity duration-300 font-medium',
              isOpen ? 'opacity-100' : 'opacity-0',
            ]"
          >
            {{ item.name }}
          </span>
        </RouterLink>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";

// Receive state from App.vue
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const menuItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Analytics", path: "/analytics", icon: "📈" },
  { name: "Users", path: "/users", icon: "👥" },
  { name: "Reports", path: "/reports", icon: "📊" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];
</script>
