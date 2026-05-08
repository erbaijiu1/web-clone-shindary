<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <el-menu default-active="1" class="el-menu-vertical">
        <el-menu-item index="1">
          <el-icon><Menu /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>Products</span>
          </template>
          <el-menu-item index="2-1">Shindary Site</el-menu-item>
          <el-menu-item index="2-2">HC-Camp Site</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon><Setting /></el-icon>
          <span>Settings</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <span>Admin User</span>
        </div>
      </el-header>
      
      <el-main>
        <h2>Welcome to Multi-Site Admin Dashboard</h2>
        <el-table :data="tableData" style="width: 100%; margin-top: 20px;">
          <el-table-column prop="date" label="Date" width="140" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="site" label="Site" />
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Goods, Setting } from '@element-plus/icons-vue'

const tableData = ref([
  {
    date: '2026-05-07',
    name: 'Engine Part A',
    site: 'shindary.com',
  },
  {
    date: '2026-05-08',
    name: 'Suspension B',
    site: 'hc-camp.com',
  },
])
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100vh;
}
.layout-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  background-color: #fff;
  border-right: solid 1px #e6e6e6;
}
.el-menu-vertical {
  border-right: none;
}
</style>
