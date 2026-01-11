<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const activeItem = ref("Dashboard"); // Track which page is "active"

const toggleSidebar = () => (isOpen.value = !isOpen.value);

const menuItems = [
  { name: "Dashboard", icon: "🏠" },
  { name: "Analytics", icon: "📊" },
  { name: "Reports", icon: "📄" },
  { name: "Settings", icon: "⚙️" },
];
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden font-sans text-gray-900">
    <!-- 1. Navbar -->
    <nav
      class="z-50 flex h-16 shrink-0 items-center bg-blue-600 px-4 text-white shadow-md"
    >
      <button
        @click="toggleSidebar"
        class="cursor-pointer rounded-md p-2 hover:bg-blue-700 transition-colors"
      >
        ☰
      </button>
      <span class="ml-4 text-xl font-bold">Admin Portal</span>
    </nav>

    <div class="flex flex-1 overflow-hidden">
      <!-- 2. Sidebar -->
      <aside
        :class="[
          'bg-gray-50 border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out shrink-0',
          isOpen ? 'w-64' : 'w-20',
        ]"
      >
        <div class="flex flex-col p-3">
          <ul class="space-y-2">
            <li
              v-for="item in menuItems"
              :key="item.name"
              @click="activeItem = item.name"
              :class="[
                'flex items-center gap-4 rounded-lg p-3 cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-200',
                // Active Styles
                activeItem === item.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700',
              ]"
            >
              <!-- Icon -->
              <span class="text-xl shrink-0 w-8 text-center">{{
                item.icon
              }}</span>

              <!-- Text -->
              <span
                :class="[
                  'transition-opacity duration-300 font-medium',
                  isOpen ? 'opacity-100' : 'opacity-0',
                ]"
              >
                {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
      </aside>

      <!-- 3. Main Content -->
      <main class="flex-1 overflow-y-auto bg-white p-8">
        <div class="mx-auto max-w-5xl">
          <h1 class="text-3xl font-extrabold text-gray-900">
            {{ activeItem }}
          </h1>
          <p class="text-gray-500 mt-2">
            Currently viewing the <strong>{{ activeItem }}</strong> section.
          </p>

          <div class="mt-8 space-y-4">
            <div
              v-for="i in 5"
              :key="i"
              class="h-32 rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <h3 class="font-bold">Data for {{ activeItem }} #{{ i }}</h3>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- 4. Footer -->
    <footer
      class="flex h-12 shrink-0 items-center justify-center border-t border-gray-200 bg-white text-sm text-gray-500 px-4"
    >
      <span>© 2025 Dashboard Pro</span>
    </footer>
  </div>
</template>
