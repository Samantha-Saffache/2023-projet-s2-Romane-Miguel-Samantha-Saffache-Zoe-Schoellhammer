<script setup lang="ts">
 import Logo from '@/components/icons/Logo.vue';
import FacebookIcon from '@/components/icons/IconFacebook.vue' ;
import InstagramIcon from '@/components/icons/IconInstagram.vue' ;
import TwitterIcon from '@/components/icons/IconTwitter.vue' ;
import YoutubeIcon from '@/components/icons/IconYoutube.vue' ;

</script>

<template>
    <footer class="grille lg:space-y-0">
      <a class="block w-20 h-20" href="/">
        <Logo />
      </a>
      <nav class="col-span-3 col-start-7 space-y-3">
        <h4>MENU</h4>
        <ul>
          <li class="text-orange font-inter"><a href="#">Conditions générales de ventes</a></li>
          <li class="text-orange font-inter"><a href="#">Politique de confidentialité </a></li>
          <li class="text-orange font-inter"><a href="#">Politique de cookies</a></li>
        </ul>
      </nav>
  
      <div class="col-span-3 col-start-10space-y-3">
        <h4>CONTACT</h4>
        <address class="text-orange font-inter">
            41 Place Brogolie<br />67000 Strasbourg<br />
          <a class="text-orange font-inter" href="tel:0384542727">03 84 54 27 27</a><br />
          <a class="text-orange font-inter" href="mailto:contact@potaneo.fr">contact@potaneo.fr</a>
        </address>
      </div>
  
      <div class=" col-span-3 col-start-10 space-y-3">
        <h4>NOUS SUIVRE</h4>
        <ul class="flex gap-4">
          <li>
            <a href="https://facebook.com" aria-label="facebook"> <FacebookIcon /> </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"> <InstagramIcon /> </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"> <TwitterIcon /> </a>
          </li>
          <li>
            <a href="https://youtube.com" aria-label="youtube"> <YoutubeIcon /> </a>
          </li>
        </ul>
      </div>
    </footer>
  </template>