<script setup>
import { ref } from "vue";

const notifications = ref({
  email: true,
  push: false,
  marketing: true,
});

const theme = ref("light");
</script>

<template>
  <div class="space-y-8 pb-12">
    <!-- Header -->
    <header>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
        Account Settings
      </h1>
      <p class="text-gray-500 mt-1">
        Manage your profile, security, and application preferences.
      </p>
    </header>

    <!-- Profile Section -->
    <section
      class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
      <div class="p-6 border-b border-gray-100">
        <h3 class="font-bold text-gray-900">Public Profile</h3>
      </div>
      <div class="p-6 space-y-6">
        <div
          class="flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <div class="relative">
            <div
              class="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl border-4 border-white shadow-sm"
            >
              👤
            </div>
            <button
              class="absolute bottom-0 right-0 bg-white border border-gray-200 p-1.5 rounded-full shadow-sm hover:bg-gray-50 cursor-pointer"
            >
              📸
            </button>
          </div>
          <div class="flex-1 space-y-4 w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-sm font-semibold text-gray-700"
                  >Display Name</label
                >
                <input
                  type="text"
                  value="Admin User"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div class="space-y-1">
                <label class="text-sm font-semibold text-gray-700"
                  >Email Address</label
                >
                <input
                  type="email"
                  value="admin@portal.com"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notifications Toggle Section -->
    <section
      class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
      <div class="p-6 border-b border-gray-100">
        <h3 class="font-bold text-gray-900">Notification Preferences</h3>
      </div>
      <div class="p-6 divide-y divide-gray-100">
        <div
          v-for="(val, key) in notifications"
          :key="key"
          class="flex items-center justify-between py-4 first:pt-0 last:pb-0"
        >
          <div>
            <p class="font-medium text-gray-900 capitalize">
              {{ key }} Notifications
            </p>
            <p class="text-sm text-gray-500">
              Receive alerts via your {{ key }} channel.
            </p>
          </div>
          <button
            @click="notifications[key] = !notifications[key]"
            :class="[
              'w-12 h-6 rounded-full transition-colors relative cursor-pointer',
              notifications[key] ? 'bg-blue-600' : 'bg-gray-300',
            ]"
          >
            <div
              :class="[
                'absolute top-1 w-4 h-4 bg-white rounded-full transition-transform',
                notifications[key] ? 'left-7' : 'left-1',
              ]"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Security & Danger Zone -->
    <section
      class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
      <div class="p-6 border-b border-gray-100">
        <h3 class="font-bold text-gray-900">Security</h3>
      </div>
      <div class="p-6 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900">Password</p>
            <p class="text-sm text-gray-500">Last changed 3 months ago</p>
          </div>
          <button
            class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Update Password
          </button>
        </div>

        <div class="pt-6 border-t border-red-50">
          <h4 class="text-sm font-bold text-red-600 uppercase tracking-wider">
            Danger Zone
          </h4>
          <div
            class="mt-4 flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100"
          >
            <div>
              <p class="font-medium text-red-900">Delete Account</p>
              <p class="text-sm text-red-700 opacity-80">
                Once deleted, your data cannot be recovered.
              </p>
            </div>
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors cursor-pointer shadow-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Footer Actions -->
    <div class="flex items-center justify-end gap-4 pt-4">
      <button
        class="px-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        Cancel
      </button>
      <button
        class="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-shadow shadow-md cursor-pointer"
      >
        Save All Changes
      </button>
    </div>
  </div>
</template>
