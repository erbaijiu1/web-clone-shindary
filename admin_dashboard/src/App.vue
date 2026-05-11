<template>
  <div v-if="!isLoggedIn" class="login-wrapper">
    <el-card class="login-card">
      <template #header><h2>Shindary Admin Login</h2></template>
      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password" type="password" @keyup.enter="handleLogin" />
        </el-form-item>
        <el-button type="primary" class="w-full" style="width: 100%" @click="handleLogin">Sign In</el-button>
      </el-form>
    </el-card>
  </div>

  <el-container v-else class="layout-container">
    <el-aside width="240px" class="aside-panel">
      <div class="brand-block">
        <h1>Shindary Admin</h1>
        <p>Products and news entry</p>
      </div>
      <el-menu :default-active="activePanel" class="el-menu-vertical" @select="handleMenuSelect">
        <el-menu-item index="products">
          <el-icon><Goods /></el-icon>
          <span>Products</span>
        </el-menu-item>
        <el-menu-item index="articles">
          <el-icon><Document /></el-icon>
          <span>News</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header-panel">
        <div>
          <h2>Content Entry</h2>
          <p>Database-backed products and articles for homepage and listing pages</p>
        </div>
        <div class="header-actions">
          <el-select v-model="selectedSiteId" placeholder="Select site" class="site-select">
            <el-option v-for="site in sites" :key="site.id" :label="site.name" :value="site.id" />
          </el-select>
          <el-button style="margin-left: 10px;" type="danger" text @click="handleLogout">Logout</el-button>
        </div>
      </el-header>

      <el-main class="main-panel">
        <el-row :gutter="20">
          <el-col :lg="10" :span="24">
            <el-card shadow="never" class="card-block">
              <template #header>
                <div class="card-header">
                  <span>{{ activePanel === 'products' ? (editingProductId ? 'Edit Product' : 'Add Product') : 'Add News Article' }}</span>
                </div>
              </template>

              <el-form v-if="activePanel === 'products'" label-position="top" :model="productForm">
                <el-form-item label="Product Name">
                  <el-input v-model="productForm.name" />
                </el-form-item>
                <el-form-item label="Slug">
                  <el-input v-model="productForm.slug" />
                </el-form-item>
                <el-form-item label="Category">
                  <el-select v-model="productForm.category_id" placeholder="Select category">
                    <el-option v-for="category in categories" :key="category.id" :label="category.name" :value="category.id" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Image URL">
                  <el-input v-model="productForm.image_url" />
                </el-form-item>
                <el-form-item label="Description">
                  <el-input v-model="productForm.description" type="textarea" :rows="4" />
                </el-form-item>
                <div class="form-actions">
                  <el-button type="primary" @click="submitProduct">{{ editingProductId ? 'Update Product' : 'Create Product' }}</el-button>
                  <el-button v-if="editingProductId" @click="cancelEditProduct">Cancel</el-button>
                </div>
              </el-form>

              <el-form v-else label-position="top" :model="articleForm">
                <el-form-item label="Article Title">
                  <el-input v-model="articleForm.title" />
                </el-form-item>
                <el-form-item label="Slug">
                  <el-input v-model="articleForm.slug" />
                </el-form-item>
                <el-form-item label="Image URL">
                  <el-input v-model="articleForm.image_url" />
                </el-form-item>
                <el-form-item label="Published At">
                  <el-date-picker v-model="articleForm.published_at" type="datetime" value-format="YYYY-MM-DDTHH:mm:ss" />
                </el-form-item>
                <el-form-item label="Excerpt">
                  <el-input v-model="articleForm.excerpt" type="textarea" :rows="3" />
                </el-form-item>
                <el-form-item label="Content HTML">
                  <el-input v-model="articleForm.content" type="textarea" :rows="8" />
                </el-form-item>
                <el-switch v-model="articleForm.is_featured" active-text="Featured" inactive-text="Normal" />
                <div class="form-actions">
                  <el-button type="primary" @click="createArticle">Create Article</el-button>
                </div>
              </el-form>
            </el-card>
          </el-col>

          <el-col :lg="14" :span="24">
            <el-card shadow="never" class="card-block">
              <template #header>
                <div class="card-header">
                  <span>{{ activePanel === 'products' ? 'Products' : 'Articles' }}</span>
                  <el-button text @click="refreshActive">Refresh</el-button>
                </div>
              </template>

              <el-table v-if="activePanel === 'products'" :data="products" style="width: 100%" height="620">
                <el-table-column prop="id" label="ID" width="80" />
                <el-table-column prop="name" label="Name" min-width="220" />
                <el-table-column prop="slug" label="Slug" min-width="180" />
                <el-table-column prop="image_url" label="Image" min-width="200" />
                <el-table-column label="Actions" width="160">
                  <template #default="scope">
                    <el-button type="primary" link @click="editProduct(scope.row)">Edit</el-button>
                    <el-button type="danger" link @click="removeProduct(scope.row.id)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>

              <el-table v-else :data="articles" style="width: 100%" height="620">
                <el-table-column prop="id" label="ID" width="80" />
                <el-table-column prop="title" label="Title" min-width="240" />
                <el-table-column prop="slug" label="Slug" min-width="180" />
                <el-table-column prop="published_at" label="Published" min-width="180" />
                <el-table-column label="Actions" width="120">
                  <template #default="scope">
                    <el-button type="danger" link @click="removeArticle(scope.row.id)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'
