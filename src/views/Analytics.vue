<script setup></script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">Analytics</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div
        class="h-64 bg-white border border-gray-200 rounded-2xl p-6 flex items-end gap-2"
      >
        <div
          v-for="h in [40, 70, 45, 90, 65, 80, 30]"
          :key="h"
          class="flex-1 bg-blue-500 rounded-t-md"
          :style="{ height: h + '%' }"
        ></div>
      </div>
      <div
        class="h-64 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-center items-center"
      >
        <div
          class="w-32 h-32 rounded-full border-16 border-blue-500 border-t-gray-100 animate-spin-slow"
        ></div>
        <p class="mt-4 text-gray-500 font-medium">
          Processing Real-time Data...
        </p>
      </div>
    </div>
  </div>
</template>
