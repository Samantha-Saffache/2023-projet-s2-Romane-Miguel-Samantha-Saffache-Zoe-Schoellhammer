<script setup lang="ts">
import PreparationIcon from '@/components/icons/IconPreparation.vue'  ;
import CuissonIcon from '@/components/icons/IconCuisson.vue'  ;
import FavorisIcon from '@/components/icons/IconFavoris.vue'  ;

</script>

<template>

<div>
    <div>
        <img src="../../public/img/crumble.png" alt="">
        <div>
            <img src="../../public/img/profil.png" alt="">
            <div>
                <p>@sylvie.adnt</p>
                <p>Crumble aux pommes golden</p>
            </div>
            <FavorisIcon />
        </div>

       <div>
        <PreparationIcon>20 min</PreparationIcon>

        <CuissonIcon>30 min</CuissonIcon>

       
       </div> 

    </div>
   
</div>


</template>