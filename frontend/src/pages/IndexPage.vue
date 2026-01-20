<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Prawit_408 Full-Stack Demo</div>
    <q-card>
      <q-card-section>
        <div class="text-h6">Data from Backend API</div>
        <q-spinner v-if="loading" color="primary" size="2em" />
        <q-list v-else bordered separator class="q-mt-sm">
          <q-item>
            <q-item-section>
              <q-item-label>Git Workflow</q-item-label>
              <q-item-label caption>{{ apiData.git.detail }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Docker Status</q-item-label>
              <q-item-label caption>{{ apiData.docker.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const apiData = ref({ git: { detail: '' }, docker: { detail: '' } });
const loading = ref(true);

const fetchData = async () => {
  loading.value = true;
  try {
    // ดึง URL จาก .env ที่คุณเพิ่งสร้าง [cite: 582, 785]
    const apiUrl = import.meta.env.VITE_API_URL + '/api/demo';
    const response = await axios.get(apiUrl);
    apiData.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    loading.value = false;
  }
};
onMounted(fetchData);
</script>