import { Document, Goods } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const siteCode = import.meta.env.VITE_SITE_CODE || 'shindary'
const apiOrigin = import.meta.env.VITE_API_ORIGIN || 'http://127.0.0.1:8000'

const api = axios.create({ baseURL: `${apiOrigin}/${siteCode}/api/v1/admin` })

const isLoggedIn = ref(!!localStorage.getItem('admin_token'))
const loginForm = reactive({ username: '', password: '' })

const handleLogin = () => {
  if (loginForm.username === 'admin' && loginForm.password === 'shindary2026') {
    localStorage.setItem('admin_token', 'mock_token')
    isLoggedIn.value = true
  } else {
    ElMessage.error('Invalid credentials (try admin / shindary2026)')
  }
}

const handleLogout = () => {
  localStorage.removeItem('admin_token')
  isLoggedIn.value = false
}

const activePanel = ref('products')
const sites = ref<any[]>([])
const categories = ref<any[]>([])
const products = ref<any[]>([])
const articles = ref<any[]>([])
const selectedSiteId = ref<number | null>(null)
const editingProductId = ref<number | null>(null)

const productForm = reactive({
  name: '',
  slug: '',
  category_id: undefined as number | undefined,
  image_url: '',
  description: '',
  name_en: '',
  name_es: '',
  part_number: '',
  oem_number: '',
  car_model: ''
})

const articleForm = reactive({
  title: '',
  slug: '',
  image_url: '',
  excerpt: '',
  content: '',
  published_at: '',
  is_featured: true,
  sort_order: 0
})

const loadSites = async () => {
  const { data } = await api.get('/sites')
  sites.value = data
  if (!selectedSiteId.value && data.length > 0) {
    selectedSiteId.value = data[0].id
  }
}

const loadCategories = async () => {
  if (!selectedSiteId.value) return
  const { data } = await api.get('/categories', { params: { site_id: selectedSiteId.value } })
  categories.value = data
}

const loadProducts = async () => {
  const { data } = await api.get('/products')
  products.value = data
}

const loadArticles = async () => {
  const { data } = await api.get('/articles')
  articles.value = data
}

const refreshActive = async () => {
  if (activePanel.value === 'products') {
    await loadProducts()
    return
  }
  await loadArticles()
}

