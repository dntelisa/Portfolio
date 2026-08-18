<script setup lang="ts">
import { ref } from 'vue'

// État pour gérer l'ouverture du menu sur mobile
const isMobileMenuOpen = ref(false)

// Liste des liens de navigation pour éviter de répéter le HTML
const navLinks: { name: string; href: string }[] = [
  { name: 'Projets', href: '#projets' },
  { name: 'Stack technique', href: '#stack' },
  { name: 'À propos', href: '#about' },
]
</script>

<template>
  <!-- 
    sticky & top-0 : Garde le header en haut lors du scroll
    backdrop-blur-md & bg-slate-950/80 : Crée l'effet de verre fumé 
  -->
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 text-slate-200 backdrop-blur-md"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="/"
            class="text-2xl font-bold tracking-tighter transition-colors duration-300 hover:text-emerald-400"
          >
            Elisa<span class="text-emerald-500">.</span>dev
          </a>
        </div>

        <!-- Navigation Bureau -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="link in navLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-emerald-400"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Bouton d'appel à l'action (Contact) Bureau -->
        <!-- Réseaux Sociaux Bureau -->
        <div class="hidden items-center space-x-5 md:flex">
          <a
            href="https://github.com/dntelisa"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition-colors duration-300 hover:text-emerald-400"
            aria-label="Mon profil GitHub"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/elisa-donet-4a51042a6"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition-colors duration-300 hover:text-emerald-400"
            aria-label="Mon profil LinkedIn"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <!-- Bouton Menu Burger (Mobile) -->
        <div class="md:hidden">
          <button
            class="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Ouvrir le menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Icône Croix si ouvert, Hamburger si fermé -->
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Déroulant Mobile -->
    <!-- On utilise v-show pour que Vue gère l'affichage dynamiquement -->
    <div v-show="isMobileMenuOpen" class="border-b border-slate-800 bg-slate-900 md:hidden">
      <ul class="space-y-2 px-4 pt-2 pb-6">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="block rounded-md px-3 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-emerald-400"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
        </li>
        <li class="pt-4">
          <a
            href="https://www.linkedin.com/in/elisa-donet-4a51042a6"
            class="block w-full rounded-md bg-emerald-500 px-5 py-3 text-center text-base font-medium text-slate-950 transition-colors hover:bg-emerald-400"
            @click="isMobileMenuOpen = false"
          >
            Me contacter
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
