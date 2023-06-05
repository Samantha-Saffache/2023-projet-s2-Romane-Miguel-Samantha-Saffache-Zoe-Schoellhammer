<script setup lang="ts">
</script>
<!--
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
-->

</template>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messagerie</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Styles spécifiques à la messagerie */
        .message-list {
            max-height: 400px;
            overflow-y: scroll;
        }
        .message {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
        }
        .message .avatar {
            width: 40px;
            height: 40px;
            background-color: #ddd;
            border-radius: 50%;
            margin-right: 1rem;
        }
        .message .content {
            flex: 1;
        }
        .message .content .author {
            font-weight: bold;
        }
        .message .content .text {
            margin-top: 0.25rem;
        }
        .message .content .timestamp {
            font-size: 0.8rem;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-4">Messagerie</h1>

        <div class="message-list">
            <!-- Liste des messages -->
            <div class="message">
                <div class="avatar"></div>
                <div class="content">
                    <div class="author">John Doe</div>
                    <div class="text">Salut, comment ça va ?</div>
                    <div class="timestamp">12:30 PM</div>
                </div>
            </div>
            <div class="message">
                <div class="avatar"></div>
                <div class="content">
                    <div class="author">Jane Smith</div>
                    <div class="text">Ça va bien, merci ! Et toi ?</div>
                    <div class="timestamp">12:35 PM</div>
                </div>
            </div>
        </div>

        <!-- Formulaire pour envoyer un message -->
        <form class="mt-4">
            <div class="flex">
                <input type="text" class="w-full px-4 py-2 rounded-l-lg" placeholder="Saisir votre message...">
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-r-lg">Envoyer</button>
            </div>
        </form>
    </div>
</body>
</html>
