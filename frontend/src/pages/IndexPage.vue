<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
        style="width: 200px; height: 200px"
      >
      <div class="text-h2 q-mt-md">
        Prawit Prapawararat
      </div>
      <div class="text-h4 text-grey-8">
        ID: 6604101408
      </div>
      <q-btn
        class="q-mt-xl"
        color="primary"
        label="Check Backend API"
        @click="checkApi"
      />
    </div>
  </q-page>
</template>

<script setup>
const checkApi = () => {
  window.open('http://localhost:3000/api/demo', '_blank')
}
</script>
