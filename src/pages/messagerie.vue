<script setup lang="ts">
</script>

<template>
    
<div class="bg-[url('/img/fond_messagerie.png')]">
    <form class="">
        <label for="chat" class="sr-only"></label>

        <div class="flex items-center px-3 py-2 rounded-lg bottom:0">
            <textarea id="chat" rows="1" class="block px-[20px] py-[18px] w-full text-[12px] lg:text-[15px] text-noir bg-vert rounded-[26px]" placeholder="Votre message..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2  hover:bg-orange ">
                <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                <span class="sr-only">Envoyer</span>
            </button>
        </div>
    </form>
</div>


</template>


