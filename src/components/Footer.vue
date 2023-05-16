<script setup lang="ts">
import logo from '@/components/icons/logo.vue' ;
import facebook from '@/components/icons/facebook.vue' ;
import instagram from '@/components/icons/instagram.vue' ;
import twitter from '@/components/icons/twitter.vue' ;
import youtube from '@/components/icons/youtube.vue' ;
</script>

<template>
    <footer>
      <nav>
        <h4>Menu</h4>
        <ul>
          <li><a href="#">Conditions générales de ventes</a></li>
          <li><a href="#">Politique de confidentialité </a></li>
          <li><a href="#">Politique de cookies</a></li>
        </ul>
      </nav>
  
      <div>
        <h4>Contact</h4>
        <address>
            41 Place Brogolie<br />67000 Strasbourg<br />
          <a href="tel:0384542727">03 84 54 27 27</a><br />
          <a href="mailto:contact@potaneo.fr">contact@potaneo.fr</a>
        </address>
      </div>
  
      <div></div>
  
      <div>
        <h4>Nous suivre</h4>
        <ul>
          <li>
            <a href="https://facebook.com" aria-label="facebook"> </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"> </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"> </a>
          </li>
          <li>
            <a href="https://youtube.com" aria-label="youtube"> </a>
          </li>
        </ul>
      </div>
    </footer>
  </template>