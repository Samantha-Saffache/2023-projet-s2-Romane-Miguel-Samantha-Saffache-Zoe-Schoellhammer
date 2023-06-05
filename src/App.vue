<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import CardRecette from './components/CardRecette.vue'

</script>


<template>
<HeaderPage />
  
<main class="bg-beige py-24 lg:py-40 px-8 lg:px-9">

  <Suspense>
 <RouterView />
</Suspense>
</main>


<FooterPage />
</template>