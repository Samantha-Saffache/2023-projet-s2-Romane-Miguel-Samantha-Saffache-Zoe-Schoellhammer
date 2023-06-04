<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
  import Logo from '@/components/icons/Logo.vue';
  import SearchIcon from '@/components/icons/IconSearch.vue';
  import { RouterLink } from 'vue-router';
  const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>
  <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-beige lg:bg-blanc
  px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a class="block w-12 h-12 lg:w-20 lg:h-20" href="/">
        <Logo />
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button>
       <SearchIcon class="hover-fill-" />
      </button>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between fill-orange lg:hidden"
      @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-orange transition duration-300"
         :class="{ 'translate-y-[9px] rotate-45 bg-orange': activeMenu }"
         ></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-orange transition duration-300"
        :class="{ 'bg-orange opacity-0': activeMenu }"
        ></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-orange transition duration-300"
        :class="{ '-translate-y-[9px] -rotate-45 bg-orange': activeMenu }"
        ></div>
      </button>

			<nav class="invisible opacity-0 fixed inset-0 h-screen w-screen text-2xl transition-all duration-300 ease-in-out
      lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase
      lg:tracking-wide lg:opacity-100"
      :class="{ '!visible opacity-100 bg-beige': activeMenu }"
        v-scroll-lock="activeMenu"
        >
        
		    <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
		      <li class="menu-item">
            <RouterLink class="menu-link hover:text-vert" to="/mes-notifications" 	@click="closeMenu">Mes notifications</RouterLink>
          </li>
		      <li class="menu-item">
            <RouterLink class="menu-link hover:text-vert" to="/decouvrir" 	@click="closeMenu">Découvrir</RouterLink>
          </li>
		      <li class="menu-item">
            <RouterLink class="menu-link hover:text-vert" to="/mes-favoris" 	@click="closeMenu">Mes favoris</RouterLink>
          </li>
		      <li class="menu-item">
            <RouterLink class="menu-link hover:text-vert" to="/mon-compte"	@click="closeMenu">Mon compte</RouterLink>
          </li>
		      <li class="menu-item"><RouterLink class="menu-link hover:text-vert" to="/messagerie" 	@click="closeMenu">Messagerie</RouterLink>
          </li>
          <li class="menu-item"><RouterLink class="menu-link hover:text-vert_fonce font-bold lg:bg-vert lg:text-blanc" to="/connexion" 	@click="closeMenu">Connexion</RouterLink>
          </li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>