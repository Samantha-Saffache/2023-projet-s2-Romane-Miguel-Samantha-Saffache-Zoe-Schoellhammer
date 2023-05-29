<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <Hero title="Agenda" imgPath="./img/orchestre.webp" imgAlt="Orchestre">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles
        ouvertes à tous.
      </p>
    </template>
  </Hero>
  <div>
    <Card />
  </div>
</template>
