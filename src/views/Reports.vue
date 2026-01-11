<script setup></script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">Reports</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="report in ['Q4 Revenue', 'User Growth', 'Server Logs']"
        :key="report"
        class="p-4 bg-white border border-gray-200 rounded-xl flex flex-col items-center text-center group hover:border-blue-500 transition-colors"
      >
        <span class="text-4xl mb-2">📄</span>
        <span class="font-medium text-gray-800">{{ report }}.pdf</span>
        <button
          class="mt-3 text-xs text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity"
        >
          DOWNLOAD
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