const editProduct = (product: any) => {
  editingProductId.value = product.id
  Object.assign(productForm, {
    name: product.name,
    slug: product.slug,
    category_id: product.category_id,
    image_url: product.image_url,
    description: product.description,
    name_en: product.name_en || '',
    name_es: product.name_es || '',
    part_number: product.part_number || '',
    oem_number: product.oem_number || '',
    car_model: product.car_model || ''
  })
}

const cancelEditProduct = () => {
  editingProductId.value = null
  Object.assign(productForm, {
    name: '', slug: '', category_id: undefined, image_url: '', description: '', name_en: '', name_es: '', part_number: '', oem_number: '', car_model: ''
  })
}

const submitProduct = async () => {
  if (!selectedSiteId.value || !productForm.category_id) {
    ElMessage.error('Select site and category first')
    return
  }

  try {
    const payload = {
      name: productForm.name,
      slug: productForm.slug,
      description: productForm.description,
      image_url: productForm.image_url,
      name_en: productForm.name_en,
      name_es: productForm.name_es,
      part_number: productForm.part_number,
      oem_number: productForm.oem_number,
      car_model: productForm.car_model
    }

    if (editingProductId.value) {
      await api.put(`/products/${editingProductId.value}`, payload, {
        params: { site_id: selectedSiteId.value, category_id: productForm.category_id }
      })
      ElMessage.success('Product updated')
      editingProductId.value = null
    } else {
      await api.post('/products', payload, {
        params: { site_id: selectedSiteId.value, category_id: productForm.category_id }
      })
      ElMessage.success('Product created')
    }

    Object.assign(productForm, {
      name: '', slug: '', category_id: undefined, image_url: '', description: '', name_en: '', name_es: '', part_number: '', oem_number: '', car_model: ''
    })
    await loadProducts()
  } catch (error: any) {
    ElMessage.error(error.response?.data?.detail || 'Failed to submit product')
  }
}

const createArticle = async () => {
  if (!selectedSiteId.value) {
    ElMessage.error('Select site first')
    return
  }

  await api.post('/articles', {
    title: articleForm.title,
    slug: articleForm.slug,
    image_url: articleForm.image_url,
    excerpt: articleForm.excerpt,
    content: articleForm.content,
    published_at: articleForm.published_at || null,
    is_featured: articleForm.is_featured,
    sort_order: articleForm.sort_order
  }, {
    params: { site_id: selectedSiteId.value }
  })

  ElMessage.success('Article created')
  Object.assign(articleForm, {
    title: '', slug: '', image_url: '', excerpt: '', content: '', published_at: '', is_featured: true, sort_order: 0
  })
  await loadArticles()
}

const removeProduct = async (id: number) => {
  await api.delete(`/products/${id}`)
  ElMessage.success('Product deleted')
  await loadProducts()
}

const removeArticle = async (id: number) => {
  await api.delete(`/articles/${id}`)
  ElMessage.success('Article deleted')
  await loadArticles()
}

const handleMenuSelect = (key: string) => {
  activePanel.value = key
}

watch(selectedSiteId, async () => {
  await loadCategories()
})

onMounted(async () => {
  await loadSites()
  await loadCategories()
  await loadProducts()
  await loadArticles()
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f3f7fb;
}

#app {
  height: 100vh;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f7fb;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
}

.layout-container {
  height: 100%;
}

.aside-panel {
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #fff;
  border-right: none;
}

.brand-block {
  padding: 24px 20px 8px;
}

.brand-block h1 {
  margin: 0;
  font-size: 20px;
}

.brand-block p {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.65);
  font-size: 13px;
}

.el-menu-vertical {
  border-right: none;
  background: transparent;
}

.header-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.header-panel h2 {
  margin: 0;
  font-size: 22px;
}

.header-panel p {
  margin: 6px 0 0;
  color: #64748b;
}

.site-select {
  width: 220px;
}

.main-panel {
  padding: 24px;
}

.card-block {
  border-radius: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.form-actions {
  margin-top: 16px;
}
</style>
