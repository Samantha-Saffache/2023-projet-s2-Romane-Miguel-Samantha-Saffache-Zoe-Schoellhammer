<script setup lang="ts">
  //a modifier avec nos icones !! //
  // logo à importer//
	// icone recherche à importer //
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-white px-6 py-2 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button>
        // icone à placer //
      </button>

      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>

			<nav class="fixed inset-0 h-screen w-screen text-2xl text-white transition-all duration-300 ease-in-out">
		    <ul>
		      <li><RouterLink class="menu-link" to="/mes-notifications">Mes notifications</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/decouvrir">Découvrir</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/mes-favoris">Mes favoris</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/mon-compte">Mon compte</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/messagerie">Messagerie</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>