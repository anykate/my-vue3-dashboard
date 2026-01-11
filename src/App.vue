<script setup>
import { ref } from "vue";

// false = Mini mode (default), true = Expanded
const isOpen = ref(false);
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

    <!-- Middle Section -->
    <div class="flex flex-1 overflow-hidden">
      <!-- 2. Sidebar (Mini-Mode logic) -->
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
              class="flex items-center gap-4 rounded-lg p-3 hover:bg-blue-100 cursor-pointer overflow-hidden whitespace-nowrap group"
            >
              <!-- Icon: Always centered/visible -->
              <span class="text-xl shrink-0 w-8 text-center">{{
                item.icon
              }}</span>

              <!-- Text: Fades in/out based on state -->
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

      <!-- 3. Main Content: Only this area scrolls -->
      <main class="flex-1 overflow-y-auto bg-white p-8">
        <div class="mx-auto max-w-7xl">
          <h1 class="text-3xl font-extrabold text-gray-900">Dashboard</h1>
          <p class="text-gray-500 mt-2">
            The sidebar is currently in
            <b>{{ isOpen ? "Expanded" : "Mini" }}</b> mode.
          </p>

          <!-- Long Content to test scrolling -->
          <div class="mt-8 space-y-4">
            <div
              v-for="i in 12"
              :key="i"
              class="h-32 rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <h3 class="font-bold">Content Block {{ i }}</h3>
              <p class="text-sm text-gray-500 mt-1">
                Scrollable area content...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- 4. Footer: Locked at bottom -->
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
