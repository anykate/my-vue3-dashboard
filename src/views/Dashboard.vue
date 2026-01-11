<script setup>
const stats = [
  { label: "Total Users", value: "1,284", change: "+12%", icon: "👥" },
  { label: "Revenue", value: "$12,450", change: "+8%", icon: "💰" },
  { label: "Uptime", value: "99.9%", change: "Stable", icon: "⚡" },
];

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "Purchased Pro Plan",
    time: "2 mins ago",
    status: "Completed",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "Opened a support ticket",
    time: "1 hour ago",
    status: "Pending",
  },
  {
    id: 3,
    user: "Mike Jones",
    action: "Updated profile picture",
    time: "3 hours ago",
    status: "Completed",
  },
  {
    id: 4,
    user: "Emma Wilson",
    action: "New registration",
    time: "5 hours ago",
    status: "Completed",
  },
];
</script>

<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <header
      class="flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
          Dashboard Overview
        </h1>
        <p class="text-gray-500 mt-1">
          Welcome back! Here is what's happening today.
        </p>
      </div>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm cursor-pointer"
      >
        + Generate Report
      </button>
    </header>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
      >
        <div class="flex items-center justify-between">
          <span
            class="text-2xl p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors"
            >{{ stat.icon }}</span
          >
          <span
            :class="[
              'text-xs font-bold px-2 py-1 rounded-full',
              stat.change.includes('+')
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600',
            ]"
          >
            {{ stat.change }}
          </span>
        </div>
        <p class="text-sm font-medium text-gray-500 uppercase mt-4">
          {{ stat.label }}
        </p>
        <p class="text-3xl font-bold text-gray-900 mt-1">{{ stat.value }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Recent Activity Table (Left 2 columns) -->
      <div
        class="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <div
          class="p-6 border-b border-gray-100 flex justify-between items-center"
        >
          <h3 class="font-bold text-gray-900">Recent Activity</h3>
          <a href="#" class="text-blue-600 text-sm hover:underline font-medium"
            >View all</a
          >
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th class="px-6 py-4">User</th>
                <th class="px-6 py-4">Action</th>
                <th class="px-6 py-4">Time</th>
                <th class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="item in recentActivity"
                :key="item.id"
                class="hover:bg-gray-50 transition-colors"
              >
                <td class="px-6 py-4 font-medium text-gray-900">
                  {{ item.user }}
                </td>
                <td class="px-6 py-4 text-gray-600 text-sm">
                  {{ item.action }}
                </td>
                <td class="px-6 py-4 text-gray-400 text-xs">{{ item.time }}</td>
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'px-2 py-1 rounded-md text-[10px] font-bold uppercase',
                      item.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700',
                    ]"
                  >
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Tips / Progress (Right 1 column) -->
      <div class="space-y-6">
        <div
          class="bg-blue-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
        >
          <div class="relative z-10">
            <h3 class="font-bold text-lg">Pro Tip!</h3>
            <p class="text-blue-100 text-sm mt-2">
              You can enable "Night Mode" in the settings to reduce eye strain
              during late work hours.
            </p>
            <button
              class="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50"
            >
              Try Now
            </button>
          </div>
          <div class="absolute -right-4 -bottom-4 text-7xl opacity-10">💡</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-4">Monthly Goal</h3>
          <div class="flex justify-between text-sm mb-2">
            <span class="text-gray-500">Sales Target</span>
            <span class="font-bold">75%</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-3">
            <div class="bg-blue-600 h-3 rounded-full" style="width: 75%"></div>
          </div>
          <p class="text-xs text-gray-400 mt-3">
            You are <strong>$3,000</strong> away from your monthly milestone.
          </p>
        </div>
      </div>
    </div>

    <!-- Long content to ensure scroll works -->
    <div class="bg-white rounded-2xl border border-gray-200 p-8 text-center">
      <h3 class="font-bold text-gray-900">System Logs</h3>
      <div class="mt-4 space-y-2">
        <div
          v-for="n in 5"
          :key="n"
          class="text-left font-mono text-xs bg-gray-900 text-green-400 p-3 rounded shadow-inner"
        >
          [SYSTEM]: Process {{ 1000 + n }} started successfully... status: OK
        </div>
      </div>
    </div>
  </div>
</template>
