<script setup lang="ts">
//a modifier avec nos icones !! //
// logo à importer//
	// icone recherche à importer //
</script>

<template>
  <Header>
    <div>
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div>
      <button>
        <SearchIcon />
      </button>

      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>

			<nav>
		    <ul>
		      <li><a href="/mes-notifications">Mes notifications</a></li>
		      <li><a href="/decouvrir">Découvrir</a></li>
		      <li><a href="/mes-favoris">Mes favoris</a></li>
		      <li><a href="/mon-compte">Mon compte</a></li>
		      <li><a href="/messagerie">Messagerie</a></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>