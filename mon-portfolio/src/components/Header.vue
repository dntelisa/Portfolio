<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Projets', href: '#projets' },
  { name: 'Stack technique', href: '#stack' },
  { name: 'À propos', href: '#about' },
]
</script>

<template>
  <!-- La barre de navigation principale -->
  <header
    class="sticky top-0 z-30 w-full border-b border-slate-800 bg-slate-950/80 text-slate-200 backdrop-blur-md"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- 1. Logo (Aligné à Gauche - Prend 1/3 de l'espace) -->
        <div class="flex-shrink-0 md:w-1/3">
          <a
            href="/"
            class="text-2xl font-bold tracking-tighter transition-colors duration-300 hover:text-emerald-400"
          >
            Elisa<span class="text-emerald-500">.</span>dev
          </a>
        </div>

        <!-- 2. Navigation Bureau (Centrée au Milieu - Prend 1/3 de l'espace) -->
        <nav class="hidden w-1/3 justify-center md:flex">
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

        <!-- 3. Réseaux Sociaux Bureau (Alignés à Droite - Prend 1/3 de l'espace) -->
        <div class="hidden w-1/3 items-center justify-end space-x-5 md:flex">
          <a
            href="https://github.com/dntelisa"
            target="_blank"
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
            href="https://www.linkedin.com/in/elisa-donet"
            target="_blank"
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

        <!-- 4. Bouton Menu Hamburger (Mobile uniquement - Remplace les blocs 2 et 3 sur petit écran) -->
        <div class="flex items-center md:hidden">
          <button
            @click="isMobileMenuOpen = true"
            class="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Overlay sombre (Fond flouté) -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isMobileMenuOpen"
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
    ></div>
  </Transition>

  <!-- Menu Latéral Droite (Sidebar) -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-show="isMobileMenuOpen"
      class="fixed top-0 right-0 z-50 flex h-full w-64 flex-col border-l border-slate-800 bg-slate-900 shadow-2xl md:hidden"
    >
      <!-- En-tête du menu latéral avec la croix -->
      <div class="flex h-20 items-center justify-end border-b border-slate-800 px-4">
        <button
          @click="isMobileMenuOpen = false"
          class="p-2 text-slate-300 hover:text-white"
          aria-label="Fermer le menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Liens de navigation -->
      <ul class="flex-col space-y-6 px-6 pt-8">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            @click="isMobileMenuOpen = false"
            class="block text-lg font-medium text-slate-300 transition-colors hover:text-emerald-400"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Espace flexible pour pousser les icônes en bas si besoin -->
      <div class="flex-grow"></div>

      <!-- Réseaux Sociaux Mobile -->
      <div class="flex justify-center space-x-8 border-t border-slate-800 p-6">
        <a
          href="https://github.com/dntelisa"
          target="_blank"
          class="text-slate-400 transition-colors hover:text-emerald-400"
        >
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/elisa-donet"
          target="_blank"
          class="text-slate-400 transition-colors hover:text-emerald-400"
        >
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </Transition>
</template>
