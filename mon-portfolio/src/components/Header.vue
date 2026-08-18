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
        <div class="hidden md:block">
          <a
            href="#contact"
            class="rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Me contacter
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
            href="#contact"
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
