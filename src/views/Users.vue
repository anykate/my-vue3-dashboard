<script setup></script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">User Directory</h1>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
        + Add User
      </button>
    </div>
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div
        v-for="user in ['Alice', 'Bob', 'Charlie']"
        :key="user"
        class="p-4 border-b border-gray-100 flex items-center gap-4 hover:bg-gray-50"
      >
        <div
          class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold"
        >
          {{ user[0] }}
        </div>
        <div>
          <p class="font-semibold text-gray-900">{{ user }} Johnson</p>
          <p class="text-sm text-gray-500">
            {{ user.toLowerCase() }}@example.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
