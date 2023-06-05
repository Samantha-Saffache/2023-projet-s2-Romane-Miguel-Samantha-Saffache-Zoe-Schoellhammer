<script setup lang="ts">
import { logout, estConnecté, login } from '@/auth'
</script>
<template>
  <div>
    <button v-if="estConnecté" @click="logout" class="rounded-md px-4 py-2 font-bold text-white bg-red-900">
      Déconnexion {{ estConnecté.username }}
    </button>
    <button v-else @click="login" class="btn bg-blue-900">Connexion</button>
  </div>
</template>
